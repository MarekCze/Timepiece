<template>
    <div class="wrapper">
      <div class="product" v-for="(product, index) in products" :key="index">
        <div class="product-name">
          <h1>{{product.brand}}</h1>
          <h2>{{product.model}}</h2>
        </div>
<<<<<<< HEAD
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
=======
          <img :src="getImage(product.variant[0].variantImage)">
>>>>>>> 84fdaf259d9b98cdc5e4f2e54fdaf4cf49c5e982
      </div>
    </div>
</template>
<script>
import ProductService from '@/services/ProductService'
export default {
<<<<<<< HEAD
  name: 'products',
  props: ['productId'],
=======
  name: 'product',
  props: [
    'brand'
  ],
>>>>>>> 84fdaf259d9b98cdc5e4f2e54fdaf4cf49c5e982
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
<<<<<<< HEAD
    getImage (product) {
      console.log(product.variant[product.SelectedVariant].variantImage)
      return product.variant[product.SelectedVariant].variantImage
=======
    async getImage (image) {
      let img = await ProductService.fetchImage(image)
      console.log(img)
      return img
>>>>>>> 84fdaf259d9b98cdc5e4f2e54fdaf4cf49c5e982
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
