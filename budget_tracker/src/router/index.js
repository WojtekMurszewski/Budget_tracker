import { createRouter, createWebHashHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainLayout from '../components/MainLayout.vue';
import HomePage from '../components/HomePage.vue';
import NewTransaction from '../components/NewTransaction.vue';
import ProfilePage from '../components/ProfilePage.vue';
import SettingsPage from '../components/SettingsPage.vue';
import SignInSignUp from '../components/SignInSignUp.vue';

const router = createRouter({
  history: createWebHashHistory(), // Changed to hash mode
  routes: [
    {
      path: '/',
      name: 'Login Page',
      component: SignInSignUp
    },
    {
      path: '/main',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage,
          meta: { requiresAuth: true },
        },
        {
          path: '/new-transaction',
          name: 'NewTransaction',
          component: NewTransaction,
          meta: { requiresAuth: true },
        },
        {
          path: '/profile-page',
          name: 'ProfilePage',
          component: ProfilePage,
          meta: { requiresAuth: true },
        },
        {
          path: '/settings-page',
          name: 'Settings Page',
          component: SettingsPage,
          meta: { requiresAuth: true },
        }
      ]
    }
  ]
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access!");
      next("/");
    }
  } else {
    next(); // Continue navigation
  }
});

export default router;
