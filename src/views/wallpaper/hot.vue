<template>
  <div class="hot">
    <div class="swiper-container" v-swiper:mySwiper="wallOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="cursor: pointer;" v-for="(item,index) in animateItem" :key="index" @click="openWindow(item.ext[1].value)">
          <img :src=item.ext[0].value[0].url ondragstart="return false">
        </div>
      </div>
      <div class="swiper-pagination">
        <div class="swiper-pagination-bullet" v-for="(item,index) in animateItem" :key="index">
          <img :src=item.ext[0].value[0].url ondragstart="return false">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hot",
  data() {
    return {
      animateItem: [],
      wallOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        observer: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    }
  },
  methods:{
    openWindow(value){
      window.open(value)
    }
  },
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=179').then((res) => {
      this.animateItem = res.data.data.list
    })
  }
}
</script>

<style scoped>
.hot {
  width: 1264px;
  height: 342px;
  background: url(../../assets/images/wallpaper/hotbg.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  padding: 17px 15px;
  border-radius: 10px;
  position: relative;
}

.animate-item-img img {
  width: auto;
  height: auto;
}

.swiper-container{
  position: relative;
}

.swiper-pagination {
  padding: 0px 15px 14px 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 98;
}
.swiper-pagination /deep/ .swiper-pagination-bullet{
  display: block;
  width: 105px;
  height: 65px;
  border-radius: 0px;
  background-size: 100% 100%;
  border: 2px solid rgba(255,255,255,.3);
  opacity: 1;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:hover{
  border: 2px solid #33c8ff;
}
.swiper-pagination /deep/ .swiper-pagination-bullet-active{
  border: 2px solid #33c8ff;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:nth-child(1){
  background: url("../../assets/images/wallpaper/hot1.jpg") no-repeat;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:nth-child(2){
  background: url("../../assets/images/wallpaper/hot2.jpg") no-repeat;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:nth-child(3){
  background: url("../../assets/images/wallpaper/hot3.png") no-repeat;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:nth-child(4){
  background: url("../../assets/images/wallpaper/hot4.jpg") no-repeat;
}
.swiper-pagination /deep/ .swiper-pagination-bullet:nth-child(5){
  background: url("../../assets/images/wallpaper/hot5.jpg") no-repeat;
}

</style>