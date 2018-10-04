<template>
  <div class="card">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Create User Playlist</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Playlist Name">
            <b-input
                type="text"
                v-model="newAlbum.name"
                placeholder="Playlist Name"
                >
            </b-input>
          </b-field>
          <b-field label="Artist Or Detail">
            <b-input
                type="text"
                v-model="newAlbum.artist"
                placeholder="Artist Or Detail"
                >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <div class="button" type="button" @click="$parent.close()">Close</div>
          <div class="button is-primary" @click="createEmptyPlaylist()">Confirm</div>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'CreateUserPlaylist',
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
  computed: {
    ...mapState({
    })
  },
  methods: {
    ...mapActions({
      createUserAlbum: 'createUserAlbum'
    }),
    createEmptyPlaylist () {
      if (!this.validateData()) {
        return
      }
      this.createUserAlbum(this.newAlbum)
      this.$parent.close()
    },
    validateData () {
      if (this.newAlbum.name === '' || this.newAlbum.artist === '') {
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
