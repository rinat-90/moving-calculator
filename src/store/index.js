import Vue from 'vue'
import Vuex from 'vuex'
import Quote from "@/model/Quote";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    submitted: false,
    step: 1,
    price: 0,
    client: null,
    zips: null,
    movingFrom: null,
    movingTo: null,
    specialItems: [],
    date: null
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
    },
    SET_SPECIAL_ITEMS (state, payload) {
      state.specialItems = payload
    },
    SET_DATE (state, payload) {
      state.date = payload
    },
    SET_PRICE (state, payload) {
      state.price = payload
    },
    SET_CLIENT_INFO (state, payload) {
      state.client = payload
    },
    RESET (state) {
      state.step = 1
      state.submitted = true
      state.price = 0
      state.client = null
      state.zips = null
      state.movingFrom = null
      state.movingTo = null
      state.specialItems = []
      state.date = null
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
    },
    setSpecialItems ({ commit }, payload) {
      commit('SET_SPECIAL_ITEMS', payload)
      commit('INC_STEP')
    },
    setDate ({ commit, state }, payload) {
      commit('SET_DATE', payload)
      commit('INC_STEP')
      const quote = new Quote({...state.movingTo, ...state.movingFrom, specialItems: state.specialItems })
      const pricePerApt = quote.pricePerApt()
      const pricePerItems = quote.pricePerItems()
      const total = pricePerApt + pricePerItems
      commit('SET_PRICE', total)
    },
    setClientInfo ({ commit }, payload) {
      commit('SET_CLIENT_INFO', payload)
      commit('INC_STEP')
    }
  },
  getters: {
    currentStep (state) {
      return state.step
    },
    getPrice (state) {
      return state.price
    }
  }
})