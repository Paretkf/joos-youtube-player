<template>
  <div id="wrapper">
    <div class="pin" id="columns">
      <div v-for="(album, index) in allAlbums" :key="index" :title="album.name" @click="setAlbum(album)" class="pin cs-pointer card pd-5px w-fit-content t-al-center mg-r-10px mg-bt-10px">
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
.pin {
   display: inline-block;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  -webkit-transition: all .2s ease;
  -moz-transition: all .2s ease;
  -o-transition: all .2s ease;
  transition: all .2s ease;
}
.item {
    /* position: sticky; */
    display: inline-block;
    /* float: left; */
  }
@media (min-width: 960px) {
  #columns {
    -webkit-column-count: 4;
    -moz-column-count: 4;
    column-count: 4;
    overflow: auto;
  }
}
@media (min-width: 1100px) {
  #columns {
    -webkit-column-count: 5;
    -moz-column-count: 5;
    column-count: 5;
    overflow: auto;
  }
}
#wrapper {
    width: 90%;
    max-width: 1100px;
    min-width: 800px;
    margin: 0px auto;
  }
</style>
