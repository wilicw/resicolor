import Vue from 'vue'
import Vuex from 'vuex'
import func from './func'
import { Notification } from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '______',
    ans: '',
    band0clr: '',
    band1clr: '',
    band2clr: '',
    band3clr: '',
    band4clr: '',
    total: 0,
    band5: true,
    is5band: false,
    opacity: 0.5
  },
  mutations: {
    inputtext (state, text) {
      if (state.input === '______') {
        state.input = ''
      }
      if (text === 'back') {
        state.input = state.input.substring(0, state.input.length - 1)
        if (state.input.length === 0) {
          state.input = '______'
        }
      } else {
        state.input += text
      }
      if (state.input === state.ans) {
        state.input = '______'
        state.total++
        Notification({
          title: 'Success',
          message: 'Correct!',
          type: 'success',
          duration: 500
        })
        func.genResistor()
      }
    },
    genres (state, data) {
      state.input = '______'
      if (data.is5band) {
        state.band0clr = data.band0
        state.band1clr = data.band1
        state.band2clr = data.band2
        state.band3clr = data.band3
        state.band4clr = data.band4
        state.is5band = true
      } else {
        state.band0clr = data.band0
        state.band1clr = data.band1
        state.band2clr = data.band2
        state.band3clr = data.band3
        state.is5band = false
      }
      state.ans = data.str
    },
    returnTotal (state) {
      state.total = 0
    },
    loadsetting (state) {
      if (window.localStorage.getItem('opacity') !== undefined) {
        state.opacity = window.localStorage.getItem('opacity')
      }
      if (window.localStorage.getItem('band5') !== undefined) {
        state.band5 = window.localStorage.getItem('band5')
      } else {
        window.localStorage.setItem('band5', true)
      }
    },
    changeopacity (state, n) {
      window.localStorage.opacity = n
      state.opacity = n
    },
    changeband (state, v) {
      window.localStorage.band5 = v
      state.band5 = v
    }
  },
  actions: {

  }
})
