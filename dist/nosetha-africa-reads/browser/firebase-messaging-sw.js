// Firebase Cloud Messaging service worker for web push notifications.
// This file must live at /firebase-messaging-sw.js (the root of the site).
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyA-CYJ9L-nEkvS4Tr13GqAYt4aVQQpxcmo',
  authDomain: 'nosetha-africa-reads-518c0.firebaseapp.com',
  projectId: 'nosetha-africa-reads-518c0',
  storageBucket: 'nosetha-africa-reads-518c0.firebasestorage.app',
  messagingSenderId: '18187986405',
  appId: '1:18187986405:web:0a9b46864066a2b68b3b0c',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon, click_action } = payload.notification || {};
  self.registration.showNotification(title || 'Africa Reads', {
    body: body || '',
    icon: icon || '/brand/icon-192.png',
    badge: '/brand/favicon-32.png',
    data: { url: click_action || '/' },
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(clients.openWindow(url));
});
