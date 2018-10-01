<template>
  <div class="card">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Add Song</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Song">
            <b-input
                type="text"
                v-model="song.name"
                placeholder="Renai Circulation"
                >
            </b-input>
          </b-field>
          <b-field label="Youtube URL">
            <b-input
                type="text"
                v-model="song.url"
                placeholder="https://www.youtube.com/watch?v=uKxyLmbOc0Q"
                >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <div class="button" type="button" @click="$parent.close()">Close</div>
          <div class="button is-primary" @click="addNewSong()">Confirm</div>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddMysong',
  props: {
    album: {
      type: Object
    }
  },
  data () {
    return {
      song: {
        name: '',
        url: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addSongToMyAlbum: 'addSongToMyAlbum'
    }),
    addNewSong () {
      if (!this.validateData()) {
        return
      }
      this.addSongToMyAlbum({
        album: this.album,
        song: this.song
      })
      this.$parent.close()
    },
    validateData () {
      if (this.song.name === '' || this.song.url === '') {
        this.$swal({
          type: 'error',
          title: 'กรอกข้อมูลให้ครบ'
        })
        return false
      }
      return true
    }
  }
}
</script>
