import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getMessaging, onMessage, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCGGF8s-eq99d4-WPS_greT54y17sHorFo",
  authDomain: "project-psm-b0980.firebaseapp.com",
  databaseURL: "https://project-psm-b0980-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-psm-b0980",
  storageBucket: "project-psm-b0980.appspot.com",
  messagingSenderId: "166483875752",
  appId: "1:166483875752:web:97c02ddf19977412ed2f9d"
};

const appFirebase = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", appFirebase);

const db = getFirestore(appFirebase);
console.log("Firestore initialized:", db);

const auth = getAuth(appFirebase);
const storage = getStorage(appFirebase);
const messaging = getMessaging(appFirebase);

console.log("Firebase configuration:", firebaseConfig);

// Request notification permission and get token
const requestNotificationPermission = async () => {
  try {
    // Request notification permission
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log("Notification permission granted.");

      const currentToken = await getToken(messaging, { vapidKey: 'BAESoy7uoW7QJOca2ECJOYXO9l9IRKRxI59mGKUzS5FsfOl6_BTkznxlgaezEP9kP8z0WT5a_hl8MMF12jZRGZ4' });
      if (currentToken) {
        console.log("FCM Token:", currentToken);
        saveFcmToken(currentToken); // Save the token to Firestore
      } else {
        console.log("No registration token available. Request permission to generate one.");
      }
    } else {
      console.log("Notification permission denied.");
    }
  } catch (err) {
    console.error("Unable to get permission to notify or retrieve token.", err);
  }
};

// Function to save FCM token to Firestore
const saveFcmToken = async (token) => {
  try {
    const user = auth.currentUser;
    if (user) {
      const userId = user.uid;
      const userSettingsDocRef = doc(db, `userSettings/${userId}`);
      await setDoc(userSettingsDocRef, { fcmToken: token }, { merge: true });
      console.log('FCM token saved successfully');
    }
  } catch (error) {
    console.error('Error saving FCM token:', error);
  }
};

// Listen for messages while the app is open
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  if (Notification.permission === 'granted') {
    new Notification(payload.notification.title, {
      body: payload.notification.body,
    });
  }
});

export { db, auth, storage, messaging };

export default {
  install: (app) => {
    app.config.globalProperties.$db = db;
  }
};

// Function to get the current user ID
export const getCurrentUserId = () => {
  const user = auth.currentUser;
  console.log("Current user:", user); // Add this console.log
  if (user) {
    return user.uid;
  } else {
    return null;
  }
};

// Function to update notification settings in the database
export const updateNotificationSettings = async (notificationsEnabled) => {
  try {
    const userId = getCurrentUserId();
    if (!userId) throw new Error('No user ID found');

    const userDocRef = doc(db, 'users', userId);
    await setDoc(userDocRef, { notificationsEnabled }, { merge: true });

    return true;
  } catch (error) {
    console.error('Error updating notification settings:', error);
    throw error;
  }
};

// Call function to request notification permission and get token
requestNotificationPermission();
