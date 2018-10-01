<template>
  <div class="cl-white dp-flex jtf-ct-space-around">
    <div class="w-45vw album-list">
    <span class="f-s-30px f-w-bold"> My Playlist</span>
    <div>
      {{myAlbums}}
      <!-- <div class="card cs-pointer pd-10px dp-flex jtf-ct-space-between">
        <div class="w-70pct">
          <div class="f-s-20px f-w-bold">
            Mockup Playlist Joos
          </div>
          <div class="f-s-18px f-w-bold">
            Song : 3
          </div>
        </div>
        <div class="w-25pct">
          <svg-filler class="f-right" path="/static/svg/angle-right-solid.svg" :fill="'#b7b7b7'" width="60px" height="60px"/>
        </div>
      </div> -->
      <div class="add-btn" @click="activeCreatePlaylist = true">Create New Playlist</div>
    </div>
    </div>
    <div class="w-45vw" v-if="listSongToggle">

    </div>
    <div class="w-45vw song-list" v-else>
    </div>
    <b-modal :active.sync="activeCreatePlaylist" has-modal-card>
      <CreateUserPlaylist/>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CreateUserPlaylist from './components/CreateUserPlaylist'
export default {
  name: 'MyPlaylist',
  components: {
    CreateUserPlaylist
  },
  data () {
    return {
      listSongToggle: false,
      activeCreatePlaylist: false
    }
  },
  computed: {
    ...mapState({
      // state
      myAlbums: state => state.myAlbums
    })
  },
  methods: {
    ...mapActions({
      // Action
    })
  }
}
</script>

<style scoped>
.card {
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 4px;
}
.album-list {
  background-color: rgb(255, 153, 204,  0.5);
  padding: 10px;
  height: calc(100vh - 160px);
}
.song-list {
  background-color: rgb(255, 255, 255,  0.9);
  padding: 10px;
  border-radius: 18px;
  height: calc(100vh - 160px);
}
.add-btn {
  margin-top: 20px;
  width: 100%;
  height: 36px;
  text-align: center;
  border: 2px dashed;
  border-color: #fff;
  border-radius: 18px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  padding: 3px 0px 3px 0px;
}
</style>
