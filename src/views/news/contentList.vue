<template>
  <div class="news-list">
    <div class="newsItem" v-for="(item,index) in listItem" :key="index" @click="toNewsContent(index)">
        <div class="news-item__img">
          <img :src=item.ext[0].value[0].url alt="米哈游">
        </div>
        <div class="news-item__bd">
          <div class="news-item__title">
            <div>{{item.title}}</div>
            <span>{{ item.start_time | timeFilter}}</span>
            <div class="base-line"></div>
          </div>
          <p class="news-item__intro">{{ item.intro }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentList",
  data(){
    return{
      listItem:[],
    }
  },
  computed:{
    listItemId(){
      return this.$store.state.getListId
    },
    pageNumId(){
      return this.$store.state.pageNum
    }
  },
  watch:{
    listItemId(newId,oldId){
      console.log(oldId+'111')
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId='+newId).then((res)=>{
        this.listItem=res.data.data.list
        console.log(res.data.data.list)
      })
    },
    pageNumId(newId,oldId){
      console.log(oldId)
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum='+newId+'&channelId='+this.listItemId).then((res)=>{
        let moreList = res.data.data.list
        this.listItem=this.listItem.concat(moreList)
      })
    },
    listItem(newValue,oldValue){
      if(newValue.length>oldValue.length){
        this.$store.state.loading='查看更多'
      }
    }
  },
  methods:{
    toNewsContent(value){
      document.documentElement.scrollTop=0
      this.$store.state.listItem=value
      this.$store.state.details=this.listItem[value].contentId
      this.$router.push('newsContent')
    }
  },
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId='+this.listItemId).then((res)=>{
      this.listItem=res.data.data.list
      console.log(res.data.data.list)
    })
  },
  filters:{
    timeFilter(value){
      return '发布日期：'+value.slice(0,10)
    }
  }
}
</script>

<style scoped>
.news-list {
  min-height: 200px;
}

.newsItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: #282d72;
  border: 2px solid #404481;
  border-radius: 5px;
  margin-bottom: 24px;
  cursor: pointer;
}
.newsItem:hover .news-item__intro{
  color: #62eaf5;
}

.news-item__img {
  width: 225px;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
}

.news-item__img img {
  display: block;
  width: 100%;
  height: 100%;
}

.news-item__bd {
  width: 970px;
  padding: 20px 30px;
  position: relative;
  flex-shrink: 0;
}

.news-item__title {
  color: #62eaf5;
  font-size: 21px;
  font-weight: bold;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 8px;
}

.news-item__title div:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-item__title span {
  font-weight: 400;
  width: 240px;
  flex-shrink: 0;
  text-align: right;
}


.news-item__intro {
  font-size: 19px;
  color: #fff;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-item__bd::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 50px;
  background: url('../../assets/images/news/listRight.png') no-repeat;
  background-size: 100% 100%;
  right: 2px;
  top: 50%;
  margin-top: -25px;
}
</style>