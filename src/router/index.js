import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import About from '../views/about.vue'
import City from '../views/city.vue'
import Wishlist from '../views/wishlist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
