<template>
  <div class="valkyries-detail-action">
    <div class="valkyries-detail-action__title"><span>
            {{ EnglishName }}
          </span></div>
    <div class="valkyries-detail-action__btns">
      <div v-for="(item,index) in roleAllItem" :key="index">
        <div class="base-role-btn" @click="roleDetail(item,item.ext[0].value,item.ext[1].value,index)" :class="{'base-role-btn-active':index==activeIndex}" v-if="item.type==roleItem.type">
          <div class="imgbox">
            <img :src=item.ext[4].value[0].url alt="米哈游">
          </div>
          <div class="name">
            {{ item.ext[0].value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rolelist",
  data(){
    return{
      roleItem:this.$store.state.roleItem,
      roleAllItem: this.$store.state.roleAllItem,
      EnglishName:this.$store.state.roleEngName,
      activeIndex: this.$store.state.activeIndex
    }
  },
  methods:{
    roleDetail(item,name,Eng,index){
      this.$store.state.roleName = name
      this.$store.state.roleItem = item
      this.$store.state.roleEngName = Eng
      this.$store.state.activeIndex = index
      this.$router.push('/role')
      setTimeout(()=>{
        this.$router.push('/roledetail')
      })
      document.documentElement.scrollTop = 0
    }
  },
  mounted() {
    console.log(this.roleItem)
  }
}
</script>

<style scoped>
.valkyries-detail-action {
  position: absolute;
  bottom: 0;
  right: 30px;
  z-index: 10;
}
.valkyries-detail-action__title {
  color: rgba(255,255,255,.5);
  transform: skew(-11deg);
  font-size: 26px;
  padding-right: 60px;
  text-align: right;
}
.valkyries-detail-action__title span {
  position: relative;
}
.valkyries-detail-action__title span:before {
  content: "";
  position: absolute;
  left: -820px;
  width: 800px;
  height: 3px;
  top: 50%;
  margin-top: -1px;
  background: url(../../assets/images/role/line.png) left top no-repeat;
}
.valkyries-detail-action__btns {
  padding: 10px 0 20px;
  display: flex;
  justify-content: flex-end;
}
.base-role-btn {
  width: 147px;
  height: 148px;
  background: url(../../assets/images/role/juesebg.png) no-repeat;
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
.base-role-btn .imgbox {
  position: relative;
}
.base-role-btn .name {
  padding-right: 40px;
  -webkit-transform: skew(-11deg);
  -ms-transform: skew(-11deg);
  transform: skew(-11deg);
  line-height: 22px;
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
  background: url(../../assets/images/role/juesebgmini.png) no-repeat;
  background-size: 100% 100%;
}
.base-role-btn:hover, .base-role-btn-active {
  background-image: url(../../assets/images/role/juesebgactive.png);
}
</style>