// handles product requests from server

import api from '@/services/api'

export default {
  fetchProducts () {
    return api().get('products')
  },
  fetchProductsByBrand (brand) {
    return api().get(`products/${brand}`)
  },
  fetchImage (image) {
    return api().get(`products/${image}`)
  }
}
