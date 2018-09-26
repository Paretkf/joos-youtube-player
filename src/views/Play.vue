<template>
  <div class="hello">
    <youtube :video-id="videoId ? videoId : 'uKxyLmbOc0Q'"
    @playing="playing"
    @ended="nextVideo()"
    ref="youtube"
    v-show="false">
    </youtube>
    <input type="range" v-model="volume" max="100" min="0" step="1" @input="setVolume()" class="" v-if="videoId">  {{volume}}
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button>
    {{song}}
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Play',
  data () {
    return {
      volume: 10,
      index: 0
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
      await this.player.playVideo()
    },
    async stopVideo () {
      await this.player.stopVideo()
    },
    async pauseVideo () {
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
        return this.playingAlbum.song[this.index].name
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
</style>
