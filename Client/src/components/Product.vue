<template>
    <div class="wrapper">
      <div class="product" v-for="(product, index) in products" :key="index">
        <div class="product-name">
          <h1>{{product.brand}}</h1>
          <h2>{{product.model}}</h2>
        </div>
          <img :src="getImage(product.variant[0].variantImage)">
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
    check () {
      console.log('products array is not empty')
    },
    updateProduct (index) {
      this.SelectedVariant = index
    },
    async getImage (image) {
      let img = await ProductService.fetchImage(image)
      console.log(img)
      return img
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
  },
  created () {
    this.products = this.getProductsByBrand(this.brand)
  }
}
</script>
