<template>
  <div class="news-cates">
    <div class="cates" v-for="(item,index) in cateItem" :key="index" :class="{cate_active:isActive==index}" @click="show(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentTop",
  data(){
    return {
      cateItem:['最新','动态','公告','活动','补给'],
      isActive:this.$store.state.newsActive,
    }
  },
  methods:{
    show(value){
      this.isActive=value
      switch (value) {
        case 0:this.change(value);break
        case 1:this.change(value);break
        case 2:this.change(value);break
        case 3:this.change(value);break
        case 4:this.change(value);break
      }
    },
    change(value){
      console.log(value)
      this.$store.state.newsActive=value
      this.$store.commit('changeListId',171+value)
    }
    //https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=171
    //https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=173
    // https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=172
  }
}
</script>

<style scoped>
.news-cates {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 25px;
  padding-left: 10px;
}
.cates{
  cursor: pointer;
  width: 170px;
  height: 60px;
  line-height: 60px;
  border-radius: 14px;
  text-align: center;
  background: #0097de;
  margin-right: 10px;
  transform: skew(-20deg);
}
.cates span {
  display: inline-block;
  transform: skew(20deg);
}
.cates:hover{
  background: #33c8ff;
}
.cate_active {
  color: #0097de;
  background: #fff;
}
.cate_active:hover{
  color: #0097de;
  background: #fff;
}
</style>