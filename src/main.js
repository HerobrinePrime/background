import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '@/App.vue'
import store from '@/store'
import router from '@/router/router.js'

Vue.config.productionTip = false
Vue.use(VueRouter)

//css
import '@/css/reset.css'

new Vue({
  render: h => h(App),
  beforeCreate() {
    //$bus
    Vue.prototype.$bus = this
  },
  store,
  router,
}).$mount('#app')
