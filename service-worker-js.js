const CACHE_NAME = 'nyazek-store-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles/main.css',
  '/scripts/main.js',
  'https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2FPhotoroom-%D9%A2%D9%A0%D9%A2%D9%A4%D9%A1%D9%A2%D9%A1%D9%A4_%D9%A0%D9%A9%D9%A4%D9%A6%D9%A5%D9%A1.png?alt=media&token=a8374a80-d851-4745-9a15-6e8cc5c432df'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});