const CACHE = 'abc-wort-v1';
const FILES = [
  '/ABC-Wort/',
  '/ABC-Wort/index.html',
  '/ABC-Wort/icon-512.png',
  '/ABC-Wort/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
