import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timeing from './views/Timeing.vue'
import Setting from './views/Setting.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/resicolor',
      name: 'home',
      component: Home
    },
    {
      path: '/resicolor/timeing',
      name: 'timeing',
      component: Timeing
    },
    {
      path: '/resicolor/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
