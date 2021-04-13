<template>
  <div class="news-content">
    <div class="news-content-wrap">
      <content-top></content-top>
      <content-list></content-list>
      <div class="more-btn" @click="addPage">
        {{look}}
      </div>
    </div>
  </div>
</template>

<script>
import contentTop from "@/views/news/contentTop";
import contentList from "@/views/news/contentList";
export default {
  name: "content",
  data(){
    return{
    }
  },
  computed:{
    look(){
      return this.$store.state.loading
    }
  },
  components:{
    contentTop,contentList
  },
  methods:{
    addPage(){
      this.$store.commit('addPageNum')
      this.$store.state.loading='Loading...'
    }
  }
}
</script>

<style scoped>
.news-content {
  border: 2px solid #646798;
  border-radius: 5px;
  width: 1240px;
  height: auto;
  margin: 0 auto;
}
.news-content-wrap {
  background: rgba(15,20,97,.9);
  border: 6px solid rgba(255,255,255,.2);
  padding: 18px 14px;
}
.more-btn {
  margin: 0 auto;
  width: 260px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  border: 1px solid #fff;
  cursor: pointer;
}
.more-btn:hover {
  color: #62eaf5;
  border-color: #62eaf5;
}
</style>