import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Importuj instancję Firebase Firestore
import { getAuth } from 'firebase/auth'; // Dodaj ten import
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCGGF8s-eq99d4-WPS_greT54y17sHorFo",
    authDomain: "project-psm-b0980.firebaseapp.com",
    projectId: "project-psm-b0980",
    storageBucket: "project-psm-b0980.appspot.com",
    messagingSenderId: "166483875752",
    appId: "1:166483875752:web:97c02ddf19977412ed2f9d"
};

console.log("Firebase configuration:", firebaseConfig);

const appFirebase = initializeApp(firebaseConfig);
console.log("Firebase app initialized:", appFirebase);

const db = getFirestore(appFirebase);
console.log("Firestore initialized:", db);

const auth = getAuth(appFirebase);

const storage = getStorage(appFirebase);

export { db, auth, storage };

export default {
    install: (app) => {
      app.config.globalProperties.$db = db;
    }
};

// Funkcja do pobierania identyfikatora bieżącego użytkownika
export const getCurrentUserId = () => {
    const user = auth.currentUser;
    console.log("Current user:", user); // Dodaj ten console.log
    if (user) {
        return user.uid;
    } else {
        return null;
    }
};


// Funkcja do zapisywania ustawień powiadomień w bazie danych
export const updateNotificationSettings = async (notificationsEnabled) => {
    try {
        // Pobierz identyfikator aktualnie zalogowanego użytkownika (jeśli jest wymagane)
        const userId = getCurrentUserId(); // Załóżmy, że masz funkcję getCurrentUserId do pobrania identyfikatora użytkownika

        // Zaktualizuj dokument w kolekcji użytkowników zawierający ustawienia powiadomień
        await db.collection('users').doc(userId).update({
            notificationsEnabled: notificationsEnabled
        });

        // Zwróć sukces
        return true;
    } catch (error) {
        // Obsłuż błąd
        console.error('Błąd podczas zapisywania ustawień powiadomień:', error);
        throw error;
    }
};