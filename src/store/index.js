import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import axios from 'axios'
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
const userRef = db.ref('users')
const state = {
  user: {},
  allAlbums: [],
  myAlbums: {},
  playingAlbum: {
    name: 'Start Album',
    artist: 'Renai Circulation',
    img: '',
    song: [
      {
        name: 'Renai Circulation「恋愛サーキュレーション」歌ってみた【＊なみりん】',
        url: 'https://www.youtube.com/watch?v=uKxyLmbOc0Q'
      }
    ]
  }
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
  },
  SET_MY_ALBUMS (state, payload) {
    state.myAlbums = payload
  }
}
const actions = {
  createUserAlbum ({state}, payload) {
    userRef.child(`${state.user.user.uid}/playlist/`).push({
      name: payload.name,
      artist: payload.artist,
      song: []
    })
  },
  async getMyAlubums ({state, commit}) {
    let result = await axios.get(`https://it-20y.firebaseio.com/users.json?orderBy=%22$key%22&equalTo=%22${state.user.user.uid}%22`)
    console.log(result)
    commit('SET_MY_ALBUMS', result)
  },
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
