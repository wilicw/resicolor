import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timing from './views/Timing.vue'
import Setting from './views/Setting.vue'
import NotFound from './views/NotFound.vue'
import History from './views/History.vue'

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
      path: '/resicolor/timing',
      name: 'timing',
      component: Timing
    },
    {
      path: '/resicolor/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/resicolor/history',
      name: 'history',
      component: History
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
