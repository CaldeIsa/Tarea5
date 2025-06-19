import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import LibrarySystem from '../components/LibrarySystem.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: LibrarySystem }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
