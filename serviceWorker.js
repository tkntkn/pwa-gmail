const CACHE_NAME = "pwa-gmail-cache";

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll([])))
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then(response => response ?? fetch(event.request)))
});
