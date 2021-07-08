<template>
  <div class="details-footer">
    <div class="base-line"></div>
    <a @click="pre">
      <span>&lt;</span>
      上一篇
    </a>
    <a @click="next">
      下一篇
      <span>&gt;</span>
    </a>
    <div v-show="false" class="nomore">
      没有更多了
    </div>
  </div>
</template>

<script>
export default {
  name: "details-footer",
  props: {
    channelId:Array,
    time:String,
    ContentId:String
  },
  methods:{
    pre(){
    },
    next(){
    }
  },
  created() {
    console.log(this.channelId[0])
    console.log(this.ContentId)
    this.time = this.time.replace(' ','+')
    console.log(this.time)
    this.axios.post(`https://bh3.mihoyo.com/content/bh3Cn/aroundContent?channelId=171&contentId=15910&start_time=2021-06-10+11:00:00`).then((res)=>{
      console.log(res)
    })
  }
}
</script>

<style scoped>
.details-footer {
  position: relative;
  font-size: 24px;
  color: #fff;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.details-footer a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 105px;
  margin-top: 40px;
  cursor: pointer;
}
a:hover {
  color: #0097de;
}
.details-footer span {
  display: flex;
  border: 1px solid #0097de;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 39px;
}
.base-line{
  top: 14px;
  left: 8px;
}
.nomore {
  cursor: text;
  margin-top: 40px;
}
</style>