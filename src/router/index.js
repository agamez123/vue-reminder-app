import { auth } from '@/firebase/config'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import SignupView from '@/views/auth/SignupView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import ReminderView from '@/views/ReminderView.vue'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser

  if (!user) {
    next({ name: 'login' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView,
    beforeEnter: requireAuth
  },
  {
    path: '/reminder/:id',
    name: 'reminder',
    component: ReminderView,
    beforeEnter: requireAuth,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
