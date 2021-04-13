<template>
  <div class="news-content">
    <div class="news-content-wrap" id="detail">
      <content-back></content-back>
      <banner></banner>
      <de-tail-head></de-tail-head>
      <de-tail></de-tail>
      <de-tail-foot></de-tail-foot>
    </div>
  </div>
</template>

<script>
import contentBack from "@/views/newContent/contentBack";
import banner from "@/views/newContent/banner";
import deTail from "@/views/newContent/details";
import deTailHead from "@/views/newContent/details-head"
import deTailFoot from "@/views/newContent/details-footer"
export default {
  name: "content",
  data(){
    return{
    }
  },
  components:{
    contentBack,banner,deTail,deTailHead,deTailFoot
  },
  computed:{
    look(){
      return this.$store.state.loading
    }
  },
  methods:{
    addPage(){
      this.$store.commit('addPageNum')
      this.$store.state.loading='Loading...'
    },
    getDetails(){
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContent?contentId=11734&around=1').then((res)=>{
        console.log(res)
      })
    }
  },
  created() {
    this.getDetails()
  }
}
</script>

<style scoped>
.news-content {
  width: 1246px;
  margin: 0 auto;
  border: 2px solid #646597;
  background: #272c71;
  padding: 6px;
  border-radius: 5px;
}
.news-content-wrap {
  background: #101663;
  padding: 20px;
}
</style>