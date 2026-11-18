const cacheName = "Transsafety_Minimal_Cache";
const precachedResources = [
    "/", "/safe", "/backup", "/index.html", "/safe/index.html", "/backup/index.html",
    "/app.webmanifest", "/favicon.ico", "/favicon.png", "/service-worker.js",
    "/safe-form.js", "/core-linker.js", "/master.css",
    "/safe/safe.js", 
    "/core/transsafety_minimal_core_bg.wasm", "/core/transsafety_minimal_core.js",
    "/backup/backup.js"
];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(precachedResources);
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (precachedResources.includes(url.pathname)) {
    event.respondWith(cacheFirst(event.request));
  }
});