import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from) => {
        if (localStorage.getItem("storedData") === null &&
          to.name !== 'login'
        ) {
          // redirect the user to the login page
          return { name: 'login' }
        }
      }
    }
  ]
})

export default router
