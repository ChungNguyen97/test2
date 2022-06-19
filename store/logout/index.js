const logout = {
  state: () => ({

  }),
  getter: {

  },
  actions: {
    async actionLogout() {
      try {
        const res = await this.$axios.post('logout')
        console.log('res: ', res);
        this.commit('login/SET_LOGIN', false)
        this.$outer.push('/login')
        return res
      } catch (error) {
        return false
      }
    }
  },
  mutations: {

  }
}

export default logout