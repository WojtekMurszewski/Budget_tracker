// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyCGGF8s-eq99d4-WPS_greT54y17sHorFo",
    authDomain: "project-psm-b0980.firebaseapp.com",
    projectId: "project-psm-b0980",
    storageBucket: "project-psm-b0980.appspot.com",
    messagingSenderId: "166483875752",
    appId: "1:166483875752:web:97c02ddf19977412ed2f9d",
    databaseURL: "https://project-psm-b0980-default-rtdb.europe-west1.firebasedatabase.app",
    appId: "1:166483875752:web:97c02ddf19977412ed2f9d",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ', payload );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });