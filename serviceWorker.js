const CACHE_NAME = "pwa-gmail-cache";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(cache)))
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(event.request).then(response => response ?? fetch(e.request)))
});
