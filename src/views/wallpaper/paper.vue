<template>
  <div class="paper">
    <div class="paper-list">
      <div class="paper-item" v-for="(item,index) in listItem" :key="index">
        <a :href=item.ext[0].value[0].url target="_blank">
          <img :src=item.ext[0].value[0].url>
        </a>
        <div>{{ item.ext[1].value }}</div>
      </div>
    </div>
    <div class="paper-pagination">
      <ul>
        <li><a tabindex="0" @click="change(0)">首页</a></li>
        <li class="prev-btn" @click="change(activeNum-1)"><a tabindex="0">上一页</a></li>
        <li v-for="(item,index) in pageNum" :key="index" :class="{'li-active':index == activeNum}" @click="change(index)">
          <a tabindex="0">{{item}}</a>
        </li>
        <li class="next-btn" @click="change(activeNum+1)"><a tabindex="0">下一页</a></li>
        <li><a tabindex="0" @click="change(5)">最后页</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "paper",
  data() {
    return {
      listItem: [],
      pageNum:[1,2,3,4,5,6],
      activeNum:0
    }
  },
  methods:{
    change(value){
      if(value == -1){
        alert('已经是最前面一页啦！')
        return
      }
      if(value == 6){
        alert('已经是最后面一页啦！')
        return
      }
      this.activeNum = value
      this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum='+(value+1)+'&channelId=177').then((res) => {
        this.listItem = res.data.data.list
      })
    }
  },
  created() {
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=1&channelId=177').then((res) => {
      this.listItem = res.data.data.list
    })
  }
}
</script>

<style scoped>
.paper {
  width: 1264px;
  margin: 0 auto;
  background: url(../../assets/images/wallpaper/paperbg.png) center top no-repeat;
  border-radius: 5px;
  padding: 30px 20px;
  box-sizing: border-box;
}

.paper-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.paper-item {
  width: 400px;
  height: 265px;
  background: url(../../assets/images/wallpaper/itembg.png) no-repeat;
  padding-top: 7px;
  margin-bottom: 20px;
  margin-right: 12px;
  cursor: pointer;
}

.paper-item:nth-child(3n+3) {
  margin-right: 0;
}

.paper-item a {
  display: block;
  overflow: hidden;
  width: 384px;
  height: 216px;
  margin: 0 auto;
}

.paper-item img {
  display: block;
  margin: 0 auto;
  width: 384px;
  height: 216px;
  transition: all .3s linear;
}

.paper-item img:hover {
  transform: scale(1.1);
  transition: all .3s linear;
}

.paper-item div {
  transform: skew(-11deg);
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 45px;
}

.paper-pagination {
  color: #333;
  font-size: 20px;
  font-weight: 400;
}

.paper-pagination ul {
  display: flex;
  justify-content: center;
}

.paper-pagination li {
  list-style: none;
  border: 1px solid #0097de;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
  cursor: pointer;
}

.paper-pagination li.next-btn, .paper-pagination li.prev-btn {
  width: 85px;
  border: 1px solid #0097de;
}

.paper-pagination li:first-child, .wallpapers .paper-pagination li:last-child {
  width: auto;
  border: none;
  padding: 0 10px;
}
.paper-pagination li:first-child:hover,.paper-pagination li:last-child:hover {
  background: none !important;
  color: #0097de !important;
}
.paper-pagination li:hover, .paper-pagination .li-active {
  background: #0097de;
  color: #fff;
}
</style>