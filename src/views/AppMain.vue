<template>
  <div>
    <Header/>
    <div class="pd-20px app-body">
      <router-view/>
    </div>
    <div>
      <Player/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/Header'
import Player from '@/views/Player'
export default {
  name: 'AppMain',
  components: {
    Header,
    Player
  }
}
</script>

<style scoped>
.app-body {
  overflow: auto;
  height: calc(100vh - 120px);
}
</style>
