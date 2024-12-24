// استيراد مكتبات Firebase
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// تهيئة Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDGpAHia_wEmrhnmYjrPf1n1TrAzwEMiAI",
    authDomain: "messageemeapp.firebaseapp.com",
    projectId: "messageemeapp",
    storageBucket: "messageemeapp.appspot.com",
    messagingSenderId: "255034474844",
    appId: "1:255034474844:web:5e3b7a6bc4b2fb94cc4199"
});

// تهيئة الإشعارات
const messaging = firebase.messaging();

// التعامل مع الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/pngwing.com.png',
        badge: '/pngwing.com.png',
        tag: payload.data?.notificationId || 'default',
        data: payload.data
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// التخزين المؤقت
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/styles/main.css',
    '/scripts/main.js',
    'https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2F7605a607-6cf8-4b32-aee1-fa7558c98452.png?alt=media&token=5cf9e67c-ba6e-4431-a6a0-79dede15b527',
    'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.rtl.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    '/offline.html'
];

// تثبيت Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache opened successfully');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // تخطي مرحلة الانتظار
    );
});

// تنشيط Service Worker وحذف التخزين المؤقت القديم
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// التعامل مع طلبات الشبكة
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(function(networkResponse) {
                        if (!networkResponse || networkResponse.status !== 200) {
                            return networkResponse;
                        }

                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch(function() {
                        if (event.request.destination === 'image') {
                            return caches.match('https://firebasestorage.googleapis.com/v0/b/messageemeapp.appspot.com/o/driver-images%2F7605a607-6cf8-4b32-aee1-fa7558c98452.png?alt=media&token=5cf9e67c-ba6e-4431-a6a0-79dede15b527');
                        }
                        if (event.request.mode === 'navigate') {
                            return caches.match('/offline.html');
                        }
                    });
            })
    );
});

// معالجة أحداث التحديث
self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

// تسجيل Token الإشعارات
messaging.getToken({ vapidKey: 'BI9cpoewcZa1ftyZ_bGjO0GYa4_cT0HNja4YFd6FwLwHg5c0gQ5iSj_MJZRhMxKdgJ0-d-_rEXcpSQ_cx7GqCSc' })
    .then((currentToken) => {
        if (currentToken) {
            console.log('Token:', currentToken);
            // أرسل التوكن إلى السيرفر الخاص بك لتخزينه
        } else {
            console.log('No registration token available.');
        }
    })
    .catch((err) => {
        console.error('Error while retrieving token:', err);
    });
