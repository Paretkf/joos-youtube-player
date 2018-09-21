<template>
  <div class="hello">
    <youtube :video-id="videoId" ref="youtube" @playing="playing" v-show="true"></youtube> <br>
    <input type="text" name="" v-model="videoId"> <br>
    <input type="range" name="" v-model="volume" max="100" min="0" step="1" @input="setVolume()">  {{volume}}<br>
    <button @click="playVideo">play</button>
    <button @click="pauseVideo">pause</button>
    <button @click="stopVideo">stop</button>
    <!-- <button @click="setVolume()">setVolume</button> -->
    <player/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      videoId: 'uaELj285Nlw',
      playerVars: {
        autoplay: 1
      },
      volume: 10
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
      this.player.youtube.player.stopVideo()
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
