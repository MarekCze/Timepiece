/* imports vue and app.vue along with the router from index file */

import Vue from 'vue'
import App from './App.vue'
import Index from '@/router/index'

Vue.config.productionTip = false

// new vue instance
new Vue({
  render: h => h(App),
  router: Index
}).$mount('#app')
