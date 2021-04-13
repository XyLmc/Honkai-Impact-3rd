<template>
  <div class="details" id="details">
  </div>
</template>

<script>
export default {
  name: "details",
  mounted() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContent?contentId='+this.$store.state.details+'&around=1').then((res)=>{
      document.getElementById('details').innerHTML = res.data.data.content
    })
  }
}
</script>

<style scoped>
.details {
  font-size: 16px;
  color: #dcdcdc;
  line-height: 1.5;
}
</style>