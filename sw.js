// Equilibrium service worker: offline app shell.
// Navigations go to the network first (so a new version shows up on the next open) and fall back to
// the cached shell when offline. Hashed bundles and icons are served cache-first.
// The build id and precache list below are filled in by scripts/postbuild-web.mjs.
//
// Caches: this build's is 'companion2-<build>'. The first build ("Companion", Sep 2026) used
// 'companion-<build>'. Release 3.1 (Oct 17, 2026):
// - The worker reads only its own current cache. It used to search every cache on the origin,
//   oldest first, so a device that once ran the first build got that build's "Companion" manifest
//   (Chrome offered to rename the installed app) and, offline, its old shell.
// - On activate it deletes this app's older caches: 'companion2-…' and the first build's
//   'companion-…'. Other apps on the same origin (the lab's 'companionlab-…') are never touched.
const CACHE = 'companion2-mvd90tmc';
const PRECACHE = ["./","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/apple-touch-icon.png","./fonts/cinzel-700.woff2","./fonts/nunito-400.woff2","./fonts/nunito-600.woff2","./fonts/nunito-700.woff2","./app/static/js/web/index-4a47dabcd55ccf59cd3c0213a46d35e3.js","./art/academy-at-sunrise.jpg","./art/blur/academy-at-sunrise.jpg","./art/blur/hall-air-the-observatory.jpg","./art/blur/hall-earth-the-herb-garden.jpg","./art/blur/hall-fire-the-forge.jpg","./art/blur/hall-of-ascension.jpg","./art/blur/hall-water-the-moon-pool.jpg","./art/blur/healing-sanctuary.jpg","./art/blur/path-map-academy-grounds.jpg","./art/familiars/familiar-air-sylph-head.jpg","./art/familiars/familiar-earth-gnome-head.jpg","./art/familiars/familiar-fire-salamander-head.jpg","./art/familiars/familiar-water-undine-head.jpg","./art/hall-air-the-observatory.jpg","./art/hall-earth-the-herb-garden.jpg","./art/hall-fire-the-forge.jpg","./art/hall-of-ascension.jpg","./art/hall-water-the-moon-pool.jpg","./art/healing-sanctuary.jpg","./art/path-map-academy-grounds.jpg","./art/seals/seal-air.jpg","./art/seals/seal-earth.jpg","./art/seals/seal-fire.jpg","./art/seals/seal-water.jpg"];
const OURS = (k) => k.startsWith('companion2-') || k.startsWith('companion-');
const ownCache = () => caches.open(CACHE);

self.addEventListener('install', (event) => {
  // cache: 'reload' skips the browser's HTTP cache, so a new version stores fresh copies.
  event.waitUntil(ownCache().then((c) => c.addAll(PRECACHE.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => OURS(k) && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
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
          ownCache().then((c) => c.put('./', copy));
          return res;
        })
        .catch(() => ownCache().then((c) => c.match('./').then((r) => r || c.match(req)))),
    );
    return;
  }

  event.respondWith(
    ownCache().then((c) =>
      c.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res.ok && /\.(js|png|jpg|webp|woff2|mp3|m4a|webmanifest|ico)$/.test(url.pathname)) {
              c.put(req, res.clone());
            }
            return res;
          }),
      ),
    ),
  );
});
