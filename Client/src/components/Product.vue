<template>
    <div class="wrapper">
      <div class="product" v-for="(product, prodIndex) in products" :key="prodIndex">
        <h1>{{product[0].brand}}</h1>
        <h2>{{product[0].model}}</h2>
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
