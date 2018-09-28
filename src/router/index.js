import Vue from 'vue'
import Router from 'vue-router'
import AllPlaylist from '@/views/AllPlaylist/AllPlaylist'
import CreateAlbums from '@/views/CreateAlbums/CreateAlbums'
import MyPlaylist from '@/views/MyPlaylist/MyPlaylist'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AllPlaylist',
      component: AllPlaylist
    },
    {
      path: '/create-albums',
      name: 'CreateAlbums',
      component: CreateAlbums
    },
    {
      path: '/my-playlist',
      name: 'MyPlaylist',
      component: MyPlaylist
    }
  ]
})
