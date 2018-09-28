<template>
  <div class="cl-white">
    <div class="w-40vw album-list">
    <span class="f-s-30px f-w-bold"> My Playlist</span>
    <div>
      <div class="card cs-pointer pd-10px dp-flex jtf-ct-space-between">
        <div class="w-70pct">
          <div class="f-s-20px f-w-bold">
            Playlist : Rachata Playlist
          </div>
          <div class="f-s-18px f-w-bold">
            Amount Song : 3
          </div>
        </div>
        <div class="w-25pct">
          <svg-filler class="f-right" path="/static/svg/angle-right-solid.svg" :fill="'#b7b7b7'" width="60px" height="60px"/>
        </div>
      </div>
      <div class="add-btn" @click="addSong()">Create New Playlist</div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'MyPlaylist',
  computed: {
    ...mapState({
      // state
    })
  },
  methods: {
    ...mapActions({
      // Actions
    })
  }
}
</script>

<style scoped>
.card {
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 4px;
}
.album-list {
  background-color: rgb(255, 153, 204,  0.5);
  padding: 10px;
  height: calc(100vh - 160px);
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
</style>
