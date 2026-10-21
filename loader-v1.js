(function(){
 'use strict';
 if(window.SMMPrimeLoaderV1){window.SMMPrimeLoaderV1.scan();return;}
 const CDN='https://cdn.jsdelivr.net/gh/bread2077/temp@main/calculator/';
 const MANIFEST='https://raw.githubusercontent.com/bread2077/temp/main/calculator/manifest.json';
 const INITIAL={schema:1,release:'2026-10-05-1'};
 const CACHE='smmprime.calculator.release.v1';
 let assetsPromise;
 const mounted=new WeakSet();
 function valid(m){return m&&m.schema===1&&typeof m.release==='string'&&/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,79}$/.test(m.release);}
 async function json(url,uncached){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{const r=await fetch(url,{signal:controller.signal,cache:uncached?'no-store':'default',credentials:'omit'});if(!r.ok)throw Error('HTTP '+r.status);return await r.json();}
  finally{clearTimeout(timer);}
 }
 function remembered(){try{const m=JSON.parse(localStorage.getItem(CACHE));return valid(m)?m:INITIAL;}catch(e){return INITIAL;}}
 async function manifest(){try{const m=await json(MANIFEST+'?t='+Date.now(),true);if(!valid(m))throw Error('Invalid release');return m;}catch(e){return remembered();}}
 function script(url){return new Promise((resolve,reject)=>{
  const el=document.createElement('script');el.src=url;el.async=true;
  const timer=setTimeout(()=>{el.remove();reject(Error('Script timeout'));},20000);
  el.onload=()=>{clearTimeout(timer);resolve();};el.onerror=()=>{clearTimeout(timer);el.remove();reject(Error('Script unavailable'));};
  document.head.appendChild(el);
 });}
 function catalogValid(c){
  return c&&Array.isArray(c.platforms)&&c.platforms.length>0&&c.platforms.every(p=>
   typeof p.id==='string'&&typeof p.label==='string'&&Array.isArray(p.types)&&p.types.length>0&&p.types.every(t=>
    typeof t.name==='string'&&Array.isArray(t.parameters)&&t.parameters.every(x=>typeof x==='string')&&Array.isArray(t.rows)&&t.rows.every(r=>
     /^\d+$/.test(String(r.serviceId))&&r.values&&typeof r.values==='object'&&(!r.url||/^https:\/\/smmprime\.com\/\?service=\d+$/.test(r.url)))));
 }
 async function loadRelease(m){
  const base=CDN+'releases/'+m.release+'/';
  const catalog=await json(base+'catalog.json');
  if(!catalogValid(catalog))throw Error('Invalid catalog');
  await script(base+'calculator.js');
  if(typeof window.SMMPrimeCalculator!=='function')throw Error('Missing calculator');
  return {manifest:m,catalog,css:base+'calculator.css',mount:window.SMMPrimeCalculator};
 }
 async function assets(){
  const m=await manifest();
  try{return await loadRelease(m);}catch(error){
   const previous=remembered();
   if(previous.release===m.release)throw error;
   return loadRelease(previous);
  }
 }
 async function mount(host){
  if(mounted.has(host))return;mounted.add(host);
  try{
   if(!assetsPromise)assetsPromise=assets().catch(e=>{assetsPromise=null;throw e;});
   const a=await assetsPromise;
   const shadow=host.shadowRoot||host.attachShadow({mode:'open'});
   const mode=host.dataset.mode==='account'?'account':'guest';
   // Load styles before initialization; no unstyled cards or duplicate timers on retry.
   shadow.innerHTML='<p>Загрузка калькулятора…</p>';
   const link=document.createElement('link');link.rel='stylesheet';link.href=a.css;
   const wrapper=document.createElement('div');wrapper.hidden=true;
   shadow.appendChild(wrapper);
   await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(Error('Style timeout')),15000);
    link.onload=()=>{clearTimeout(timer);resolve();};link.onerror=()=>{clearTimeout(timer);reject(Error('Style unavailable'));};
    shadow.appendChild(link);
   });
   a.mount(wrapper,a.catalog,{mode,title:host.dataset.title==='true',switcher:host.dataset.switcher==='true'});
   shadow.querySelector('p').remove();wrapper.hidden=false;
   try{localStorage.setItem(CACHE,JSON.stringify(a.manifest));}catch(e){}
  }catch(error){
   mounted.delete(host);
   const target=host.shadowRoot||host;
   target.innerHTML='<p>Калькулятор временно недоступен. <a href="/services">Посмотреть услуги</a></p>';
   const retry=document.createElement('button');retry.type='button';retry.textContent='Повторить загрузку';retry.onclick=()=>mount(host);target.appendChild(retry);
  }
 }
 function scan(){
  document.querySelectorAll('[data-smmprime-calculator]').forEach(host=>mount(host));
 }
 window.SMMPrimeLoaderV1={scan};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan,{once:true});else scan();
})();
