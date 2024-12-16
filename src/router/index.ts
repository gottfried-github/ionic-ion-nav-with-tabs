import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import EventsPage from '@/pages/EventsPage.vue'
import AppPage from '@/pages/AppPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/app/home',
  },
  {
    path: '/app',
    component: AppPage,
    children: [
      {
        path: '',
        redirect: '/app/home',
      },
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'events',
        component: EventsPage,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
