// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js');

// تكوين Firebase - نفس التكوين الموجود في الملف الرئيسي
firebase.initializeApp({
    apiKey: "AIzaSyDGpAHia_wEmrhnmYjrPf1n1TrAzwEMiAI",
    authDomain: "messageemeapp.firebaseapp.com",
    databaseURL: "https://messageemeapp-default-rtdb.firebaseio.com",
    projectId: "messageemeapp",
    storageBucket: "messageemeapp.appspot.com",
    messagingSenderId: "255034474844",
    appId: "1:255034474844:web:5e3b7a6bc4b2fb94cc4199",
    measurementId: "G-4QBEWRC583"
});

const messaging = firebase.messaging();

// التعامل مع الإشعارات في الخلفية
messaging.onBackgroundMessage(function(payload) {
    console.log('[firebase-messaging-sw.js] تم استلام رسالة في الخلفية:', payload);

    const notificationTitle = payload.notification.title || 'إشعار جديد';
    const notificationOptions = {
        body: payload.notification.body || 'محتوى الإشعار',
        icon: '/notification-icon.png',
        badge: '/notification-icon.png',
        // يمكنك إضافة المزيد من الخيارات هنا
        data: payload.data
    };

    // عرض الإشعار
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// التعامل مع النقر على الإشعار
self.addEventListener('notificationclick', function(event) {
    console.log('[firebase-messaging-sw.js] تم النقر على الإشعار');

    // إغلاق الإشعار
    event.notification.close();

    // يمكنك إضافة سلوك مخصص عند النقر على الإشعار
    // مثلاً: فتح نافذة أو صفحة معينة
    event.waitUntil(
        clients.openWindow('/')
    );
});
