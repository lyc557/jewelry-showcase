import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/collections',
    name: 'Collections',
    // 使用懒加载优化性能
    component: () => import('@/views/CollectionsPage.vue')
  },
  {
    path: '/collections/:id',
    name: 'JewelryDetail',
    component: () => import('@/views/JewelryDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 页面切换时滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 