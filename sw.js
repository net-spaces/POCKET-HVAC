const CACHE_NAME = 'pocket-hvac-v5';

const urlsToCache = [
  '/POCKET-HVAC/',
  '/POCKET-HVAC/index.html',
  '/POCKET-HVAC/bomba_hidraulica.html',
  '/POCKET-HVAC/calculo_aerotermia.html',
  '/POCKET-HVAC/calculo_cableado.html',
  '/POCKET-HVAC/calculo_climatizacion.html',
  '/POCKET-HVAC/calculo_conductos_pro.html',
  '/POCKET-HVAC/calculo_ventilacion.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});