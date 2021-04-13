<template>
  <div class="news-banner">
    <img :src=imgSrc>
  </div>
</template>

<script>
export default {
  name: "banner",
  data(){
    return {
      imgSrc:'',
    }
  },
  mounted() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContent?contentId='+this.$store.state.details+'&around=1').then((res)=>{
      this.imgSrc = res.data.data.ext[1].value[0].url
    })
  }
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