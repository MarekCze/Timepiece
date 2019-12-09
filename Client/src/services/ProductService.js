// handles product requests from server

import api from '@/services/api'

export default {
  fetchProducts () {
    return api().get('products')
  }
}
