<template>
  <div class="hot">
    <div class="animate-item">
      <div class="animate-item-img" :style="{left:leftNum+'px'}">
        <a :href=item.ext[1].value v-for="(item,index) in animateItem" :key="index" target="_blank">
        <img
            :src=item.ext[0].value[0].url
            >
        </a>
      </div>
    </div>
    <div class="actions">
      <div
          class="action"
          v-for="(item,index) in animateItem"
          :key="index"
          :class="{'action-active':index==nowId}"
          @click="change(index)"
          @mouseenter="stoptime"
          @mouseleave="startTime"
      >
        <img :src=item.ext[2].value[0].url>
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
      leftNum:0,
      nowId:0,
      time:{}
    }
  },
  methods:{
    change(value){
      this.nowId = value
      this.leftNum = -(value*1235)
    },
    stoptime(){
      clearInterval(this.time)
    },
    startTime(){
      this.time = setInterval(()=>{
        this.leftNum-=1235
        this.nowId+=1
        if(this.leftNum == -6175){
          this.leftNum = 0
        }
        if(this.nowId == 5){
          this.nowId = 0
        }
      },3000)
    }
  },
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=179').then((res) => {
      console.log(res.data.data.list)
      this.animateItem = res.data.data.list
    })
    this.time = setInterval(()=>{
      this.leftNum-=1235
      this.nowId+=1
      if(this.leftNum == -6175){
        this.leftNum = 0
      }
      if(this.nowId == 5){
        this.nowId = 0
      }
    },3000)
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

.animate-item {
  width: 1235px;
  height: 303px;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
}

.animate-item-img {
  width: 6175px;
  float: left;
  position: absolute;
  transition: all .6s;
}

.animate-item-img img {
  width: auto;
  height: auto;
}
.actions {
  position: absolute;
  right: 20px;
  bottom: 40px;
  display: flex;
  align-items: center;
  z-index: 98;
}
.action {
  cursor: pointer;
  margin-right: 10px;
  border: 2px solid rgba(255,255,255,.3);
}
.action:hover, .action-active{
  border: 2px solid #33c8ff;
}
.actions img {
  display: block;
  width: 105px;
  height: 65px;
}
</style>