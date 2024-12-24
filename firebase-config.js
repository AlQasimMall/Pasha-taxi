// التكوين الأساسي
const firebaseConfig = {
    apiKey: "AIzaSyDGpAHia_wEmrhnmYjrPf1n1TrAzwEMiAI",
    authDomain: "messageemeapp.firebaseapp.com",
    databaseURL: "https://messageemeapp-default-rtdb.firebaseio.com",
    projectId: "messageemeapp",
    storageBucket: "messageemeapp.appspot.com",
    messagingSenderId: "255034474844",
    appId: "1:255034474844:web:5e3b7a6bc4b2fb94cc4199"
};

// تهيئة Firebase (فقط إذا لم تكن مهيأة)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// تهيئة الخدمات
const database = firebase.database();
const storage = firebase.storage();
const messaging = firebase.messaging();

// تكوين FCM
messaging.usePublicVapidKey('BI9cpoewcZa1ftyZ_bGjO0GYa4_cT0HNja4YFd6FwLwHg5c0gQ5iSj_MJZRhMxKdgJ0-d-_rEXcpSQ_cx7GqCSc');

// تحديث token الإشعارات
async function updateNotificationToken(userId) {
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            const token = await messaging.getToken();
            await database.ref(`users/${userId}/notificationToken`).set(token);
            console.log('تم تحديث token الإشعارات بنجاح');
        }
    } catch (error) {
        console.error('خطأ في تحديث token الإشعارات:', error);
    }
}

// استماع لتحديثات الـ token
messaging.onTokenRefresh(async () => {
    try {
        const token = await messaging.getToken();
        const userId = localStorage.getItem('userId');
        if (userId) {
            await database.ref(`users/${userId}/notificationToken`).set(token);
        }
    } catch (error) {
        console.error('خطأ في تحديث token الإشعارات:', error);
    }
});

// معالجة الإشعارات
messaging.onMessage((payload) => {
    console.log('تم استلام إشعار:', payload);
    const notification = payload.notification;
    if (window.locationNotificationSystem) {
        window.locationNotificationSystem.showInAppNotification({
            title: notification.title,
            body: notification.body,
            icon: notification.icon
        });
    }
});

// التحقق من صلاحيات الموقع
async function checkLocationPermission() {
    if ('permissions' in navigator) {
        try {
            const result = await navigator.permissions.query({ name: 'geolocation' });
            return result.state === 'granted';
        } catch (error) {
            console.error('خطأ في التحقق من صلاحيات الموقع:', error);
            return false;
        }
    }
    return !!navigator.geolocation;
}

// تسجيل Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
            messaging.useServiceWorker(registration);
            console.log('تم تسجيل Service Worker بنجاح');
        })
        .catch((error) => {
            console.error('خطأ في تسجيل Service Worker:', error);
        });
}

// جعل المتغيرات والدوال متاحة عالمياً
window.firebaseDb = database;
window.firebaseStorage = storage;
window.firebaseMessaging = messaging;
window.updateNotificationToken = updateNotificationToken;
window.checkLocationPermission = checkLocationPermission;