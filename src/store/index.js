import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
    zips: null,
    movingFrom: null,
    movingTo: null
  },
  mutations: {
    INC_STEP (state) {
      state.step++
    },
    DEC_STEP (state) {
      state.step--
    },
    SET_ZIPS (state, payload) {
      state.zips = payload
    },
    SET_MOVING_FROM (state, payload) {
      state.movingFrom = payload
    },
    SET_MOVING_TO (state, payload) {
      state.movingTo = payload
    }
  },
  actions: {
    setZips ({ commit }, payload) {
      commit('SET_ZIPS', payload)
      commit('INC_STEP')
    },
    setMovingFrom ({ commit }, payload) {
      commit('SET_MOVING_FROM', payload)
      commit('INC_STEP')
    },
    setMovingTo ({ commit }, payload) {
      commit('SET_MOVING_TO', payload)
      commit('INC_STEP')
    }
  },
  getters: {
    currentStep (state) {
      return state.step
    }
  }
})