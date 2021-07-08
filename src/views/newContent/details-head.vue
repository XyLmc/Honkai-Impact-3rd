<template>
<div class="details-head">
  <div class="base-line"></div>
  <div class="details-title">
    <span>{{ type | typeFilter }}</span>
    {{title}}
  </div>
  <div class="author">
    <span></span>
    发布于
    <span>{{time | timeFilter}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "details-head",
    props:['title','time','type'],
  filters:{
    timeFilter(value){
      return value.slice(0,10)
    },
    typeFilter(value){
      if(value==172){
        return '【动态】'
      }
      if(value==173){
        return '【公告】'
      }
      if(value==174){
        return '【活动】'
      }
      if(value==175){
        return '【补给】'
      }
    }
  },
}
</script>

<style scoped>
.details-head {
  position: relative;
  margin-bottom: 30px;
}
.details-title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
}
.details-title span {
  color: #60e5f1;
}
.author {
  text-align: right;
  font-size: 20px;
  color: #fff;
  padding-bottom: 38px;
}
.author span:first-child {
  margin-right: 10px;
}
.author span:last-child {
  margin-left: 10px;
  color: #62eaf5;
}
</style>