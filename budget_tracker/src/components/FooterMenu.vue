<template>
    <footer>
        <router-link to="/main">Podsumowanie</router-link>
        <router-link to="/new-transaction">Nowa transakcja</router-link>
        <router-link to="/settings-page">Ustawienia</router-link>
        <router-link to="/profile-page">Profil</router-link>
    </footer>
</template>
  
<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'FooterMenu'
    });
</script>
  
<style scoped>
    footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
    }
    footer a {
        color: white;
        margin: 0 10px;
    }
</style>
  