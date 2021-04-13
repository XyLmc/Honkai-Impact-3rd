<template>
  <div class="bg">
    <img
        style="-webkit-user-select: none;margin: auto;cursor: zoom-in;"
        :src=this.$store.state.imageUrl
        width="1110"
        height="624">
  </div>
</template>

<script>
export default {
  name: "image",
}
</script>

<style scoped>
.bg {
  margin: 0px;
  background: #0e0e0e;
  height: 100%;
}
</style>