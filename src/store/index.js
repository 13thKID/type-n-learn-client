import Vue from 'vue'
import Vuex from 'vuex'

/** modules */
import User from './modules/User'
import Set from './modules/Set'
import Tracker from './modules/Tracker'
import TextProvider from './modules/TextProvider'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User,
    Set,
    Tracker,
    TextProvider
  }
})
