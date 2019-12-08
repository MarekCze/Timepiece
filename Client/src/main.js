import Vue from 'vue'
import App from './App.vue'
import Index from '@/router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Index
}).$mount('#app')
