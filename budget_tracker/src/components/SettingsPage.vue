<template>
    <div class="settings-page">
        <h2>Ustawienia</h2>
        <!-- Formularz ustawień powiadomień -->
        <form @submit.prevent="saveNotificationSettings">
            <!-- Pole formularza: Powiadomienia -->
            <label>
                <input type="checkbox" v-model="notificationsEnabled">
                Odbieraj powiadomienia
            </label>

            <!-- Przycisk zapisywania ustawień powiadomień -->
            <button type="submit">Zapisz ustawienia powiadomień</button>
        </form>

        <!-- Przycisk wylogowania -->
        <button @click="logout">Wyloguj</button>
    </div>
</template>

<script>
import { getAuth } from 'firebase/auth';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

export default defineComponent({
    name: 'SettingsPage',
    data() {
        return {
            notificationsEnabled: false // Domyślnie powiadomienia są wyłączone
        };
    },
    setup() {
        const router = useRouter();
        const logout = async () => {
            try {
                // Wylogowanie użytkownika
                await getAuth().signOut(); // Wylogowanie z Firebase Authentication
                // Po wylogowaniu przekieruj użytkownika na stronę logowania
                router.push('/');
            } catch (error) {
                // Obsługa błędu wylogowania
                console.error('Błąd podczas wylogowywania użytkownika:', error);
                alert('Wystąpił błąd podczas wylogowywania użytkownika. Spróbuj ponownie później.');
            }
        };

        return {
            logout
        };
    },
    methods: {
        async saveNotificationSettings() {
            try {
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    const userId = user.uid;
                    const db = getFirestore();
                    const userDocRef = doc(db, `userSettings/${userId}`);
                    await setDoc(userDocRef, { notificationsEnabled: this.notificationsEnabled }, { merge: true });
                    alert('Ustawienia powiadomień zostały zapisane.');
                } else {
                    throw new Error('User not authenticated');
                }
            } catch (error) {
                console.error('Błąd podczas zapisywania ustawień powiadomień:', error);
                alert('Wystąpił błąd podczas zapisywania ustawień powiadomień. Spróbuj ponownie później.');
            }
        }
    }
});
</script>

<style scoped>
.settings-page {
    text-align: center;
    padding: 20px;
}

button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #e0e0e0;
}
</style>
