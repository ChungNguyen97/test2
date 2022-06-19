
const store = {

  state: () => ({
    title: 'Store center',
    list: []
  }),

  getter: {
    getTitle: state => state.title
  },

  actions: {
    // async nuxtServerInit(vuexContext, context) {
    //   // const res = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    //   const res = await this.$axios.get('graph')
    //   vuexContext.commit('SET_DATA', res.data)
    // }
  },
  mutations: {
    SET_DATA(state, data) {
      state.list = data
    }
  },


}

export default store