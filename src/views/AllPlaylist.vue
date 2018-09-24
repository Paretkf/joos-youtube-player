<template>
  <div class="">
    <div v-for="(album, index) in allAlbums" :key="index" :title="album.name" @click="setPlayingAlbum(album)" class="cs-pointer card pd-5px f-left w-fit-content dp-flex f-drt-column mg-r-10px mg-bt-10px">
      <!-- {{allAlbums}} -->
      <img :src="album.img" :alt="album.name" width="150">
      <span class="f-w-bold sweet-label mg-auto">
        {{album.name.substring(0, 14)}}
        <span v-if="album.name.length > 14">...</span>
        </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AllPlaylist',
  computed: {
    ...mapState({
      allAlbums: state => state.allAlbums
    })
  },
  methods: {
    ...mapActions({
      bindAllAlbumsRef: 'bindAllAlbumsRef',
      unbindAllAlbumsRef: 'unbindAllAlbumsRef',
      setPlayingAlbum: 'setPlayingAlbum'
    })
  },
  created () {
    this.bindAllAlbumsRef()
  },
  destroyed () {
    this.unbindAllAlbumsRef()
  }
}
</script>

<style scoped>

</style>
