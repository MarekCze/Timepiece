<template>
<main id="home">
  <product v-bind:prodIndex='3'></product>
</main>
</template>

<script>
import Product from '@/components/Product'

export default {
  name: 'Home',
  components: {
    Product
  }
}
</script>
