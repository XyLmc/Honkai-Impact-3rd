<template>
  <div class="details-footer">
    <div class="base-line"></div>
    <a @click="pre">
      <span>&lt;</span>
      上一篇
    </a>
    <a v-show="isShow==1" @click="next">
      下一篇
      <span>&gt;</span>
    </a>
    <div v-show="isShow==0" class="nomore">
      没有更多了
    </div>
  </div>
</template>

<script>
export default {
  name: "details-footer",
  data(){
    return{
      isShow:''
    }
  },
  methods:{
    pre(){
      document.documentElement.scrollTop=0
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId='+this.$store.state.getListId).then((res)=>{
        this.$store.state.listItem=this.$store.state.listItem+1
        this.$store.state.details = res.data.data.list[this.$store.state.listItem].contentId
        this.$router.replace('news')
        setTimeout(()=>{
          this.$router.replace('newsContent')
        })
      })
    },
    next(){
      document.documentElement.scrollTop=0
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId='+this.$store.state.getListId).then((res)=>{
        this.$store.state.listItem=this.$store.state.listItem-1
        this.$store.state.details = res.data.data.list[this.$store.state.listItem].contentId
        this.$router.replace('news')
        setTimeout(()=>{
          this.$router.replace('newsContent')
        })
      })
    }
  },
  mounted() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId='+this.$store.state.getListId).then((res)=>{
      let num = res.data.data.list[0].contentId
      console.log(num+'1111111')
      console.log(this.$store.state.details+1)
      if(this.$store.state.details==num){
        this.isShow=0
      }else{
        this.isShow=1
      }
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