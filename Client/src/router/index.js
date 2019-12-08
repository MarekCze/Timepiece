
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Watches from '@/components/Watches'

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
    }
  ]
})
