import UserService from '@/services/UserService'

import router from '@/router/'

const state = {
  token: ''
}

const getters = {}

const actions = {
  async logIn ({ commit }, credentials, next) {
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
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
