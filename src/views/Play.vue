<template>
  <div class="hello">
    <div class="song-list pd-5px ovf-auto" v-show="activeSonglist">
      <div class="t-al-center f-s-20px f-w-bold cl-white">{{playingAlbum.name}}</div>
      <div v-for="(song, index) in playingAlbum.song" :key="index">
        <span class="cl-white cs-pointer f-w-bold" v-if="index === ind"> {{index+1}}. {{song.name}} </span>
        <span v-else class="cs-pointer f-w-bold" @click="setInd(index)"> {{index+1}}. {{song.name}} </span>
      </div>
    </div>
    <div class="player is-offset-3 dp-flex al-it-center">
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/backward-solid.svg" :fill="'#ffffff'" @click="prev()" width="30px" height="30px"/>
      <svg-filler class="cs-pointer mg-l-20px" v-if="!isPlaying" path="/static/svg/play-solid.svg" @click="playVideo" :fill="'#ffffff'" width="40px" height="40px"/>
      <svg-filler class="cs-pointer mg-l-20px" v-else path="/static/svg/pause-solid.svg" :fill="'#ffffff'" @click="pauseVideo" width="40px" height="40px"/>
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/stop-solid.svg" :fill="'#ffffff'" @click="stopVideo" width="30px" height="30px"/>
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/forward-solid.svg" :fill="'#ffffff'" @click="next" width="30px" height="30px"/>
      <input type="range" class="mg-l-20px" v-model="volume" max="100" min="0" step="1" @input="setVolume()" v-if="videoId">
      <marquee  class="mg-l-20px w-50pct" hspace="10"> <span class="f-s-18px f-w-bold cl-white">{{song}}</span> </marquee>
      <svg-filler class="cs-pointer mg-l-10px" path="/static/svg/list-solid.svg" :fill="'#ffffff'" @click="activeSonglist = !activeSonglist" width="30px" height="30px"/>
    </div>
    <youtube :video-id="videoId ? videoId : 'uKxyLmbOc0Q'"
    @playing="playing"
    @ended="nextVideo()"
    ref="youtube"
    v-show="false">
    </youtube>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Play',
  data () {
    return {
      volume: 10,
      ind: 0,
      isPlaying: false,
      activeSonglist: false
    }
  },
  methods: {
    ...mapActions({
      nextAlbum: 'nextAlbum'
    }),
    playing () {
      console.log('we are watching!!!')
    },
    setInd (index) {
      this.ind = index
      setTimeout(async () => {
        await this.stopVideo()
        await this.playVideo()
      }, 50)
    },
    async prev () {
      if (this.ind > 0) {
        this.ind--
        setTimeout(async () => {
          await this.stopVideo()
          await this.playVideo()
        }, 50)
      } else {
        setTimeout(async () => {
          await this.stopVideo()
          await this.playVideo()
        }, 50)
      }
    },
    async next () {
      this.ind++
      if (this.ind < this.playingAlbum.song.length) {
        setTimeout(async () => {
          await this.stopVideo()
          await this.playVideo()
        }, 50)
      } else {
        this.ind = 0
        setTimeout(async () => {
          await this.stopVideo()
          await this.playVideo()
        }, 50)
      }
    },
    async playVideo () {
      await this.player
      this.isPlaying = true
      await this.player.playVideo()
    },
    async stopVideo () {
      this.isPlaying = false
      await this.player.stopVideo()
    },
    async pauseVideo () {
      this.isPlaying = false
      await this.player.pauseVideo()
    },
    async setVolume () {
      await this.player.setVolume(this.volume)
    },
    async nextVideo () {
      this.ind++
      if (this.ind < this.playingAlbum.song.length) {
        await this.stopVideo()
        await this.playVideo()
      } else {
        await this.nextAlbum()
      }
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    },
    ...mapState({
      playingAlbum: state => state.playingAlbum
    }),
    videoId () {
      if (this.playingAlbum.song) {
        const arr = this.playingAlbum.song[this.ind].url.split('v=')
        return arr[1]
      } else {
        return 'uKxyLmbOc0Q'
      }
    },
    song () {
      if (this.playingAlbum.song) {
        return this.playingAlbum.song[this.ind].name + ' | ALBUM : ' + this.playingAlbum.name + ' | ARTIST : ' + this.playingAlbum.artist
      } else {
        return 'Renai Circulation'
      }
    }
  },
  watch: {
    async playingAlbum (val) {
      this.ind = 0
      await this.stopVideo()
      await this.playVideo()
    }
  },
  async mounted () {
    this.volume = await this.player.getVolume()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-list {
  width: 20vw;
  float: right;
  height: 50vh;
  background-color: rgb(255, 153, 204, 0.7);
  margin-top: -51vh;
}
.hello {
  /* position: absolute; */
  width: 100%;
  height: 60px;
  background-color: rgb(255, 153, 204, 0.7);
  padding: 0px 10px 0px 10px;
}
.player {
  padding: 10px 0% 0px 0%;
}
input[type=range] {
  -webkit-appearance: none;
  margin: 13px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 0px;
}
input[type=range]::-webkit-slider-thumb {
  height: 36px;
  width: 14px;
  border-radius: 50px;
  background: #fffdff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -13px;
  border: 1px solid rgb(255, 153, 204, 1);
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ffffff;
  border: 1px solid rgb(255, 153, 204, 1);
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 0px;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0px 0px 1px rgba(13, 13, 13, 0);
  border: 1px solid #000000;
  height: 36px;
  width: 14px;
  border-radius: 50px;
  background: #fffdff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-thumb {
  width: 14px;
  border-radius: 50px;
  background: #fffdff;
  cursor: pointer;
  height: 10px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #ffffff;
}
input[type=range]:focus::-ms-fill-upper {
  background: #ffffff;
}

</style>
