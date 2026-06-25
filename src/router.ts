import { createRouter, createWebHistory } from 'vue-router'

import LandingView from './views/LandingView.vue'

const routes = [
  { path: '/', name: 'home', component: LandingView },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('./views/ImpressumView.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('./views/DatenschutzView.vue')
  },
  { path: '/agb', name: 'agb', component: () => import('./views/AgbView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})
