<template>
    <div class="main-layout">
        <HeaderCash v-if="!isLoginPage" :userBalance="userBalance" />
        <router-view></router-view>
        <FooterMenu v-if="!isLoginPage"/>
    </div>
</template>

<script>
    import HeaderCash from './HeaderCash.vue';
    import FooterMenu from './FooterMenu.vue';
    import { defineComponent, ref, onMounted } from 'vue';
    import { collection, query, getDocs } from 'firebase/firestore';
    import { db, getCurrentUserId } from '../firebase/firebase';
    import { useRoute } from 'vue-router';

    export default defineComponent({
        name: 'MainLayout',
        components: {
            HeaderCash,
            FooterMenu
        },
        setup() {
            const userBalance = ref(0);
            const userId = getCurrentUserId();
            // Pobierz wszystkie transakcje z bazy danych
            const fetchTransactions = async () => {
                try {
                    const userTransactionsCollection = collection(db, `users/${userId}/transactions`);
                    const q = query(userTransactionsCollection);
                    const querySnapshot = await getDocs(q);
                    let totalIncome = 0;
                    let totalExpense = 0;

                    querySnapshot.forEach(doc => {
                        const transaction = doc.data();
                        if (transaction.transactionType === 'income') {
                            totalIncome += transaction.amount;
                        } else if (transaction.transactionType === 'expense') {
                            totalExpense += transaction.amount;
                        }
                    });

                    userBalance.value = totalIncome - totalExpense;
                } catch (error) {
                    console.error('Error fetching transactions:', error);
                }
            };

            onMounted(fetchTransactions);

            const route = useRoute();
            const isLoginPage = route.path === '/';

            return { userBalance,  isLoginPage };
        }
    });
</script>

<style>
</style>
