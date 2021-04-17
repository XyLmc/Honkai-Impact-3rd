<template>
  <div class="secondTitle"><span>
      壁纸
    </span> <span>/</span> <span>WALLPAPERS</span></div>
</template>

<script>
export default {
  name: "secondTitle"
}
</script>

<style scoped>
.secondTitle {
  font-size: 60px;
  font-weight: bold;
  color: #96dbff;
  text-align: center;
  padding: 30px 0;
}
.secondTitle span:first-child {
  color: #fff;
}
.secondTitle span:last-child {
  display: inline-block;
  transform: skew(-11deg);
  font-size: 40px;
  margin-left: -15px;
}
</style>