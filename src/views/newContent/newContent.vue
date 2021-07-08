<template>
  <div class="news-content">
    <div class="news-content-wrap" id="detail">
      <content-back></content-back>
      <banner :imgSrc="imgSrc"></banner>
      <de-tail-head :title="title" :time="time" :type="type"></de-tail-head>
      <de-tail :detailsContent="detailsContent"></de-tail>
      <de-tail-foot :channelId="type" :time="time" :ContentId="ContentId"></de-tail-foot>
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
  data(){
    return{
      imgSrc:'',
      detailsContent:'',
      title:'',
      time:'',
      type:'',
      ContentId:'',
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
  },
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContent?contentId='+this.$route.params.Content+'&around=1').then((res)=>{
      this.imgSrc = res.data.data.ext[1].value[0].url
      this.detailsContent = res.data.data.content
      this.title = res.data.data.title
      this.time = res.data.data.start_time
      this.type = res.data.data.channelId
      this.ContentId = res.data.data.contentId
    })
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