<template>
  <div class="cashflow content">
    <h2>Miesięczne podsumowanie transakcji</h2>
    <div class="charts-container">
      <div class="chart-wrapper">
        <h3>Przychody:</h3>
        <PieChart v-if="incomeTransactions.length" :data="incomeChartData" :options="chartOptions" />
        <p v-else>Brak transakcji przychodów</p>
      </div>
      <div class="chart-wrapper">
        <h3>Wydatki:</h3>
        <PieChart v-if="expenseTransactions.length" :data="expenseChartData" :options="chartOptions" />
        <p v-else>Brak transakcji wydatków</p>
      </div>
    </div>
    <div class="transactions-container">
      <div>
        <h3>Przychody:</h3>
        <ul>
          <li v-for="transaction in incomeTransactions" :key="transaction.id">
            {{ transaction.date }} {{ getCategoryName(transaction.category) }} {{ transaction.amount }}zł {{ transaction.description }}
            <img v-if="transaction.receiptImage" :src="transaction.receiptImage" @click="showImage(transaction.receiptImage)" class="receipt-image" />
            <button @click="deleteTransaction(transaction.id, 'income')">Usuń</button>
          </li>
        </ul>
      </div>
      <div>
        <h3>Wydatki:</h3>
        <ul>
          <li v-for="transaction in expenseTransactions" :key="transaction.id">
            {{ transaction.date }} {{ getCategoryName(transaction.category) }} {{ transaction.amount }}zł {{ transaction.description }}
            <img v-if="transaction.receiptImage" :src="transaction.receiptImage" @click="showImage(transaction.receiptImage)" class="receipt-image" />
            <button @click="deleteTransaction(transaction.id, 'expense')">Usuń</button>
          </li>
        </ul>
      </div>
    </div>

    <!-- Modalne okno do wyświetlania powiększonego zdjęcia -->
    <div v-if="showModal" class="modal" @click="closeModal">
      <span class="close">&times;</span>
      <img class="modal-content" :src="modalImage">
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Pie } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

ChartJS.defaults.font.size = 12;

export default defineComponent({
  name: 'HomePage',
  components: {
    PieChart: Pie,
  },
  setup() {
    const incomeTransactions = ref([]);
    const expenseTransactions = ref([]);
    const incomeChartData = ref({});
    const expenseChartData = ref({});
    const chartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Podział według kategorii',
        },
      },
    });

    const showModal = ref(false);
    const modalImage = ref('');

    const categoryColors = {
      '1': '#FF6384',
      '2': '#36A2EB',
      '3': '#FFCE56',
      '4': '#0477EB',
      '5': '#74A3D6',
      '6': '#C549D9',
      '7': '#2AE0B3',
      '8': '#2CE874',
      '9': '#673574',
      '10': '#D46552',
      '11': '#8D99DD',
      '12': '#74F351',
      '13': '#A77181',
      '14': '#BAC436',
      '15': '#5F0F47',
      '16': '#D46552'
      // dodaj więcej kategorii i kolorów
    };

    const categories = {
      '1': 'Jedzenie',
      '2': 'Rozrywka',
      '3': 'Transport',
      '4': 'Zdrowie',
      '5': 'Dom',
      '6': 'Ubrania',
      '7': 'Uroda',
      '8': 'Edukacja',
      '9': 'Prezent',
      '10': 'Inne',
      '11': 'Pensja',
      '12': 'Prezent',
      '13': 'Zasiłek',
      '14': 'Premia',
      '15': 'Biznes',
      '16': 'Inne'
      // dodaj więcej kategorii
    };

    const deleteTransaction = async (transactionId, type) => {
      try {
        const user = getAuth().currentUser;
        if (user) {
          const userId = user.uid;
          await deleteDoc(doc(db, `users/${userId}/transactions`, transactionId));
          
          if (type === 'income') {
            incomeTransactions.value = incomeTransactions.value.filter(t => t.id !== transactionId);
          } else if (type === 'expense') {
            expenseTransactions.value = expenseTransactions.value.filter(t => t.id !== transactionId);
          }

          // Odśwież dane po usunięciu
          await fetchTransactions(userId);
        }
      } catch (error) {
        console.error('Error deleting transaction:', error);
      }
    };

    const getCategoryName = (categoryId) => {
      return categories[categoryId] || categoryId;
    };

    const fetchTransactions = async (userId) => {
        try {
            const querySnapshot = await getDocs(collection(db, `users/${userId}/transactions`));
            const income = [];
            const expenses = [];
            const incomeCategoryData = {};
            const expenseCategoryData = {};

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const transaction = { id: doc.id, ...data };

                if (data.type === 'income') {
                    income.push(transaction);
                    incomeCategoryData[data.category] = (incomeCategoryData[data.category] || 0) + data.amount;
                } else if (data.type === 'expense') {
                    expenses.push(transaction);
                    expenseCategoryData[data.category] = (expenseCategoryData[data.category] || 0) + data.amount;
                }
            });

            // Sortowanie transakcji według daty od najnowszej do najstarszej
            income.sort((a, b) => new Date(b.date) - new Date(a.date));
            expenses.sort((a, b) => new Date(b.date) - new Date(a.date));

            incomeTransactions.value = income;
            expenseTransactions.value = expenses;

            incomeChartData.value = {
                labels: Object.keys(incomeCategoryData).map(getCategoryName),
                datasets: [
                    {
                    label: 'Przychody',
                    backgroundColor: Object.keys(incomeCategoryData).map(category => categoryColors[category] || '#36A2EB'),
                    data: Object.values(incomeCategoryData),
                    },
                ],
            };

            expenseChartData.value = {
                labels: Object.keys(expenseCategoryData).map(getCategoryName),
                datasets: [
                    {
                    label: 'Wydatki',
                    backgroundColor: Object.keys(expenseCategoryData).map(category => categoryColors[category] || '#FF6384'),
                    data: Object.values(expenseCategoryData),
                    },
                ],
            };
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const showImage = (imageUrl) => {
      modalImage.value = imageUrl;
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
      modalImage.value = '';
    };

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setTimeout(() => {
            fetchTransactions(user.uid);
          }, 300); // Opóźnienie, aby upewnić się, że komponenty są w pełni załadowane
        }
      });
    });

    return {
      incomeTransactions,
      expenseTransactions,
      incomeChartData,
      expenseChartData,
      chartOptions,
      getCategoryName,
      deleteTransaction,
      showModal,
      modalImage,
      showImage,
      closeModal
    };
  }
});
</script>

### CSS
```css
<style scoped>
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.charts-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}

.chart-wrapper {
  width: 45%;
  max-width: 400px;
  height: 300px;
  margin: 10px;
  text-align: center;
  position: relative;
}

.chart-wrapper h3 {
  margin-top: 5px;
  margin-bottom: 0;
}

.chart-wrapper canvas {
  max-width: 100% !important;
  max-height: 100% !important;
}

.transactions-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}

.transactions-container > div {
  width: 45%;
  max-width: 400px;
  margin: 10px;
}

.receipt-image {
  display: block;
  margin: 10px auto;
  max-width: 60%;
  cursor: pointer;
}

.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 90%;
  max-height: 90%;
}

.close {
  position: absolute;
  top: 10px;
  right: 25px;
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}

@media (max-width: 768px) {
  .chart-wrapper, .transactions-container > div {
    width: 100%;
  }
}
</style>
