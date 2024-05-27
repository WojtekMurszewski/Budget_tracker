<template>
    <header>
        <div>{{ userBalance }} zł</div>
    </header>
</template>
  
<script>
  import { defineComponent, ref, onMounted } from 'vue';
  import { collection, getDocs } from 'firebase/firestore';
  import { db, getCurrentUserId } from '../firebase/firebase';
  
  export default defineComponent({
  name: 'HeaderCash',
  setup() {
    const userBalance = ref(0);
    const userId = ref(null);

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

        return { income, expenses, incomeCategoryData, expenseCategoryData };
      } catch (error) {
        console.error("Error fetching transactions: ", error);
        throw error;
      }
    };

    const fetchUserBalance = async (userId) => {
      try {
        const { income, expenses } = await fetchTransactions(userId);
        const totalIncome = income.reduce((sum, item) => sum + item.amount, 0);
        const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

        userBalance.value = totalIncome - totalExpenses;
      } catch (error) {
        console.error('Error fetching user balance:', error);
      }
    };

    onMounted(async () => {
      try {
        userId.value = await getCurrentUserId();
        if (userId.value) {
          fetchUserBalance(userId.value);
        }
      } catch (error) {
        console.error('Error fetching user ID:', error);
      }
    });

    return {
      userBalance
    };
  }
});
</script>
  
<style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }
</style>
  