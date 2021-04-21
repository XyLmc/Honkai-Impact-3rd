<template>
  <div id="app">
    <router-view></router-view>
    <Navigation></Navigation>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
@import "assets/css/main.css";
</style>
