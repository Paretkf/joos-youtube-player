<template>
<div class="home w-100pct cl-primary dp-flex jtf-ct-space-between">
  <div class="home w-30pct dp-flex jtf-ct-flex-start al-it-center pd-hrzt-20px">
    <svg-filler class="cs-pointer mg-hrzt-20px" @click="$router.push({name: 'AllPlaylist'})" path="/static/svg/home-solid.svg" :fill="'#ffffff'" width="40px" height="40px"/>
    <span class="f-s-25px f-w-bold cl-white cs-pointer" @click="$router.push({name: 'CreateAlbums'})">+Album</span>
  </div>
  <div class="home w-80pct dp-flex jtf-ct-flex-end al-it-center pd-hrzt-20px">
    <span @click="login()" class="f-s-25px f-w-bold cl-white cs-pointer" v-if="!user.user">Facebook</span>
    <div v-else class="dp-flex al-it-center">
      <img :src="user.user.photoURL" alt="" class="bd-rd-20px mg-r-10px">
      <span class="f-w-bold cl-white">
        {{user.user.displayName}}
      </span>
      <div>
        <svg-filler @click="$router.push({name: 'MyPlaylist'})" class="cs-pointer mg-hrzt-10px" path="/static/svg/compact-disc-solid.svg" :fill="'#ffffff'" title="My Play List" width="30px" height="30px"/>
      </div>
      <div @click="logout()" class="f-s-25px f-w-bold cl-white cs-pointer"> | Logout </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Header',
  methods: {
    ...mapActions({
      login: 'login',
      logout: 'logout'
    })
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  }
}
</script>

<style scoped>
.home {
  height: 60px;
}
</style>
