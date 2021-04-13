<template>
  <div class="head">
    <span>女武神</span> <span>/</span> <span>VALKYRIES</span>
  </div>
</template>

<script>
export default {
  name: "Head"
}
</script>

<style scoped>
.head{
  font-size: 60px;
  font-weight: bold;
  color: #96dbff;
  text-align: center;
  padding: 50px 0;
}
.head span:first-child {
  color: #fff;
}
.head span:last-child {
  display: inline-block;
  transform: skew(-11deg);
  font-size: 40px;
  margin-left: -15px;
}
</style>