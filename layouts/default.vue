<template>
  <div class="app">
    <HeaderPage />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import HeaderPage from '~/components/common/HeaderPage.vue'
export default {
  name: 'DefaultLayout',
  components: { HeaderPage },
}
</script>

<style >
body {
  margin: 0;
}
.container {
  max-width: 1200px;
  display: block;
  margin: 0 auto;
}
</style>