const CACHE_NAME = 'color-lab-v1';
const assets = ['./colores.html', 'https://cdn.tailwindcss.com', 'https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.6.0/tinycolor.min.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});