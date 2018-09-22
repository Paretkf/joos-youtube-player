<template>
  <div>
    <Header/>
    <div class="pd-20px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/views/Header'
export default {
  name: 'AppMain',
  components: {
    Header
  }
}
</script>
