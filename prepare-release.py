"""Usage: python3 prepare-release.py 2026-10-06-1 [new-catalog.json]
Creates a new version from the currently selected version. Does not upload files.
"""
from pathlib import Path
import json,re,shutil,sys
base=Path(__file__).resolve().parent/'calculator'
if len(sys.argv) not in (2,3) or not re.fullmatch(r'[A-Za-z0-9][A-Za-z0-9._-]{0,79}',sys.argv[1]):
 raise SystemExit('Usage: python3 prepare-release.py VERSION [catalog.json]')
version=sys.argv[1];manifest=json.loads((base/'manifest.json').read_text())
src=base/'releases'/manifest['release'];dest=base/'releases'/version
if dest.exists():raise SystemExit('Version already exists. Choose a new version.')
catalog_file=Path(sys.argv[2]) if len(sys.argv)==3 else src/'catalog.json'
catalog=json.loads(catalog_file.read_text())
assert catalog.get('platforms'),'Empty catalog'
for p in catalog['platforms']:
 assert p.get('id') and p.get('label') and p.get('types')
 for t in p['types']:
  assert t.get('name') and isinstance(t.get('parameters'),list) and isinstance(t.get('rows'),list)
  for row in t['rows']:
   assert re.fullmatch(r'\d+',str(row.get('serviceId',''))) and isinstance(row.get('values'),dict)
shutil.copytree(src,dest)
(dest/'catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,separators=(',',':')))
(base/'manifest.json').write_text(json.dumps({'schema':1,'release':version},indent=2)+'\n')
print('Prepared:',dest)
print('Upload the new release folder first, then calculator/manifest.json. Keep previous versions.')
