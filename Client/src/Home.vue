<template>
<main id="home">
  <img class="banner" src="@/assets/img/vinceroBanner.jpg">
  <product></product>
  <img class="banner" src="@/assets/img/vinceroBanner.jpg">
  <product></product>
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
