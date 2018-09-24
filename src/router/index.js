import Vue from 'vue'
import Router from 'vue-router'
import AllPlaylist from '@/views/AllPlaylist'
import CreateAlbums from '@/views/CreateAlbums/CreateAlbums'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
