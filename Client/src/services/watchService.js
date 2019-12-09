// handles watch requests from server

import api from '@/services/api'

export default {
  fetchWatches () {
    return api().get('watches')
  }
}
