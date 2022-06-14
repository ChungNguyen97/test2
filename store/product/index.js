export const state = () => ({
  listProduct: [],
  isLoading: false,
  page_info: null,
  productsItem: {}
})

export const getter = {
  getListProducts: state => state.listProduct
}

export const actions = {
  async getListProduct({ commit }) {
    try {
      const res = await this.$axios.get('graph')
      commit('SET_LIST_PRODUCT', res.data)
    } catch (error) {
      return false
    }
  },

  async getPrductById({ commit }, id) {
    try {
      const res = await this.$axios.get(`graph/${id}`)
      commit('SET_PRODUCT_ITEM', res.data)
    } catch (error) {
      return false
    }
  }


}

export const mutations = {
  SET_LIST_PRODUCT(state, payload) {
    state.listProduct = payload.products;
    state.page_info = payload.page_info;
    state.isLoading = false
  },
  SET_PRODUCT_ITEM(state, data) {
    state.productsItem = data;
  }
}