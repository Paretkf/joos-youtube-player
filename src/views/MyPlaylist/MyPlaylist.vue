<template>
  <div class="cl-white">
    <div class="w-40vw">
      <div class="card pd-10px">
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
</style>
