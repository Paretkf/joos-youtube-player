import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyB2LD6TMfj2bM12LQHxu8buuEovh7x8J80',
  authDomain: 'it-20y.firebaseapp.com',
  databaseURL: 'https://it-20y.firebaseio.com',
  projectId: 'it-20y',
  storageBucket: 'it-20y.appspot.com',
  messagingSenderId: '68611767349'
}
firebase.initializeApp(config)
const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
Vue.use(Vuex)

const state = {
  user: {}
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  LOG_OUT (state) {
    state.user = {}
  }
}
const actions = {
  login ({commit}) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      commit('SET_USER', result)
    })
  },
  logout ({commit}) {
    firebase.auth().signOut().then(() => {
      commit('LOG_OUT')
    })
  }
}

const modules = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
