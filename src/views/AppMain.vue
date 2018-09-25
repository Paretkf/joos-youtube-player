<template>
  <div>
    <Header/>
    <div class="pd-20px app-body">
      <router-view/>
    </div>
    <div>
      <Play/>
    </div>
    <b-modal :active.sync="isImageModalActive">
      <p class="image is-4by3">
        <img src="/static/img/loading.gif">
      </p>
    </b-modal>
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
.app-body {
  overflow: auto;
  height: calc(100vh - 120px);
}
</style>
