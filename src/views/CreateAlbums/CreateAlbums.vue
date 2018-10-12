<template>
  <div class="">
    <div class="column is-4 is-offset-4 card create-album">
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
          <img :src="newAlbum.img" alt="">
        </div>
        <hr>
        <div v-for="(s, index) in newAlbum.song" :key="index" class="mg-bt-10px">
          <div class="w-100pct">
            <span class="f-w-bold f-left">Song {{index+1}}</span>
            <span class="remove-tag mg-bt-5px f-right" @click="removeSong(index)"> X </span>
          </div>
          <input type="text" class="input is-primary" v-model="s.name">
          <span class="f-w-bold">Youtube URL</span>
          <input type="text" class="input is-primary" v-model="s.url">
        </div>
        <div class="add-btn" @click="addSong()">เพิ่มเพลง</div>
        <hr>
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
    validateData () {
      if (this.newAlbum.name === '' || this.newAlbum.img === '' || this.newAlbum.artist === '') {
        this.$swal({
          type: 'error',
          title: 'กรอกข้อมูลให้ครบ'
        })
        return false
      } else if (this.newAlbum.song.length === 0) {
        this.$swal({
          type: 'error',
          title: 'ใส่เพลงอย่างน้อย 1 เพลงลงใน Album'
        })
        return false
      } else if ((this.newAlbum.song.findIndex(s => s.url === '') !== -1) || (this.newAlbum.song.findIndex(s => s.name === '') !== -1)) {
        this.$swal({
          type: 'error',
          title: 'กรุณาใส่ชื่อเพลงหรือ url ให้ครบ'
        })
        return false
      }
      return true
    },
    async addAlbum () {
      if (!this.validateData()) {
        return
      }
      await this.createNewAlbum(this.newAlbum)
      this.$swal({
        title: 'Success!',
        imageUrl: '/static/img/loading.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
      })
      this.newAlbum = {
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
    },
    addSong () {
      this.newAlbum.song.push({
        name: '',
        url: ''
      })
    },
    removeSong (index) {
      this.newAlbum.song.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.add-btn {
  width: 100%;
  height: 36px;
  text-align: center;
  border: 2px dashed;
  border-color: #FF99CC;
  border-radius: 18px;
  cursor: pointer;
  font-weight: bold;
  color: #FF99CC;
  padding: 6px 0px 6px 0px;
}
.remove-tag  {
  width: 24px;
  height: 24px;
  color: #ffffff;
  background-color: #FF99CC;
  font-weight: bold;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}
.cl-primary {
  background-color: #FF99CC;
}
.card {
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 4px;
}
.input.is-primary, .taginput .is-primary.taginput-container.is-focusable, .textarea.is-primary {
  border-color: #FF99CC;
  outline-color: #FF99CC;
}
.input.is-primary:focus, .taginput .is-primary.taginput-container.is-focusable:focus, .input.is-primary.is-focused, .taginput .is-primary.is-focused.taginput-container.is-focusable, .input.is-primary:active, .taginput .is-primary.taginput-container.is-focusable:active, .input.is-primary.is-active, .taginput .is-primary.is-active.taginput-container.is-focusable, .textarea.is-primary:focus, .textarea.is-primary.is-focused, .textarea.is-primary:active, .textarea.is-primary.is-active  {
  box-shadow: 0 0 0 0.125em rgba(209, 0, 174, 0.21);
}
.create-album {
  height: calc(100vh - 180px);
  overflow: auto;
}
.button.is-primary {
  background-color: #FF99CC;
  font-weight: bold;
  width: 100%;
}
.button.is-primary:hover {
  background-color: rgb(248, 0, 124);
  font-weight: bold;
  width: 100%;
}
</style>
