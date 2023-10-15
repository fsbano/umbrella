import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const contextRoot = window.location.pathname.substring(0, window.location.pathname.indexOf("/",2))
const router = createRouter({
  history: createWebHistory(''),
  routes: [
    {
      path: contextRoot + '/',
      name: 'home',
      component: HomeView
    },
    {
      path: contextRoot + '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('../views/PageNotFound.vue')
    }
  ]
})

export default router
