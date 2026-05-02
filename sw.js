self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('famiglia-v1').then((cache) => {
      return cache.addAll([
        '/gestione-famiglia/',
        '/gestione-famiglia/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => {
      return r || fetch(e.request);
    })
  );
});
