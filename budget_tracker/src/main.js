import { createApp } from 'vue';
import App from './App.vue';
import { db } from './firebase/firebase';
import router from './router';
import HeaderCash from './components/HeaderCash.vue';
import FooterMenu from './components/FooterMenu.vue';
import './registerServiceWorker';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// Funkcja obsługująca logowanie i rejestrację
window.handleSignInSignUp = async (email, password) => {
    const auth = getAuth();
    try {
        // Sprawdź, czy użytkownik istnieje
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Zalogowano:', userCredential.user);
        router.push('/');
    } catch (error) {
        // Jeśli użytkownik nie istnieje, utwórz nowego
        if (error.code === 'auth/user-not-found') {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log('Zarejestrowano:', userCredential.user);
                router.push('/');
            } catch (error) {
                console.error('Błąd podczas rejestracji:', error);
            }
        } else {
            console.error('Błąd podczas logowania:', error);
        }
    }
};

// Inicjalizacja aplikacji Vue
let app;
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App);
        app.use(router); // Zintegruj router z aplikacją Vue
        app.component('HeaderCash', HeaderCash);
        app.component('FooterMenu', FooterMenu);

        app.config.globalProperties.$db = db; // Dodajemy Firestore do globalnych właściwości

        app.mount('#app');
    }

    if (user) {
        console.log('User is logged in:', user);
        // Użytkownik jest zalogowany, przekieruj na stronę główną
        router.push('/main');
    } else {
        console.log('No user is logged in.');
        // Użytkownik nie jest zalogowany, przekieruj na stronę logowania
        router.push('/');
    }
});
