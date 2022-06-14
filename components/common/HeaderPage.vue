<template>
  <div class="headerPage">
    <div class="container content">
      <div class="general">
        <nuxt-link :to="{ name: 'index' }">HOME</nuxt-link>
        <NuxtLink :to="{ name: 'product' }">PRODUCT</NuxtLink>
        <NuxtLink :to="{ name: 'tag' }">TAG</NuxtLink>
      </div>
      <div class="account">
        <NuxtLink v-if="getStatusLogin" :to="{ name: 'logout' }"
          >LOGOUT</NuxtLink
        >
        <NuxtLink v-else :to="{ name: 'login' }">LOGIN</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderPage',
  computed: {
    ...mapGetters('auth', ['getStatusLogin']),
  },
}
</script>

<style lang="scss" scoped >
.headerPage {
  background: #c0392b;
  padding: 0 12px;
}
.content {
  display: flex;
  justify-content: space-between;
  a {
    color: #ecf0f1;
    text-decoration: none;
    padding: 9px 12px;
    display: inline-flex;
    font-weight: 700;
    &:hover {
      cursor: pointer;
      background: #2980b9;
    }
  }
  .nuxt-link-exact-active {
    color: #ecf0f1;
    background: #2980b9;
  }
}
</style>