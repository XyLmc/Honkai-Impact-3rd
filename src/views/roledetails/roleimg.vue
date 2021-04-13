<template>
  <div class="big-img">
    <img :src=roleItem.ext[3].value[0].url>
    <div class="big-img-bg">
      <img :src=roleItem.ext[5].value[0].url>
    </div>
  </div>
</template>

<script>
export default {
  name: "roleimg",
  data(){
    return {
      roleItem:this.$store.state.roleItem
    }
  }
}
</script>

<style scoped>
.big-img {
  position: absolute;
  left: -240px;
  bottom: 0;
  z-index: 8;
}
.big-img img {
  display: block;
}
.big-img-bg {
  position: absolute;
  left: -95px;
  bottom: 272px;
  width: 869px;
  height: 272px;
  z-index: -1;
}
</style>