
import api from './api.js'

export default {
  fetchPosts () {
    return api().get('watches')
  }
}
