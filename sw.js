self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/card',
        '/assets/card.js',
        '/assets/style.css',
        '/assets/bar.js' // dodaj inne pliki jeśli potrzeba
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
