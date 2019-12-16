<template>
<main id="home">
  <img class="banner" src="@/assets/img/vinceroBanner2.jpg">
  <product brand="Vincero"></product>
  <img class="banner" src="@/assets/img/breguetBanner-White.jpg">
  <product brand="Breguet"></product>
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
