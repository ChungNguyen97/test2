const logout = {
  state: () => ({

  }),
  getter: {

  },
  actions: {
    async actionLogout() {
      try {
        const res = await this.$axios.post('logout')
        if (res.status === 200) {
          this.commit('auth/SET_TOKEN', null)
        }
      } catch (error) {
        return false
      }
    }
  },
  mutations: {

  }
}

export default logout