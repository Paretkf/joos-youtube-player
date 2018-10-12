const state = {
  isLoading: false
}

const actions = {
  setLoading ({commit}, payload) {
    commit('SET_LOADING', payload)
  }
}

const mutations = {
  SET_LOADING (state, payload) {
    state.isLoading = payload
  }
}

const getters = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
