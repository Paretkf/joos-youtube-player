<template>
  <div class="cl-white dp-flex jtf-ct-space-around">
    <div class="w-45vw album-list">
      <span class="f-s-30px f-w-bold"> My Playlist</span>
      <div class="list-item">
        <div @click="selectAlbum = album, toggleListSong = true" class="card cs-pointer w-90pct mg-bt-10px pd-10px dp-flex jtf-ct-space-between" v-for="(album, index) in myAlbums" :key="index">
          <div class="w-70pct">
            <div class="f-s-20px f-w-bold">
              {{album.name}}
            </div>
            <div class="f-s-18px f-w-bold">
              {{album.song ? album.song.length : 0}}
            </div>
          </div>
          <div class="w-25pct">
            <svg-filler class="f-right" path="/static/svg/angle-right-solid.svg" :fill="'#b7b7b7'" width="60px" height="60px"/>
          </div>
        </div>
        <div class="add-btn w-90pct" @click="activeCreatePlaylist = true">Create New Playlist</div>
      </div>
    </div>
    <div class="w-45vw" v-if="!selectAlbum">
      <!-- blank space -->
    </div>
    <div class="w-45vw song-list-albums" v-else>
      <div class="f-s-25px f-w-bold t-al-center" title="play">
        {{selectAlbum.name}}
       <svg-filler @click="setAlbum()" class="cs-pointer" path="/static/svg/play-circle-regular.svg" :fill="'#FF99CC'" width="40px" height="40px"/>
      </div>
      <div class="ovf-auto song-list">
        <div v-for="(list, index) in selectAlbum.song" :key="index" class="song-item pd-hrzt-20px" v-if="list.name">
          <span class="remove-tag mg-r-20px f-right" title="remove" @click="removeMySong({selectAlbum, index})"> X </span>
          <span class="f-s-18px f-w-bold">{{index + 1}}. {{list.name}} </span> <br>
          <span>{{list.url}}</span>
          <hr>
        </div>
      </div>
      <div class="add-btn pink" @click="activeAddMysong = true">Add New Song</div>
    </div>
    <b-modal :active.sync="activeCreatePlaylist" has-modal-card :canCancel="['escape', 'x']">
      <CreateUserPlaylist/>
    </b-modal>
    <b-modal :active.sync="activeAddMysong" has-modal-card :canCancel="['escape', 'x']">
      <AddMysong :album="selectAlbum"/>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CreateUserPlaylist from './components/CreateUserPlaylist'
import AddMysong from './components/AddMysong'
export default {
  name: 'MyPlaylist',
  components: {
    CreateUserPlaylist,
    AddMysong
  },
  data () {
    return {
      activeCreatePlaylist: false,
      activeAddMysong: false,
      selectAlbum: {
        firebaseID: '12'
      },
      toggleListSong: true
    }
  },
  computed: {
    ...mapState({
      myAlbums: state => state.myAlbums
    })
  },
  methods: {
    ...mapActions({
      getMyAlubums: 'getMyAlubums',
      removeMySong: 'removeMySong',
      setPlayingAlbum: 'setPlayingAlbum'
    }),
    setAlbum () {
      this.setPlayingAlbum(this.selectAlbum)
    }
  },
  watch: {
    myAlbums (val) {
      this.selectAlbum = this.myAlbums.find(album => album.firebaseID === this.selectAlbum.firebaseID)
    }
  },
  async mounted () {
    this.selectAlbum = {}
    await this.getMyAlubums()
  }
}
</script>

<style scoped>
hr {
  display: block;
  height: 2px;
  border: 0;
  background-image: linear-gradient(to right, rgba(255, 153, 204, 0), rgba(255, 153, 204, 0.75), rgba(255, 153, 204, 0));
  margin: 1em 0;
  padding: 0;
}
.list-item {
  overflow: auto;
  height: calc(100vh - 240px);
}
.card {
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 4px;
}
.album-list {
  background-color: rgb(255, 153, 204,  0.5);
  padding: 10px;
  height: calc(100vh - 160px);
}
.song-list-albums {
  color: #4a4a4a;
  background-color: rgb(255, 255, 255,  0.9);
  padding: 10px;
  border-radius: 18px;
  height: calc(100vh - 160px);
}
.song-list {
  color: #4a4a4a;
  padding: 10px;
  border-radius: 18px;
  height: calc(100vh - 280px);
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
.remove-tag  {
  width: 24px;
  height: 24px;
  background-color: rgb(255, 153, 204, 1);
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.pink {
  border-color: rgb(255, 153, 204, 1);
  color: rgb(255, 153, 204, 1);
}
</style>
