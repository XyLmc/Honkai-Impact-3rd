<template>
  <div class="HOME_Header_Main">
    <video poster="../../assets/images/BengHuai/BodyImage1.jpg" autoplay="autoplay" autobuffer="" loop="loop"
           muted="muted" class="HOME_Header_Video">
      <source src="../../assets/video/Home_HeaderVideo.mp4" type="audio/mp4">
    </video>
    <img src="../../assets/images/BengHuai/Logo.png" class="HOME_Header_Logo">
    <img src="../../assets/images/BengHuai/Age.png" class="HOME_Header_Age">
    <div class="HOME_Header_DownLoad">
      <div class="HOME_Header_DownLoad_Pv">
        <!--          这里是pv封面视频-->
        <video autoplay="autoplay" autobuffer="" loop="loop" muted="muted" :src="pvCover"></video>

<!--        这是pv封面视频的播放按钮-->
        <div class="video-btn" @click="pvAppear"></div>

      </div>
      <div class="HOME_Header_DownLoad_Box">
        <div class="lightStick"></div>
        <img src="../../assets/images/BengHuai/QRBoard.png" class="HOME_Header_DownLoad_Box_QRBoard">
        <img src="../../assets/images/BengHuai/QRCode.png" class="HOME_Header_DownLoad_Box_QRCode">
        <a href="https://api-takumi.mihoyo.com/event/download_porter/link/bh3_cn/bh3/pc_mumu" target="_blank">模拟器下载</a>
        <div class="HOME_Header_DownLoad_Box_Btn1" @click="DownLoadBtn(1)">
          <img src="../../assets/images/BengHuai/DesktopIcon.png"
               style="position: absolute; left: 10px; top: 12px; width: 28px">
          <p>崩坏3桌面版下载</p>
        </div>
        <div class="HOME_Header_DownLoad_Box_Btn2" @click="DownLoadBtn(2)">
          <img src="../../assets/images/BengHuai/AndroidIcon.png"
               style="position: absolute; left: 10px; top: 12px; width: 28px">
          <p>Android下载</p>
        </div>
      </div>
    </div>
<!--    新闻部分-->
    <div class="HOME_Header_News">
<!--      新闻的轮播图部分-->
      <div class="swiper-container" v-swiper:mySwiper="swiperOption" id="pa">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner" v-for="(banner, index) in banners">
            <img :src="banner" @click="ImgToNews(index)"
                 style="cursor: pointer; width: 640px; height: 280px; border-radius: 5px">
          </div>
        </div>
        <div class="Pagination_Board"></div>
        <div class="swiper-pagination"></div>
      </div>
<!--      新闻的信息上的按钮部分-->
      <div class="HOME_Header_News_Btn" v-for="(news, index) in NewsBtn" :key=index :style="NewsBtn_Left[index]"
           :class="{NewsBtn_Select:newsSelect==index}" @click="NewsBtnLink(index)">
        <span>{{ news }}</span>
      </div>
<!--      新闻的标题还有时间部分-->
      <div class="HOME_Header_News_State" :key="state" v-for="(state, index) in NewsState" :style="NewsState_Top[index]"
           @click="NewsJump(ContentId[index])">
        <div class="message">{{ state }}</div>
        <span style="position: absolute; right: 0px; top: 0px">{{ NewsDate[index] }}</span>
      </div>
      <a class="HOME_Header_News_More" href="#" @click="More">查看全部</a>
    </div>
  </div>
</template>
<!--https://www.bh3.com/content/bh3Cn/getContentList?pageSize=6&pageNum=1&channelId=170-->
<script>
export default {
  name: "HOME_Header",
  data() {
    return {
      banners: [],
      NewsBtn: ["最新", "动态", "公告", "活动", "补给"],
      NewsBtn_Left: [{left: '680px'}, {left: '789px'}, {left: '898px'}, {left: '1007px'}, {left: '1116px'}],
      NewsState_Top: [{top: '75px'}, {top: '119px'}, {top: '163px'}, {top: '207px'}],
      NewsState: [],
      ContentId: [],
      NewsDate: [],
      newsSelect: 0,

      //pv封面
      pvCover:'',
      swiperOption: {
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
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=6&pageNum=1&channelId=168').then((res) => {
      for (var i = 0; i < res.data.data.list.length; i++) {
        this.banners.push(res.data.data.list[i].ext[0].value[0].url)
      }
    })
    this.GetNewsState(0)

    // 获取首页扫码下载右边的pv封面视频，还有视频本体
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=6&pageNum=1&channelId=170').then((res)=>{
      //获取首页pv的封面视频路径
      this.pvCover = res.data.data.list[0].ext[0].value[0].url
      this.$store.state.homeVideo = res.data.data.list[0].ext[1].value[0].url
    })
  },
  methods: {
    pvAppear(){
      this.$store.state.pvAppear=true
    },
    More() {
      this.$store.commit('ChangeNav', 1)
      this.$router.push("/news")
    },
    NewsJump(index) {
      document.documentElement.scrollTop = 0
      this.$store.state.details = index
      this.$store.commit('ChangeNav', 1)
      this.$router.push("/newsContent")
    },
    GetNewsState(index) {
      this.NewsState = []
      this.NewsDate = []
      this.ContentId = []
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=4&pageNum=1&channelId=' + (171 + index)).then((res) => {
        for (var i = 0; i < res.data.data.list.length; i++) {
          switch (res.data.data.list[i].channelId[0]) {
            case "171": {
              this.NewsState.push("[ 新闻 ] " + res.data.data.list[i].title)
              this.ContentId.push(res.data.data.list[i].contentId)
              break;
            }
            case "172": {
              this.NewsState.push("[ 动态 ] " + res.data.data.list[i].title)
              this.ContentId.push(res.data.data.list[i].contentId)
              break;
            }
            case "173": {
              this.NewsState.push("[ 公告 ] " + res.data.data.list[i].title)
              this.ContentId.push(res.data.data.list[i].contentId)
              break;
            }
            case "174": {
              this.NewsState.push("[ 活动 ] " + res.data.data.list[i].title)
              this.ContentId.push(res.data.data.list[i].contentId)
              break;
            }
            default: {
              this.NewsState.push("[ 补给 ] " + res.data.data.list[i].title)
              this.ContentId.push(res.data.data.list[i].contentId)
              break;
            }
          }
          this.NewsDate.push(res.data.data.list[i].start_time.split(' ')[0])
        }
      })
    },
    DownLoadBtn(index) {
      if (index == 1) {
        window.open("https://api-takumi.mihoyo.com/event/download_porter/link/bh3_cn/bh3/pc_official")
      } else {
        window.open("https://api-takumi.mihoyo.com/event/download_porter/link/bh3_cn/bh3/android_official")
      }
    },
    NewsBtnLink(index) {
      if (index != this.newsSelect) {
        this.newsSelect = index
        this.GetNewsState(this.newsSelect)
      }
    },
    ImgToNews(index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none
}

.HOME_Header_Main {
  position: relative;
  height: 1386px;
  overflow: hidden
}

.HOME_Header_Video {
  position: absolute;
  top: 0;
  left: 0
}

.HOME_Header_Logo {
  position: absolute;
  left: 50%;
  top: 112px;
  margin-left: 356px;
  width: 250px
}

.HOME_Header_Age {
  position: absolute;
  left: 50%;
  top: 125px;
  margin-left: 630px;
  width: 120px
}

.lightStick{
  position: absolute;
  left: 15px;
  top: 25px;
  width: 114px;
  height: 8px;
  background: url("../../assets/images/BengHuai/lightStick.png");
  background-size: 100% 100%;
  animation: lightStick 3s infinite linear;
  z-index: 99;
}

@keyframes lightStick {
  0%{
    top: 25px;
  }
  100%{
    top: 115px;
  }

}

.HOME_Header_DownLoad {
  position: absolute;
  width: 650px;
  height: 140px;
  bottom: 430px;
  left: 50%;
  transform: translateX(-50%)
}

.video-btn{
  position: absolute;
  width: 65px;
  height: 87px;
  cursor: pointer;
  left: 50%;
  top: 50%;
  background: url("../../assets/images/BengHuai/video-btn.png") no-repeat;
  background-size: 100% 100%;
  transform: translate3d(-50%,-50%,0);
}
.video-btn:hover{
  background: url("../../assets/images/BengHuai/video-btn-on.png") no-repeat;
  background-size: 100% 100%;
}

.HOME_Header_DownLoad_Pv {
  position: absolute;
  top: 0px;
  width: 250px;
  height: 140px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  padding: 5px;
  display: flex
}

.HOME_Header_DownLoad_Pv video {
  width: 240px;
  height: 130px;
  opacity: 0.8
}

.HOME_Header_DownLoad_Box {
  position: absolute;
  left: 260px;
  height: 140px;
  width: 390px;
  background: rgba(255, 255, 255, 0.85);
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 10px 0 rgba(1, 1, 1, 0.3);
  border-radius: 5px;
  padding: 5px;
  display: flex
}

.HOME_Header_DownLoad_Box a {
  position: absolute;
  font-weight: bold;
  writing-mode: tb-rl;
  text-decoration: none;
  color: #00a5e2;
  top: 32px;
  left: 144px
}

.HOME_Header_DownLoad_Box_QRBoard {
  position: absolute;
  left: 10px;
  top: 7px;
  width: 166px;
  height: 122px
}

.HOME_Header_DownLoad_Box_QRCode {
  position: absolute;
  left: 24px;
  top: 29px;
  width: 93px
}

.HOME_Header_DownLoad_Box p {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  left: 46px;
  top: 14px
}

.HOME_Header_DownLoad_Box_Btn1 {
  background: #00a5e2;
  position: absolute;
  width: 193px;
  height: 50px;
  left: 184px;
  top: 15px;
  border-radius: 5px
}

.HOME_Header_DownLoad_Box_Btn1:hover {
  background: #33c8ff
}

.HOME_Header_DownLoad_Box_Btn2 {
  background: #4eb700;
  position: absolute;
  width: 193px;
  height: 50px;
  left: 184px;
  top: 77px;
  border-radius: 5px
}

.HOME_Header_DownLoad_Box_Btn2:hover {
  background: #5edf00
}

.HOME_Header_News {
  position: absolute;
  width: 1246px;
  height: 326px;
  bottom: 54px;
  left: 50%;
  background: url('../../assets/images/BengHuai/HeaderNewsBoard.png') no-repeat;
  background-size: 100% 100%;
  transform: translateX(-50%)
}

.HOME_Header_News_Btn {
  position: absolute;
  color: #fff;
  text-align: center;
  top: 23px;
  width: 100px;
  height: 40px;
  background: #0097de;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  transform: skew(-20deg)
}

.HOME_Header_News_Btn span {
  font-size: 20px;
  font-weight: bold;
  line-height: 39px;
  display: inline-block;
  transform: skew(20deg)
}

.NewsBtn_Select {
  color: #0097de;
  background: #fff
}

.HOME_Header_News_More {
  position: absolute;
  top: 268px;
  left: 1132px;
  width: 90px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background: #fedf4c;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #333;
  text-decoration: none
}

.HOME_Header_News_More:hover {
  background: #fff
}

.HOME_Header_News_State {
  position: absolute;
  display: block;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 44px;
  width: 548px;
  height: 44px;
  left: 674px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3)
}

.message{
  text-overflow: ellipsis;
  width: 450px;
  white-space: nowrap;
  overflow: hidden;
}

.HOME_Header_News_State:hover .message {
  color: #fedf4c
}

.Pagination_Board {
  position: absolute;
  width: 120px;
  height: 50px;
  border-radius: 20px;
  top: 250px;
  left: 260px;
  background: #fff;
  z-index: 1
}

.swiper-container {
  position: absolute;
  left: 20px;
  top: 23px;
  width: 640px;
  height: 280px;
  --swiper-pagination-color: #6ee2ff
}

.swiper-pagination {
  height: 18px
}
</style>