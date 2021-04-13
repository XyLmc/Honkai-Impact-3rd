<template>
  <div id="Offcial">
    <router-view></router-view>
    <Navigation></Navigation>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name: 'Offcial',
  components: {
    Footer, Navigation,
  },
  created() {
    this.$router.replace('/home')
  }
}
</script>

<style>
</style>