<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  created() {
    this.$router.replace('home').catch(err=>err)
  }
}
</script>

<style>
@import "assets/css/main.css";
</style>
