<template>
  <div class="watches">
    <h1>Watches</h1>
    This file will list all the watches.

    <div v-for="watch in watches" v-bind:key="watch.brand">
      <p>
        <span><b>{{ watch.brand }}</b></span><br />
        <span>{{ watch.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import watchService from '@/services/watchService.js'
export default {
  name: 'watches',
  data () {
    return {
      watches: []
    }
  },
  mounted () {
    this.getWatches()
  },
  methods: {
    async getWatches () {
      const response = await watchService.fetchWatches()
      this.watches = response.data
    }
  }
}
</script>
