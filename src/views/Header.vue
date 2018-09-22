<template>
<div class="home w-100pct bg-cl-info dp-flex jtf-ct-space-between">
  <div class="home w-50pct dp-flex jtf-ct-flex-start al-it-center pd-hrzt-20px">
    <span class="f-s-25px f-w-bold cl-white cs-pointer">+Album</span>
  </div>
  <div class="home w-50pct dp-flex jtf-ct-flex-end al-it-center pd-hrzt-20px">
    <span @click="login()" class="f-s-25px f-w-bold cl-white cs-pointer" v-if="!user.user"> Login With Facebook</span>
    <div v-else class="dp-flex al-it-center">
      <img :src="user.user.photoURL" alt="" class="bd-rd-20px mg-r-10px">
      <span class="f-w-bold cl-white mg-r-10px">
        {{user.user.displayName}} |
      </span>
      <div @click="logout()" class="f-s-25px f-w-bold cl-white cs-pointer"> Logout </div>
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
