<template>
  <div class="logout">
    <div class="content">
      <h3>Ban co chac muon dang xuat</h3>
      <p class="timeRemain">Se tu dong dang xuat sau: {{ timeRemain }} s</p>
      <div class="btns">
        <button class="cancel" @click="handleCancelLogout">Cancel</button>
        <button class="continue" @click="handleContinueLogout">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LogoutPage',
  data() {
    return {
      time: 5,
      timeRemain: null,
      timerIdClearOut: null,
      timerIdClearIn: null,
    }
  },
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
    }),
  },
  created() {
    this.timerIdClearOut = setTimeout(async () => {
      await this.actionLogout()
      if (!this.token) this.$router.push('login')
    }, this.time * 1000)

    this.timeRemain = this.time
    this.timerIdClearIn = setInterval(() => {
      this.timeRemain -= 1
      if (this.timeRemain <= 0) {
        clearInterval(this.timerIdClearIn)
      }
    }, 1000)
  },
  methods: {
    async handleContinueLogout() {
      clearInterval(this.timerIdClearOut)
      clearTimeout(this.timerIdClearIn)

      await this.actionLogout()
      await this.$auth.setToken('local', 'Bearer ' + '')
      if (!this.token) {
        this.$router.push('login')
      }
    },
    ...mapActions('logout', ['actionLogout']),

    handleCancelLogout() {
      clearInterval(this.timerIdClearIn)
      clearTimeout(this.timerIdClearOut)
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.logout {
  .content {
    border: 1px solid rgba(231, 76, 60, 0.4);
    margin: 60px auto 12px;
    width: 600px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;

    .btns {
      button {
        padding: 5px 12px;
        border: none;
        border-radius: 4px;
        color: #fff;
      }
      .cancel {
        background: #e67e22;
        margin-right: 12px;
      }
      .continue {
        background: #2980b9;
      }
    }
  }
}
</style>