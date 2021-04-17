<template>
  <div class="wrap-item">
    <div v-for="(item,index) in listItem" :key="index">
      <div class="valkyries-item__title">
        <div>
          {{item.ext[0].value}}
        </div>
        <div class="role-line"></div>
        <div>
          {{item.ext[1].value}}
        </div>
      </div>
      <div class="roles" >
        <a class="" v-for="(items,indexs) in roleItem" :key="indexs">
          <div class="base-role-btn" v-if="item.type==items.type" @click="roleDetail(items,item.ext[0].value,item.ext[1].value,indexs)">
            <div class="imgbox">
              <img :src=items.ext[4].value[0].url alt="米哈游">
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wrapitem",
  data(){
    return{
      listItem:'',
      roleItem:'',
    }
  },
  methods:{
    roleDetail(item,name,Eng,index){
      this.$store.state.roleName = name
      this.$store.state.roleItem = item
      this.$store.state.roleEngName = Eng
      this.$store.state.activeIndex = index
      this.$router.replace('/roledetail')
    }
  },
  mounted(){
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=183').then((res)=>{
      // console.log(res.data.data.list)
      this.listItem=res.data.data.list
      this.$store.state.listAllItem = res.data.data.list
    })
    this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181').then((res)=>{
      // console.log(res.data.data.list)
      this.roleItem=res.data.data.list
      this.$store.state.roleAllItem = res.data.data.list
    })
  }
}
</script>
<style scoped>
.valkyries-item__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.valkyries-item__title div:first-child {
  font-size: 30px;
  color: #fff;
  transform: skew(-11deg);
  font-weight: bold;
  flex-shrink: 0;
}
.role-line {
  flex: 1;
  height: 3px;
  background: linear-gradient(to left, transparent, rgba(255, 255, 255, 0.5), transparent);
}
.valkyries-item__title div:last-child {
  font-size: 26px;
  opacity: .5;
  font-weight: 400;
  color: #fff;
  transform: skew(-11deg);
  flex-shrink: 0;
  font-family: Impact,sans-serif;
}
.roles {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.base-role-btn {
  width: 147px;
  height: 148px;
  background: url('../../assets/images/role/juesebg.png') no-repeat;
  background-size: 100% 100%;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding-top: 6px;
  padding-left: 5px;
  padding-right: 1px;
  cursor: pointer;
}
.base-role-btn:hover, .base-role-btn.active {
  background-image: url('../../assets/images/role/juesebgactive.png');
}
.base-role-btn .imgbox {
  position: relative;
}
.base-role-btn img {
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
}
.base-role-btn .imgbox::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/images/role/juesebgmini.png') no-repeat;
  background-size: 100% 100%;
}
</style>