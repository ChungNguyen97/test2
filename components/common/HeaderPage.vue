<template>
  <div class="headerPage">
    <div class="container header">
      <div class="header__top">
        <h1 class="title">My Shop</h1>
        <div class="search">
          <input type="text" name="" id="" />
          <button>Search</button>
        </div>
        <div class="account">
          <NuxtLink v-if="isLogin" :to="{ name: 'logout' }">LOGOUT</NuxtLink>
          <NuxtLink v-else :to="{ name: 'login' }">LOGIN</NuxtLink>
        </div>
      </div>

      <div class="header__bot">
        <div class="general">
          <nuxt-link :to="{ name: 'index' }">HOME</nuxt-link>
          <NuxtLink :to="{ name: 'product' }">PRODUCT</NuxtLink>
          <NuxtLink :to="{ name: 'about' }">ABOUT</NuxtLink>
          <NuxtLink :to="{ name: 'tag' }">TAG</NuxtLink>
          <NuxtLink :to="{ name: 'contact' }">CONTACT</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderPage',
  computed: {
    ...mapState('login', ['isLogin']),
  },
}
</script>

<style lang="scss" scoped >
.headerPage {
  background: #333;
  padding: 0 12px;
}
.header {
  color: #fff;
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 40px;

    padding: 10px 0;

    .title {
      letter-spacing: 2px;
      font-weight: 900;
    }
    .title,
    .account {
      width: 20%;
      text-transform: uppercase;
    }
    .account {
      text-align: right !important;
      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
      }
    }
    .search {
      flex: 1;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      input {
        width: 80%;
        height: 24px;
        border: 1px solid #fff;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        box-shadow: 0px 1px 1px #fff;
        &:focus {
          outline: none;
          box-shadow: 0px 1px 5px #c89979;
          color: #c89979;
        }
      }
      button {
        background: #c89979;
        padding: 7px 12px;
        border: none;
        color: #fff;
        height: 29px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        &:hover {
          cursor: pointer;
          opacity: 0.9;
        }
      }
    }
  }

  &__bot {
    .general {
      display: flex;
      justify-content: center;
      gap: 0 40px;
      padding: 10px 0 15px 0;
      border-top: 1px solid rgba(187, 187, 187, 0.5);

      a {
        color: #ecf0f1;
        text-decoration: none;
        padding: 0 0 4px 0;
        display: inline-flex;
        font-weight: 700;
        &:hover {
          cursor: pointer;
          color: #c89979;
          border-bottom: 1px solid;
        }
      }
    }
  }
  .nuxt-link-exact-active {
    color: #c89979 !important;
    border-bottom: 1px solid;
  }
}
</style>