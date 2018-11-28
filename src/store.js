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
    total: 0,
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
          type: 'success'
        })
        func.genResistor()
      }
    },
    genres (state, data) {
      state.input = '______'
      state.band0clr = data.band0
      state.band1clr = data.band1
      state.band2clr = data.band2
      state.band3clr = data.band3
      state.ans = data.str
    },
    returnTotal (state) {
      state.total = 0
    },
    setopacity (state) {
      if (window.localStorage.getItem('opacity') !== undefined) {
        state.opacity = window.localStorage.getItem('opacity')
      }
    },
    changeopacity (state, n) {
      window.localStorage.opacity = n
      state.opacity = n
    }
  },
  actions: {

  }
})
