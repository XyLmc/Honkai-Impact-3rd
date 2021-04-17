<template>
  <div class="wallTitle"><span>
      动画
    </span> <span>/</span> <span>ANIMATION</span></div>
</template>

<script>
export default {
}
</script>

<style scoped>
.wallTitle {
  font-size: 60px;
  font-weight: bold;
  color: #96dbff;
  text-align: center;
  padding: 30px 0;
}
.wallTitle span:first-child {
  color: #fff;
}
.wallTitle span:last-child {
  display: inline-block;
  transform: skew(-11deg);
  font-size: 40px;
  margin-left: -15px;
}
</style>