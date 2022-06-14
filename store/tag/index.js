const state = () => ({
  listTag: []
})

const getters = {

}

const actions = {
  async getListTag({ commit }) {
    const res = await this.$axios.get('tags')
    commit('SET_LIST_TAG', res)
  }
}


const mutations = {
  SET_LIST_TAG(state, res) {
    state.listTag = res.data.tags
  }
}

export { state, getters, actions, mutations }