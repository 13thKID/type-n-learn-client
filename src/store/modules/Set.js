import { status } from '@/namespaces/store'
import print from '@/utils/print'

import SetService from '@/services/SetService'

const state = {
  status: {
    public: status.pending
  },
  publicSets: [],
  privateSets: []
}

const getters = {}

const actions = {
  async getPublicSets ({ commit }, options = { limit: 10 }) {
    SetService.getPublicSets(options)
      .then(res => {
        if (res.status === 200) {
          print.success(`getPublicSets => status ${res.status}`)

          const sets = res.data
          console.log(sets)
          commit('SET_PUBLIC_SETS', sets)
        } else {
          print.error(`getPublicSets => status ${res.status}`)
        }
      })
  }
}

const mutations = {
  SET_PUBLIC_SETS: (state, sets) => {
    state.publicSets.push(...sets)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
