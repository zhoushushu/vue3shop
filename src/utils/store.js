import store from 'store2'

export default {
  get: key => {
    return store(`nuctech_${key}`)
  },
  set: (key, data) => {
    store(`nuctech_${key}`, data)
  },
  clear: key => {
    store.remove(`nuctech_${key}`)
  },
  clearAll: () => {
    store.clearAll()
  }
}
