import UserService from '@/services/UserService'

import router from '@/router/'

const state = {
  token: ''
}

const getters = {}

const actions = {
  async login ({ commit }, credentials, next) {
    UserService.authenticateUser(credentials)
      .then((user, token) => {
        if (next) {
          router.push({ name: next })
        } else {
          router.push({ name: 'UserPanel' })
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  async register ({ commit }, credentials, next) {
    UserService.registerUser(credentials)
      .then((user, token) => {
        if (next) {
          router.push({ name: next })
        } else {
          router.push({ name: 'UserPanel' })
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  async validateToken ({ commit }) {
    UserService.validateToken()
      .then(res => {
        console.log(res)
      })
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
