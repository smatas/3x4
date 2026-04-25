var CACHE = 'm3x4-v4';
var FILES = ['/3x4/', '/3x4/index.html', '/3x4/manifest.json'];

self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k!==CACHE; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});

// Network first: intenta siempre la red, usa caché solo si falla
self.addEventListener('fetch', function(e){
  e.respondWith(
    fetch(e.request).then(function(resp){
      var clone = resp.clone();
      caches.open(CACHE).then(function(c){ c.put(e.request, clone); });
      return resp;
    }).catch(function(){
      return caches.match(e.request).then(function(cached){
        return cached || caches.match('/3x4/index.html');
      });
    })
  );
});
