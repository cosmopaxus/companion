// Equilibrium service worker: offline app shell.
// Navigations go to the network first (so a new version shows up on the next open) and fall back to
// the cached shell when offline. Hashed bundles and icons are served cache-first.
// The build id and precache list below are filled in by scripts/postbuild-web.mjs.
// v2's caches are prefixed 'companion2-' so they never touch the first build's caches on a shared origin.
const CACHE = 'companion2-mva1aa79';
const PRECACHE = ["./","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./fonts/cinzel-700.woff2","./fonts/nunito-400.woff2","./fonts/nunito-600.woff2","./fonts/nunito-700.woff2","./app/static/js/web/index-492ed4551c8157a489aa8ef191dc5a8b.js","./art/academy-at-sunrise.jpg","./art/blur/academy-at-sunrise.jpg","./art/blur/hall-air-the-observatory.jpg","./art/blur/hall-earth-the-herb-garden.jpg","./art/blur/hall-fire-the-forge.jpg","./art/blur/hall-of-ascension.jpg","./art/blur/hall-water-the-moon-pool.jpg","./art/blur/healing-sanctuary.jpg","./art/blur/path-map-academy-grounds.jpg","./art/familiars/familiar-air-sylph-head.jpg","./art/familiars/familiar-earth-gnome-head.jpg","./art/familiars/familiar-fire-salamander-head.jpg","./art/familiars/familiar-water-undine-head.jpg","./art/hall-air-the-observatory.jpg","./art/hall-earth-the-herb-garden.jpg","./art/hall-fire-the-forge.jpg","./art/hall-of-ascension.jpg","./art/hall-water-the-moon-pool.jpg","./art/healing-sanctuary.jpg","./art/path-map-academy-grounds.jpg","./art/seals/seal-air.jpg","./art/seals/seal-earth.jpg","./art/seals/seal-fire.jpg","./art/seals/seal-water.jpg"];

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
          if (res.ok && /\.(js|png|jpg|webp|woff2|mp3|m4a|webmanifest|ico)$/.test(url.pathname)) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
