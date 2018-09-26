<template>
  <div class="hello">
    <youtube :video-id="videoId ? videoId : 'uKxyLmbOc0Q'"
    @playing="playing"
    @ended="nextVideo()"
    ref="youtube"
    v-show="false">
    </youtube>
    <div class="player dp-flex al-it-center">
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/backward-solid.svg" :fill="'#ffffff'" @click="index--" width="30px" height="30px"/>
      <svg-filler class="cs-pointer mg-l-20px" v-if="!isPlaying" path="/static/svg/play-solid.svg" @click="playVideo" :fill="'#ffffff'" width="40px" height="40px"/>
      <svg-filler class="cs-pointer mg-l-20px" v-else path="/static/svg/pause-solid.svg" :fill="'#ffffff'" @click="pauseVideo" width="40px" height="40px"/>
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/stop-solid.svg" :fill="'#ffffff'" @click="pauseVideo" width="30px" height="30px"/>
      <svg-filler class="cs-pointer mg-l-20px" path="/static/svg/forward-solid.svg" :fill="'#ffffff'" @click="index++" width="30px" height="30px"/>
      <marquee  class="mg-l-20px" hspace="10"> <span class="f-s-18px f-w-bold cl-white">{{song}}</span> </marquee>
    </div>
    <!-- {{song}} <br>
    <input type="range" v-model="volume" max="100" min="0" step="1" @input="setVolume()" class="" v-if="videoId">  {{volume}} -->
    <!-- <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Play',
  data () {
    return {
      volume: 10,
      index: 0,
      isPlaying: false
    }
  },
  methods: {
    ...mapActions({
      nextAlbum: 'nextAlbum'
    }),
    playing () {
      console.log('we are watching!!!')
    },
    async playVideo () {
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
      this.index++
      if (this.index < this.playingAlbum.song.length) {
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
        const arr = this.playingAlbum.song[this.index].url.split('v=')
        return arr[1]
      } else {
        return 'uKxyLmbOc0Q'
      }
    },
    song () {
      if (this.playingAlbum.song) {
        return this.playingAlbum.song[this.index].name + ' | ALBUM : ' + this.playingAlbum.name + ' | ARTIST : ' + this.playingAlbum.artist
      } else {
        return 'Renai Circulation'
      }
    }
  },
  watch: {
    async playingAlbum (val) {
      this.index = 0
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
.hello {
  /* position: absolute; */
  height: 60px;
  background-color: rgb(255, 153, 204, 0.7);
  padding: 0px 10px 0px 10px;
}
.player {
  padding: 10px 20% 0px 20%;
}
</style>
