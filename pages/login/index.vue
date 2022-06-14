<template>
  <div class="login">
    <div class="content">
      <h3 class="title">LOGIN</h3>
      <div>
        <h4 @click="loginNow">Đang nhap nhanh</h4>
      </div>
      <form action="" class="loginForm">
        <div class="group">
          <label for="username">Username: </label>
          <input id="username" v-model="email" type="text" />
        </div>

        <div class="group">
          <label for="password">Password: </label>
          <input id="password" v-model="password" type="password" />
        </div>

        <button type="submit" @click.prevent="handleLogin">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    ...mapGetters('auth', ['getStatusLogin']),
  },

  methods: {
    ...mapActions('login', ['loginAction']),
    async handleLogin() {
      const data = {
        email: this.email,
        password: this.password,
      }
      await this.loginAction(data)
      if (this.getStatusLogin) {
        this.$router.push('/')
      }
    },
    loginNow() {
      this.email = 'hieu.ho@gmail.com'
      this.password = '123456'
      this.handleLogin()
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  height: calc(100vh - 40px);
  // background: rgba(231, 76, 60, 0.3);
  .content {
    margin: auto;
    width: 600px;
    padding: 12px;
    box-shadow: 0px 1px 5px #ccc;
    border-radius: 4px;
    // background: #fff;
    background: rgba(231, 76, 60, 0.3);
    .title {
      text-align: center;
      margin-top: 0;
    }
    .loginForm {
      .group {
        display: flex;
        display: flex;
        margin-bottom: 10px;
        align-items: center;
        gap: 0 12px;
        label {
          font-weight: 600;
        }
        input {
          flex: 1;
          border: 1px solid #1abc9c;
          border-radius: 4px;
          padding: 4px 12px;
          &:focus {
            border: 1px solid #e74c3c;
          }
        }
      }
      button {
        display: block;
        margin: 24px auto 12px;
        padding: 6px 24px;
        border: none;
        background: #c0392b;
        color: #fff;
        border-radius: 5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
  }
}
</style>