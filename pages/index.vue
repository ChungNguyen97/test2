<template>
  <div class="main">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',
  data() {
    return {
      title: 'This is Home page',
    }
  },
  computed: {
    ...mapState('auth', ['token']),
  },
  created() {
    if (!this.token) {
      this.$router.push('login')
    }
  },
}
</script>
<style lang="scss" scoped>
.main {
  .title {
    text-align: center;
  }
}
</style>
