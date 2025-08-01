const CACHE_NAME = "essential-kitchen-cache-v9";
const urlsToCache = [
  "/essentialkitchengear/",
  "/essentialkitchengear/index.html",
  "/essentialkitchengear/style.css",
  "/essentialkitchengear/script.js",
  "/essentialkitchengear/manifest.json",
  "/essentialkitchengear/icon-192.png",
  "/essentialkitchengear/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
