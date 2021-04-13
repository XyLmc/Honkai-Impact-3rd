<template>
  <a href="/valkyries" class="back-btn nuxt-link-active">
    <span>
        返回列表
      </span>
  </a>
</template>

<script>
export default {
  name: "back"
}
</script>

<style scoped>
.back-btn {
  border-radius: 16px;
  width: 198px;
  height: 61px;
  line-height: 61px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  background: url('../../assets/images/newsContent/back.png') no-repeat;
  position: absolute;
  left: 40px;
  top: 140px;
  cursor: pointer;
  z-index: 99;
}
.back-btn:hover {
  background: url('../../assets/images/role/back.png') no-repeat;
  background-size: 100% 100%;
}
</style>