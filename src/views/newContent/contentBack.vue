<template>
  <div class="back-btn" @click="back">
    返回列表
  </div>
</template>

<script>
export default {
  name: "contentBack",
  methods:{
    back(){
      this.$router.replace('news')
    }
  }
}
</script>

<style scoped>
.back-btn {
  display: block;
  border-radius: 16px;
  width: 198px;
  height: 61px;
  line-height: 61px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  background: url('../../assets/images/newsContent/back.png') no-repeat;
  cursor: pointer;
  margin-bottom: 24px;
}
.back-btn:hover{
  background: url('../../assets/images/newsContent/backActive.png') no-repeat;
  background-size: 100% 100%;
}
</style>