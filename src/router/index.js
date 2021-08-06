import store from "@/store/" // eslint-disable-line

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
    path: '/login',
    name: 'Login',
    // component: Login
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    path: '/user-panel',
    name: 'UserPanel',
    // component: Login
    component: () => import(/* webpackChunkName: "user-panel" */ '@/views/UserPanel.vue')
  },
  {
    path: '/text-input',
    name: 'TextInput',
    component: () => import(/* webpackChunkName: "textinput" */ '@/views/TextInput.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.setIsPresent) next()
      else next({ name: 'Home' })
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
