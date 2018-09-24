<template>
  <div class="hello">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" v-show="false"></youtube> <br>
    <!-- <input type="text" name="" v-model="videoId"> <br> -->
    <input type="range" v-model="volume" max="100" min="0" step="1" @input="setVolume()" class="">  {{volume}}
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button>
    <!-- <span>{{song}}</span> -->
    {{playingAlbum}}
    <!-- <button @click="setVolume()">setVolume</button> -->
    <player/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      volume: 10,
      index: 0
    }
  },
  methods: {
    playing () {
      console.log('we are watching!!!')
    },
    playVideo () {
      this.player.playVideo()
    },
    stopVideo () {
      this.player.stopVideo()
    },
    pauseVideo () {
      this.$refs.youtube.player.pauseVideo()
    },
    setVolume () {
      this.player.setVolume(this.volume)
    }
  },
  computed: {
    player () {
      return this.$refs.youtube.player
    },
    ...mapGetters({
      playingAlbum: 'playingAlbum'
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
        return this.playingAlbum.song[0].name
      } else {
        return 'Renai Circulation「恋愛サーキュレーション」歌ってみた【＊なみりん】'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 60px;
  background-color: #FF99CC;
  padding: 0px 10px 0px 10px;
}
</style>
