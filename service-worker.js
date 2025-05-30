self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("pistelaskuri").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon.png",
        "service-worker.js"
      ]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
