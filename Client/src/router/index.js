// handles routes

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Watches from '@/components/Watches'
import Product from '@/components/Product'
import Home from '@/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/watches',
      name: 'Watches',
      component: Watches
    },
    {
      path: '/products',
      name: 'Product',
      component: Product
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
