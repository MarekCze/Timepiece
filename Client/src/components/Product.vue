<template>
    <div class="wrapper">
      <div class="product" v-for="(product, index) in products.product" :key="index">
        <div class="product-name">
          <h1>{{product.brand}}</h1>
          <h2>{{product.model}}</h2>
        </div>
        <div class="product-image">
          <img :src='getImage(product)'/>
        </div>
        <div class="product-info">
          <div class="color-box"
            v-for="(v, index) in product.variant"
            :key="v.variantId"
            :style="{ backgroundColor: v.color }"
            @mouseover="updateProduct(index)">
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'products',
  props: ['productId'],
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.getProducts()
  },
  computed: {
    displayProducts: function () {
      return this.products
    }
  },
  methods: {
    async getProducts () {
      const response = await ProductService.fetchProducts()
      this.products = response.data
    },
    updateProduct (index) {
      this.SelectedVariant = index
    },
    getImage (product) {
      console.log(product.variant[product.SelectedVariant].variantImage)
      return product.variant[product.SelectedVariant].variantImage
    },
    showProducts () {
      let product = this.products.product
      Array.from(product.prod).forEach(prod => {
        console.log(prod)
      })
      console.log(product[0].brand)
      if (product[0].brand === 'Vincero') {
        return product
      }
    }
  }
}
</script>
