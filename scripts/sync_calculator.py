#!/usr/bin/env python3
"""Read public Sheets XLSX; validate and prepare an immutable calculator release."""
import argparse
import datetime as dt
import io
import json
import os
from pathlib import Path
import re
import shutil
import sys
import urllib.request
import openpyxl

SHEET_ID = '1MBec8T24PMIj5Nrl8EYaAcQ-wvkv66KPjnfWCC8pGhE'
RESERVED = {'Service ID', 'Ссылка', 'Название/описание', 'Цена', 'Комментарий', 'Мин. кол-во', 'Макс. кол-во'}
IGNORE = {'Инструкция', 'Навигация'}

def text(v):
    if v is None: return ''
    if isinstance(v, float) and v.is_integer(): return str(int(v))
    return str(v).strip()

def excel_name(v):
    return re.sub(r'[\\/*?:\[\]]', '', v)[:31]

def read_json(path):
    return json.loads(path.read_text(encoding='utf-8'))

def build(workbook, old):
    platforms = {}
    sheet_names = {}
    labels = {}
    for p in old['platforms']:
        for alias in (p['label'], p['id'], excel_name(p['label'])):
            labels[alias.casefold()] = p
        for t in p['types']:
            sheet_names[excel_name(t['sheet'])] = (p, t['sheet'])
    result = {'source': old.get('source', 'SMMPRIME Google Sheets'), 'platforms': []}
    for ws in workbook:
        if ws.title in IGNORE: continue
        rows = list(ws.values)
        if not any(any(text(v) for v in r) for r in rows): continue
        hi = next((i for i,r in enumerate(rows[:30]) if r and text(r[0]) == 'Service ID'), None)
        if hi is None: raise ValueError(f'{ws.title}: отсутствует заголовок Service ID')
        header = [text(v) for v in rows[hi]]
        nonempty = [h for h in header if h]
        if len(set(nonempty)) != len(nonempty): raise ValueError(f'{ws.title}: повторяется название столбца')
        canonical = sheet_names.get(ws.title)
        name = canonical[1] if canonical else ws.title
        parts = [x.strip() for x in name.split('—', 1)]
        p = canonical[0] if canonical else labels.get(parts[0].casefold())
        if p is None: raise ValueError(f'{ws.title}: новая соцсеть требует добавления в калькулятор')
        records = []
        for n,row in enumerate(rows[hi+1:], hi+2):
            if not any(text(v) for v in row): continue
            if any(text(v) for i,v in enumerate(row) if i >= len(header) or not header[i]):
                raise ValueError(f'{ws.title}, строка {n}: данные в столбце без заголовка')
            r = {h: row[i] if i < len(row) else None for i,h in enumerate(header) if h}
            sid = text(r.get('Service ID'))
            if not re.fullmatch(r'[1-9][0-9]*', sid):
                raise ValueError(f'{ws.title}, строка {n}: неверный или пустой Service ID')
            r['Service ID'] = sid
            records.append(r)
        if not records: continue
        names = [parts[1]] if len(parts)==2 else list(dict.fromkeys(text(r.get('Что накручивать')) for r in records))
        if not all(names): raise ValueError(f'{ws.title}: не заполнено Что накручивать')
        target = platforms.get(p['id'])
        if target is None:
            target = {'id':p['id'], 'label':p['label'], 'types':[]}
            platforms[p['id']] = target
            result['platforms'].append(target)
        for kind in names:
            group = records if len(parts)==2 else [r for r in records if text(r.get('Что накручивать'))==kind]
            params = [h for h in header if h and h not in RESERVED and (len(parts)==2 or h!='Что накручивать') and any(text(r.get(h)) for r in group)]
            if any(t['name']==kind for t in target['types']): raise ValueError(f'{ws.title}: повторяется тип услуги {kind}')
            data = []
            for r in group:
                data.append({'serviceId':r['Service ID'], 'url':'https://smmprime.com/?service='+r['Service ID'],
                             'values':{h:text(r.get(h)) for h in params}, 'name':text(r.get('Название/описание')),
                             'comment':text(r.get('Комментарий')), 'price':r.get('Цена'),
                             'min':r.get('Мин. кол-во'), 'max':r.get('Макс. кол-во')})
            target['types'].append({'name':kind, 'sheet':name, 'parameters':params, 'rows':data})
    if not result['platforms']: raise ValueError('Каталог пуст: публикация отменена')
    # Validate serializability and reject NaN/infinity before any write.
    json.dumps(result, ensure_ascii=False, allow_nan=False)
    return result

def count(c):
    return sum(len(t['rows']) for p in c['platforms'] for t in p['types'])

def validate_change(old, new, allow_large):
    old_groups = {(p['id'],t['name']):t for p in old['platforms'] for t in p['types']}
    new_groups = {(p['id'],t['name']):t for p in new['platforms'] for t in p['types']}
    if not allow_large and (count(new)<count(old)*0.8 or old_groups.keys()-new_groups.keys()):
        raise ValueError('Удалён раздел или более 20% строк. Проверьте таблицу. Для намеренного удаления запустите вручную с allow_large_changes.')

def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('--xlsx', type=Path, help='Local read-only fixture for testing')
    parser.add_argument('--root', type=Path, default=Path('.'))
    parser.add_argument('--allow-large-changes', action='store_true')
    args=parser.parse_args()
    root=args.root/'calculator'
    manifest=read_json(root/'manifest.json')
    version=manifest.get('release','')
    if manifest.get('schema')!=1 or not re.fullmatch(r'[a-zA-Z0-9][a-zA-Z0-9._-]{0,79}',version):
        raise ValueError('Некорректный manifest.json')
    current=root/'releases'/version
    old=read_json(current/'catalog.json')
    if args.xlsx:
        raw=args.xlsx.read_bytes()
    else:
        url=f'https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=xlsx'
        with urllib.request.urlopen(url, timeout=60) as response:
            raw=response.read(20*1024*1024+1)
        if len(raw)>20*1024*1024 or not raw.startswith(b'PK'):
            raise ValueError('Не удалось получить XLSX. Проверьте доступ: Все, у кого есть ссылка — Читатель')
    workbook=openpyxl.load_workbook(io.BytesIO(raw), read_only=True, data_only=True)
    try: new=build(workbook,old)
    finally: workbook.close()
    validate_change(old,new,args.allow_large_changes or os.environ.get('ALLOW_LARGE_CHANGES')=='true')
    if new['platforms']==old['platforms']:
        print('Изменений нет: новая версия не нужна.')
        return
    now=dt.datetime.now(dt.timezone.utc)
    new['generatedAt']=now.date().isoformat()
    release=now.strftime('%Y-%m-%d-%H%M%S')+'-'+os.environ.get('GITHUB_RUN_ID','local')+'-'+os.environ.get('GITHUB_RUN_ATTEMPT','1')
    if not re.fullmatch(r'[a-zA-Z0-9._-]{1,80}',release): raise ValueError('Некорректный номер версии')
    destination=root/'releases'/release
    # Reuse current UI files verbatim; no stale bundled copy of the design.
    for filename in ('calculator.js','calculator.css'):
        if not (current/filename).is_file(): raise ValueError('Отсутствует '+filename)
    destination.mkdir(parents=True,exist_ok=False)
    for filename in ('calculator.js','calculator.css'):
        shutil.copyfile(current/filename,destination/filename)
    (destination/'catalog.json').write_text(json.dumps(new,ensure_ascii=False,separators=(',',':'),allow_nan=False)+'\n',encoding='utf-8')
    temp=root/'manifest.json.tmp'
    temp.write_text(json.dumps({'schema':1,'release':release},indent=2)+'\n',encoding='utf-8')
    temp.replace(root/'manifest.json')
    print(f'Подготовлена версия {release}: {count(old)} → {count(new)} строк.')

if __name__=='__main__':
    try: main()
    except Exception as exc:
        print(f'Синхронизация остановлена: {exc}',file=sys.stderr)
        sys.exit(1)
