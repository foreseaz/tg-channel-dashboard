import _fetch from './_fetch'

export default {
  Info: {
    get (id) {
      return _fetch({
        method: 'GET',
        api: {
          service: 'users',
          version: ''
        },
        path: `${id}`
      })
    }
  }
}
