<template>
    <div class="wrapper">
      <div class="product" v-for="(product, index) in products" :key="index">
        <div class="product-name">
          <h1>{{product.brand}}</h1>
          <h2>{{product.model}}</h2>
        </div>
        <div class="product-image">
          <img :src="getImage(product)">
        </div>
        <div class="product-info">
          <div class="color-box"
            v-for="(variant, index) in product.variant"
            :key="variant.variantId"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateProduct(product, index)"
            >
          </div>
        </div>
        <div class="product-price">
          <h3>&euro;{{product.price}}</h3>
        </div>
      </div>
    </div>
</template>
<script>
import ProductService from '@/services/ProductService'
export default {
  name: 'product',
  props: [
    'brand'
  ],
  data () {
    return {
      products: [],
      shoppingItems: [
        { name: 'apple', price: '7' },
        { name: 'orange', price: '12' }
      ]
    }
  },
  methods: {
    async getProductsByBrand (brand) {
      let response = await ProductService.fetchProductsByBrand(brand)
      this.products = response.data.product
      return this.products
    },
    updateProduct (product, index) {
      product.SelectedVariant = index
      console.log(product.SelectedVariant)
    },
    getImage (product) {
      let img = ''
      if (product.SelectedVariant == null) {
        product.SelectedVariant = 0
      }
      img = require('@/assets/img/' + product.variant[product.SelectedVariant].variantImage)
      console.log(product.SelectedVariant)
      return img
    }
  },
  created () {
    this.products = this.getProductsByBrand(this.brand)
  }
}
</script>
