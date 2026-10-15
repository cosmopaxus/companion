// Equilibrium service worker: offline app shell.
// Navigations go to the network first (so a new version shows up on the next open) and fall back to
// the cached shell when offline. Hashed bundles and icons are served cache-first.
// The build id and precache list below are filled in by scripts/postbuild-web.mjs.
// v2's caches are prefixed 'companion2-' so they never touch the first build's caches on a shared origin.
const CACHE = 'companion2-mv905va1';
const PRECACHE = ["./","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./fonts/cinzel-700.woff2","./fonts/nunito-400.woff2","./fonts/nunito-600.woff2","./fonts/nunito-700.woff2","./app/static/js/web/index-64309524bddb945bf6423da2fba55b1a.js"];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('companion2-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => caches.match('./').then((r) => r || caches.match(req))),
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok && /\.(js|png|jpg|webmanifest|ico)$/.test(url.pathname)) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
