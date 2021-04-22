self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('offline-cache').then((cache) => cache.addAll([
        '/',
        '/index.html',
        '/manifest.webmanifest',
        '/sw.js',
        '/lib/preact.module.js',
        '/lib/preact.module.js.map',
        '/extras/leaves_small.jpg',
        '/logo.png'
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request)
        .catch(() => caches.match(e.request))
    );
});