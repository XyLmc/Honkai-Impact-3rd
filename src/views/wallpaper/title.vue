<template>
  <div class="title"><span>
      动画
    </span> <span>/</span> <span>ANIMATION</span></div>
</template>

<script>
export default {
  name: "title"
}
</script>

<style scoped>
.title {
  font-size: 60px;
  font-weight: bold;
  color: #96dbff;
  text-align: center;
  padding: 30px 0;
}
.title span:first-child {
  color: #fff;
}
.title span:last-child {
  display: inline-block;
  transform: skew(-11deg);
  font-size: 40px;
  margin-left: -15px;
}
</style>