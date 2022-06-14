
const state = () => ({
  token: '',
})

const getters = {
  getStatusLogin(state) {
    if (state.token) {
      return true
    } else {
      return false
    }
  }
}

const actions = {

}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }

}
export { state, actions, getters, mutations }
