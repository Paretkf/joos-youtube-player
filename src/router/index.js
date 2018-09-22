import Vue from 'vue'
import Router from 'vue-router'
import AllPlaylist from '@/views/AllPlaylist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AllPlaylist',
      component: AllPlaylist
    }
  ]
})
