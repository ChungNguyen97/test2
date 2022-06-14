const state = () => ({
  title: 'login'
})

const getter = {
}

const actions = {
  async loginAction({ commit }, data) {
    try {
      const res = await this.$axios.post('login', data)
      if (res.status === 200 || res.statusText === 'OK') {
        this.commit('auth/SET_TOKEN', res.data.token);
      }
    } catch (error) {
      return false
    }

  }
}

const mutations = {

}

export {
  state,
  actions,
  getter,
  mutations
}