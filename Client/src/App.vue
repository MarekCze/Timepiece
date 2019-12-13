<!-- displays in the browser -->

<template>
  <div id="app">
    <header>
      <div class="nav-bar">
        <ul class="navi">
          <li>
            <router-link class="navLogo" :to="{ name: 'home'}">
              <span class="websiteName">Timepiece.com</span>
            </router-link>
          </li>
          <li class="logo-li">
            <router-link :to="{ name: 'home'}">
              <img class="logo" src="@/assets/img/watchiconFaintGold2.svg" alt="logo">
            </router-link>
          </li>
          <li><router-link class="navLink" :to="{ name: 'products'}">Products</router-link></li>
          <li><router-link class="navLink" :to="{ name: 'about'}">About Us</router-link></li>
          <li><router-link class="navLink" :to="{ name: 'contact us'}">Contact Us</router-link></li>
          <li><router-link class="navLink" :to="{ name: 'cart'}">Cart</router-link></li>
        </ul>
       </div>
     </header>
    <router-view/>
    <footer>
      <p>Marek Czerniejewski 2019</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style lang="scss">
@import 'assets/css/product_style.css';
</style>
