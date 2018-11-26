import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/element.js'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
