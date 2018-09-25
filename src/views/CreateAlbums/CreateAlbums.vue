<template>
  <div class="">
    <div class="column is-4 is-offset-4 card">
      <div class="t-al-center">
        <span class="sweet-label f-bold f-s-24px">Create New Album</span>
      </div>
      <section>
        <div>
          <span class="f-w-bold">Album Name</span>
          <input type="text" class="input is-primary" v-model="newAlbum.name">
        </div>
        <div>
          <span class="f-w-bold">Artist</span>
          <input type="text" class="input is-primary" v-model="newAlbum.artist">
        </div>
        <div>
          <span class="f-w-bold">Image</span>
          <input type="text" class="input is-primary" v-model="newAlbum.img">
        </div>
        <div class="pd-5px t-al-center">
          <img :src="newAlbum.image" alt="">
        </div>
        <div>
          <span class="f-w-bold">Amount Song</span>
          <input type="number" class="input is-primary" v-model="amountSong">
        </div>
        <hr>
        <div v-for="(s, index) in newAlbum.song" :key="index">
          <span class="f-w-bold">Song {{index+1}}</span>
          <input type="text" class="input is-primary" v-model="s.name">
          <span class="f-w-bold">Youtube URL</span>
          <input type="text" class="input is-primary" v-model="s.url">
          <hr>
        </div>
        <div class="button is-primary" @click="addAlbum()">บันทึกค่า</div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CreateAlbums',
  data () {
    return {
      newAlbum: {
        name: '',
        artist: '',
        img: '',
        song: [
          {
            name: '',
            url: ''
          }
        ]
      }
    }
  },
  methods: {
    ...mapActions({
      createNewAlbum: 'createNewAlbum'
    }),
    addAlbum () {
      this.createNewAlbum(this.newAlbum)
    }
  },
  watch: {
    amountSong (val) {
      let temp = []
      for (let i = 0; i < val; i++) {
        temp.push({
          name: '',
          url: ''
        })
      }
      this.newAlbum.song = temp
    }
  }
}
</script>

<style scoped>
</style>
