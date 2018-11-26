import Vue from 'vue'
import Vuex from 'vuex'
import func from './func'
import { Message } from 'element-ui'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input: '______',
    ans: '',
    band0clr: '',
    band1clr: '',
    band2clr: '',
    band3clr: '',
    total: 0
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
        Message.success({
          message: 'Correct!'
        })
        func.genResistor()
      }
    },
    genres (state, data) {
      state.band0clr = data.band0
      state.band1clr = data.band1
      state.band2clr = data.band2
      state.band3clr = data.band3
      state.ans = data.str
    }
  },
  actions: {

  }
})
