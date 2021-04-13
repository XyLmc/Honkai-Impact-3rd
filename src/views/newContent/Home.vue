<template>
  <div class="bg">
    <con-tent></con-tent>
    <div class="top-arrow" :style="{display:isShow}" @click="toTop"></div>
  </div>
</template>

<script>
import conTent from "@/views/newContent/content";
export default {
  name: "Home",
  data(){
    return{
      isShow:'none'
    }
  },
  methods:{
    toTop(){
      document.documentElement.scrollTop=0
    },
    handScroll(){
      let scroll = document.documentElement.scrollTop
      if(scroll>400){
        this.isShow='block'
      }else {
        this.isShow='none'
      }
    },
  },
  components:{
    conTent
  },
  mounted() {
    window.addEventListener('scroll',this.handScroll)
  }
}
</script>

<style scoped>
@import "../../assets/css/toTop.css";
.bg{
  background: #a4c9fe url('../../assets/images/newsContent/news-content-bg.jpg') center top no-repeat;
  padding: 150px 0 64px;
}
</style>