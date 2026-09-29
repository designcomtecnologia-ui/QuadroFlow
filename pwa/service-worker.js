const CACHE_VERSION = 'quadroflow-pwa-v1.3.0';
const APP_SHELL = [
  './',
  './index.html',
  './QuadroFlow.html',
  './entregues.html',
  './lixeira.html',
  './qf-storage.js',
  './manifest.json',
  './logo-quadroflow.png',
  './quadroflow-icon-192.png',
  './quadroflow-icon-256.png',
  './quadroflow-icon-512.png',
  './quadroflow-icon-384.png',
  './quadroflow-icon-1024.png',
  './apple-touch-icon.png',
  './favicon.ico',
  './fonts/Inter-Regular.otf',
  './fonts/Inter-Medium.otf',
  './fonts/Inter-SemiBold.otf',
  './fonts/Inter-Bold.otf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then(cached =>
          cached || caches.match('./index.html') || caches.match('./QuadroFlow.html')
        ))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
