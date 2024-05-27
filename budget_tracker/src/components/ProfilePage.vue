<template>
    <div class="profile-page">
        <h2>Mój profil</h2>
        <form @submit.prevent="saveProfileChanges">
            <div class="form-group">
                <div v-if="photoURL" class="photo-preview">
                    <img :src="photoURL" alt="Zdjęcie profilowe" class="profile-photo">
                </div>
                <input type="file" @change="handleFileUpload">
            </div>
            <div class="form-group">
                <label for="displayName">Imię i nazwisko:</label>
                <input type="text" v-model="displayName" required>
            </div>
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" class="email-field" v-model="email" disabled>
            </div>
            <button type="submit" class="btn-submit">Zapisz zmiany</button>
        </form>
    </div>
</template>

<script>
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { defineComponent } from 'vue';
import { db } from '../firebase/firebase';

export default defineComponent({
    name: 'ProfilePage',
    data() {
        return {
            displayName: '', // Imię i nazwisko użytkownika
            email: '', // Adres e-mail użytkownika
            photoURL: '', // URL aktualnego zdjęcia profilowego
            newPhoto: null // Nowe zdjęcie przesłane przez użytkownika
        };
    },
    async created() {
        // Pobranie bieżącego użytkownika (przy założeniu, że jesteśmy już uwierzytelnieni)
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            // Ustawienie danych użytkownika w formularzu
            const userDocRef = doc(db, 'userProfileInfo', user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const userData = userDocSnap.data();
                this.displayName = userData.displayName || '';
                this.email = userData.email;
                this.photoURL = userData.photoURL || '';
            }else {
                this.email = user.email; // Ustaw email użytkownika
            }
            this.isDataLoaded = true; // Ustawienie flagi po załadowaniu danych
        }
    },
    methods: {
        async saveProfileChanges() {
            try {
                // Pobranie bieżącego użytkownika (przy założeniu, że jesteśmy już uwierzytelnieni)
                const auth = getAuth();
                const user = auth.currentUser;
                if (user) {
                    // Aktualizacja zdjęcia profilowego, jeśli użytkownik wysłał nowe zdjęcie
                    if (this.newPhoto) {
                        const storage = getStorage();
                        const photoRef = storageRef(storage, `users/${user.uid}/profile.jpg`);
                        await uploadBytes(photoRef, this.newPhoto);
                        const photoURL = await getDownloadURL(photoRef);
                        await updateProfile(user, { photoURL });
                        this.photoURL = photoURL;
                    }
                    // Aktualizacja nazwy użytkownika
                    await updateProfile(user, { displayName: this.displayName });

                    // Zapisanie danych użytkownika w Firestore
                    const userProfileData = {
                        displayName: this.displayName,
                        email: this.email,
                        photoURL: this.photoURL,
                    };

                    const userDocRef = doc(db, 'userProfileInfo', user.uid);
                    await setDoc(userDocRef, userProfileData, { merge: true });

                    // Powiadomienie użytkownika o zapisaniu zmian
                    alert('Zmiany w profilu zostały zapisane.');
                }
            } catch (error) {
                // Obsługa błędu zapisu zmian profilu
                console.error('Błąd podczas zapisywania zmian profilu:', error);
                alert('Wystąpił błąd podczas zapisywania zmian profilu. Spróbuj ponownie później.');
            }
        },
        handleFileUpload(event) {
            // Obsługa przesłania nowego zdjęcia przez użytkownika
            const file = event.target.files[0];
            if (file) {
                this.newPhoto = file;

                // Wyświetlenie podglądu nowego zdjęcia profilowego
                const reader = new FileReader();
                reader.onload = e => {
                    this.photoURL = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
    },
});
</script>

<style scoped>
.profile-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-page h2 {
    text-align: center;
    color: #333;
    margin-bottom: 2rem;
}

.profile-page form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-page .form-group {
    margin-bottom: 1.5rem;
    width: 100%;
}

.profile-page input[type="file"],
.profile-page input[type="text"],
.profile-page input[type="email"] {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.profile-page .email-field {
    background-color: #e9ecef;
}

.profile-page .photo-preview {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.profile-page .profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #007bff;
}

.profile-page .btn-submit {
    width: 100%;
    padding: 0.75rem;
    font-size: 1.2rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.profile-page .btn-submit:hover {
    background-color: #0056b3;
}

.profile-page .centered-label {
    display: block;
    text-align: center;
    margin-bottom: 0.5rem;
    font-weight: bold;
}
</style>