import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { firebaseMutations, firebaseAction } from 'vuexfire'
require('firebase/database')
require('firebase/auth')
const { config } = require('@/config')

const app = firebase.initializeApp(config)
const provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
Vue.use(Vuex)

const db = app.database()
const allAlbumsRef = db.ref('allAlbums')

const state = {
  user: {},
  allAlbums: [],
  playingAlbum: {}
}

const getters = {
  playingAlbum: state => state.playingAlbum
}

const mutations = {
  ...firebaseMutations,
  SET_USER (state, data) {
    state.user = data
  },
  LOG_OUT (state) {
    state.user = {}
  },
  SET_PLAYING_ALBUM (state, payload) {
    state.playingAlbum = payload
  }
}
const actions = {
  nextAlbum ({state, commit}) {
    let index = 0
    do {
      index = Math.floor(Math.random() * state.allAlbums.length)
    } while (state.allAlbums[index]['.key'] === state.playingAlbum['.key'])
    commit('SET_PLAYING_ALBUM', state.allAlbums[index])
  },
  setPlayingAlbum ({commit}, payload) {
    commit('SET_PLAYING_ALBUM', payload)
  },
  login ({commit}) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      commit('SET_USER', result)
    })
  },
  logout ({commit}) {
    firebase.auth().signOut().then(() => {
      commit('LOG_OUT')
    })
  },
  createNewAlbum ({commit}, payload) {
    allAlbumsRef.push(payload)
  },
  bindAllAlbumsRef: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('allAlbums', allAlbumsRef)
  }),
  unbindAllAlbumsRef: firebaseAction(({ unbindFirebaseRef }) => {
    unbindFirebaseRef('allAlbums')
  })
}

const modules = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules
})
