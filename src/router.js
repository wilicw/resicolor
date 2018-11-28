import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timeing from './views/Timeing.vue'
import Setting from './views/Setting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timeing',
      name: 'timeing',
      component: Timeing
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }
  ]
})
