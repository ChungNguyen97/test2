import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    storage: localStorage,
    key: 'token',
    modules: ['auth'],
  }).plugin(store);
}
