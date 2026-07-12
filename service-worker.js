const CACHE_NAME = "novel-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",

  // 画像
  "/img/page1.jpg",
  "/img/page2.jpg",

  // 音声
  "/audio/page1.mp3",
  "/audio/page2.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request))
  );
});
