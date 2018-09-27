<template>
  <div class="body">
    <Header/>
    <div class="pd-20px app-body">
      <span class="cl-white">Version beta 0.0.2a</span>
      <router-view/>
    </div>
    <!-- <div class="play"> -->
      <Play class="play" />
    <!-- </div> -->
  </div>
</template>

<script>
import Header from '@/views/Header'
import Play from '@/views/Play'
export default {
  name: 'AppMain',
  data () {
    return {
      isImageModalActive: false
    }
  },
  components: {
    Header,
    Play
  }
}
</script>

<style scoped>
.play {
  position: absolute;
  top: calc(100vh - 60px);
}
.body {
  background: #F2F6FA;
  background:url('/static/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
.app-body {
  overflow: auto;
  height: calc(100vh - 60px);
}
</style>
