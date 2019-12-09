<template>
    <div class="wrapper">
      <div class="product" v-for="(prod, index) in products.product" :key="index">
        <h1>{{prod.brand}}</h1>
        <h2>{{prod.model}}</h2>
      </div>
    </div>
</template>
<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'products',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  methods: {
    async getProducts () {
      const response = await ProductService.fetchProducts()
      this.products = response.data
    }
  }
}
</script>
