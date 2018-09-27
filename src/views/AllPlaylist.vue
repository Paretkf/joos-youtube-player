<template>
  <div id="wrapper">
    <div class="dp-flex f-drt-row f-w-wrap t-al-center ctn">
      <div class="cs-pointer card pd-5px w-fit-content h-fit-content mg-hrzt-10px t-al-center mg-bt-10px" v-for="(album, index) in allAlbums" :key="index" :title="album.name" @click="setAlbum(album)">
        <!-- {{allAlbums}} -->
        <img :src="album.img" :alt="album.name" width="150"> <br>
        <span class="f-w-bold sweet-label mg-auto">
          {{album.name.substring(0, 14)}}
          <span v-if="album.name.length > 14">...</span>
          </span>
      </div>
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
    }),
    setAlbum (album) {
      this.setPlayingAlbum(album)
    }
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
.ctn {
  align-items: center;
  justify-content: center;
}
#wrapper {
  margin-bottom: 60px;
}
</style>
