<template>
  <div class="bg">
    <div class="news-title"><span>
        作战资讯
      </span>
      /
      <span>NEWS</span>
    </div>
    <conTent></conTent>
    <div class="top-arrow" :style="{display:isShow}" @click="toTop"></div>
  </div>
</template>

<script>
import conTent from "@/views/news/content";

export default {
  name: "Home.vue",
  data(){
    return{
      isShow:'none'
    }
  },
  components: {
    conTent
  },
  methods:{
    handScroll(){
      let scroll = document.documentElement.scrollTop
      if(scroll>400){
        this.isShow='block'
      }else {
        this.isShow='none'
      }
    },
    toTop(){
      document.documentElement.scrollTop=0
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handScroll)
  }
}
</script>

<style scoped>
@import "../../assets/css/toTop.css";
.bg {
  background: #354c99 url('../../assets/images/news/newsbg.jpg') center top no-repeat;
  padding-top: 92px;
  margin: 0 auto;
  height: auto;
  width: 100%;
  min-width: 1600px;
  padding-bottom: 35px;
}

.news-title {
  font-size: 60px;
  font-weight: bold;
  color: #9c9c9c;
  text-align: center;
  padding: 50px 0;
}

.news-title span:first-child {
  color: #fff;
}

.news-title span:last-child {
  display: inline-block;
  transform: skew(-11deg);
  font-size: 40px;
  margin-left: -15px;
}
</style>