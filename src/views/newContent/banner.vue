<template>
  <div class="news-banner">
    <img :src="imgSrc">
  </div>
</template>

<script>
export default {
  name: "banner",
  props: {
    imgSrc:String
  },
}
</script>

<style scoped>
.news-banner {
  width: 100%;
  margin: 0 auto 40px;
}

.news-banner img {
  display: block;
  width: 100%;
}
</style>