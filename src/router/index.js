import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/hal-1',
    name: 'Hal1',
    component: () => import('../views/Hal1.vue')
  },
  {
    path: '/hal-2',
    name: 'Hal2',
    component: () => import('../views/Hal2.vue')
  },
  {
    path: '/hal-3',
    name: 'Hal3',
    component: () => import('../views/Hal3.vue')
  },
  {
    path: '/hal-4',
    name: 'Hal4',
    component: () => import('../views/Hal4.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
