// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDGpAHia_wEmrhnmYjrPf1n1TrAzwEMiAI",
    authDomain: "messageemeapp.firebaseapp.com",
    databaseURL: "https://messageemeapp-default-rtdb.firebaseio.com",
    projectId: "messageemeapp",
    storageBucket: "messageemeapp.appspot.com",
    messagingSenderId: "255034474844",
    appId: "1:255034474844:web:5e3b7a6bc4b2fb94cc4199"
});

const messaging = firebase.messaging();

// معالجة الإشعارات في الخلفية
messaging.onBackgroundMessage((payload) => {
    console.log('تم استلام إشعار في الخلفية:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || '/icon.png',
        badge: '/badge.png',
        vibrate: [200, 100, 200],
        data: payload.data
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// معالجة النقر على الإشعار
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    // توجيه المستخدم إلى الصفحة المناسبة
    if (event.notification.data && event.notification.data.tripId) {
        const tripId = event.notification.data.tripId;
        event.waitUntil(
            clients.openWindow(`/trip/${tripId}`)
        );
    } else {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});