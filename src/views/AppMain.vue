<template>
  <div class="body">
    <Header/>
    <div class="pd-20px app-body">
      <span class="cl-white">Version beta 0.0.2c</span>
      <router-view/>
    </div>
    <Play class="play" />
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
  background:url('/static/img/bg2.jpg');
  background-size: cover;
  background-position: center;
}
.app-body {
  overflow: auto;
  height: calc(100vh - 60px);
}
</style>
