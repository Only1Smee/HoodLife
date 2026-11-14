/* Hood Life service worker — network first so new uploads land straight away,
   falls back to the cached copy when offline. Bump VERSION with each release. */
const VERSION='hoodlife-v0.4.0-d';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./splash.jpg'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION&&!k.endsWith('-fonts')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET') return; const u=new URL(r.url);
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){ e.respondWith(caches.open(VERSION+'-fonts').then(c=>c.match(r).then(m=>m||fetch(r).then(res=>{ c.put(r,res.clone()); return res; })))); return; }
  if(u.origin!==location.origin) return;
  e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{ if(res&&res.ok){ const copy=res.clone(); caches.open(VERSION).then(c=>c.put(r,copy)); } return res; })
    .catch(()=>caches.match(r).then(m=>m||caches.match('./index.html')))); });
