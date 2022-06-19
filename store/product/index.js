const state = () => ({
  productList: [],
  productType: [],
  productItem: {}
})

const getter = {

}

const actions = {
  async getProductList({ commit }, params = '') {
    const res = await this.$axios.get('graph', { params })
    commit('SET_PRODUCT_LIST', res.data)
  },

  async getProductById({ commit }, id) {
    const res = await this.$axios.get(`graph/${id}`)
    commit('SET_PRODUCT_ITEM', res.data)
  },


  async getProductByType({ commit }, payload) {
    const res = await this.$axios.get('graph', { payload })
    return res
  },

  async getProductType({ commit }) {
    const res = await this.$axios.get('product-types',)
    commit('SET_PRODUCT_TYPE', res.data)
  }
}

const mutations = {
  SET_PRODUCT_LIST(state, list) {
    state.productList = list.products
  },
  SET_PRODUCT_TYPE(state, productType) {
    state.productType = productType.product_types
  },
  SET_PRODUCT_ITEM(state, item) {
    state.productItem = item
  }
}

export {
  state,
  getter,
  actions,
  mutations
}
