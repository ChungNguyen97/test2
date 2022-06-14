export default function ({ $axios, store }) {
  $axios.onRequest((config) => {
    const token = store.state.auth.token
    config.headers.Authorization = 'Bearer ' + token
    return config
  })
}
