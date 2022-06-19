const state = () => ({
  title: 'login',
  isLogin: false

})

const getter = {
}

const actions = {
  async loginAction({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      commit('SET_LOGIN', true)

      this.$router.push('/')
      return res
    } catch (error) {
      return false
    }

  }
}


const mutations = {
  SET_LOGIN(state, statusLogin) {
    state.isLogin = statusLogin
  }
}

export {
  state,
  actions,
  getter,
  mutations
}