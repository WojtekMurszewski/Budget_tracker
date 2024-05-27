<template>
    <div class="new-transaction">
        <h2>Dodaj nową transakcję</h2>
        <form @submit.prevent="addTransaction">
        <!-- Pola formularza: kwota, data, kategoria, opis, zdjęcie: -->
            <select v-model="transactionType" required @change="updateCategories">
                <option value="">Wybierz typ</option>
                <!-- Lista opcji typów -->
                <option value="income">Przychód</option>
                <option value="expense">Wydatek</option>
            </select>

            <!-- Pole kwoty -->
            <input type="number" v-model="amount" required placeholder="Kwota transakcji">

            <!-- Pole daty -->
            <input type="date" v-model="date" required>

            <!-- Pole kategorii -->
            <select v-model="category" required>
                <option value="">Wybierz kategorię</option>
                <!-- Lista opcji kategorii -->
                <option v-for="category in currentCategories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>

            <!-- Pole opisu -->
            <textarea v-model="description" placeholder="Opis transakcji"></textarea>

            <!-- Pole dodawania zdjęcia paragonu -->
            <input type="file" @change="handleFileUpload">

            <!-- Przycisk dodawania transakcji -->
            <button type="submit">Dodaj transakcję</button>
        </form>
    </div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Dodaj import storage
import { db } from '../firebase/firebase';
import { getAuth } from 'firebase/auth';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NewTransaction',
    data() {
        return {
            incomeCategories: [
                { id: 11, name: 'Pensja' },
                { id: 12, name: 'Prezent' },
                { id: 13, name: 'Zasiłek' },
                // Możesz dodać więcej kategorii przychodów tutaj
            ],
            expenseCategories: [
                { id: 1, name: 'Jedzenie' },
                { id: 2, name: 'Rozrywka' },
                { id: 3, name: 'Transport' },
                { id: 4, name: 'Zdrowie' },
                { id: 5, name: 'Dom' },
                { id: 6, name: 'Ubrania' },
                { id: 7, name: 'Uroda' },
                { id: 8, name: 'Edukacja' },
                { id: 9, name: 'Prezent' },
                { id: 10, name: 'Inne' },
                
            ],
            currentCategories: [],
            transactionType: '', // Typ transakcji
            amount: null,
            date: this.getCurrentDate(),
            category: '',
            description: '',
            receiptImage: null
        };
    },
    methods: {
        getCurrentDate() {
            // Pobranie bieżącej daty w formacie YYYY-MM-DD
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0'); // Miesiące są zero-indexowane
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        handleFileUpload(event) {
            this.receiptImage = event.target.files[0];
        },
        updateCategories() {
            if (this.transactionType === 'income') {
                this.currentCategories = this.incomeCategories;
            } else if (this.transactionType === 'expense') {
                this.currentCategories = this.expenseCategories;
            } else {
                this.currentCategories = [];
            }
        },
        async addTransaction() {
            // Walidacja typu transakcji
            if (!this.transactionType) {
                alert('Proszę wybrać typ transakcji.');
                return;
            }
            // Walidacja pól formularza
            if (!this.amount || this.amount <= 0) {
                // Wyświetlenie komunikatu błędu
                alert('Proszę wprowadzić prawidłową kwotę transakcji.');
                return;
            }

            let imageUrl = null;

            // Jeśli użytkownik załadował zdjęcie
            if (this.receiptImage) {
                // Prześlij zdjęcie do Firebase Storage
                const storage = getStorage(); // Uzyskanie instancji Firebase Storage
                const storageRef = ref(storage, this.receiptImage.name); // Utworzenie referencji do pliku
                await uploadBytes(storageRef, this.receiptImage); // Przesłanie danych binarnych do Firebase Storage


                // Pobierz adres URL przesłanego zdjęcia
                imageUrl = await getDownloadURL(storageRef);
            }
            try {
                const auth = getAuth(); // Pobieramy obiekt autentykacji
                const user = auth.currentUser; // Pobieramy bieżącego użytkownika
                if (!user) {
                    throw new Error('Użytkownik niezalogowany');
                }
                const userId = user.uid;
                // Przygotowanie danych transakcji
                const transactionData = {
                    type: this.transactionType,
                    amount: this.amount,
                    date: this.date,
                    category: this.category,
                    description: this.description,
                    receiptImage: imageUrl
                };

                // Dodanie transakcji do kolekcji 'transactions' w bazie danych Firestore
                await addDoc(collection(db, `users/${userId}/transactions`), transactionData);

                // Zresetowanie pól formularza po pomyślnym dodaniu transakcji
                this.transactionType = '';
                this.amount = null;
                this.date = this.getCurrentDate();
                this.category = '';
                this.description = '';
                this.receiptImage = null;

                // Powiadomienie użytkownika o pomyślnym dodaniu transakcji
                alert('Transakcja została dodana pomyślnie.');

                // Opcjonalnie, możesz wykonać inne akcje po dodaniu transakcji, np. przekierowanie użytkownika
            } catch (error) {
                // Obsługa błędu dodawania transakcji
                console.error('Błąd podczas dodawania transakcji:', error);
                alert('Wystąpił błąd podczas dodawania transakcji. Spróbuj ponownie później.');
            }
        }
    }
});
</script>

<style scoped>
.new-transaction {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.new-transaction h2 {
    text-align: center;
    color: #333;
}

.new-transaction form {
    display: flex;
    flex-direction: column;
}

.new-transaction select,
.new-transaction input,
.new-transaction textarea {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.new-transaction button {
    padding: 0.75rem;
    font-size: 1rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.new-transaction button:hover {
    background-color: #0056b3;
}
</style>
