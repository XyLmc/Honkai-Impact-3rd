<template>
  <div class="skills">
    <div class="skill"
         v-for="(item,index) in roleNum"
         :key="index"
         :class="{active:isActive==index}"
         @click="change(index,item)">
      <img :src=roleItem.ext[item].value[0].url>
      <img :src=roleItem.ext[item+1].value[0].url>
    </div>
  </div>
</template>

<script>
export default {
  name: "roleskill",
  data(){
    return{
      roleItem:this.$store.state.roleItem,
      isShow:true,
      isActive:0,
      roleNum:this.$store.state.roleSkillNum
    }
  },
  created() {
    if(this.roleItem.ext[32].value.length!=0){
      this.roleNum = [8,14,20,26,32]
    }
  },
  methods:{
    change(value,num){
      this.isActive = value
      this.$store.state.currentNum = num
      this.$store.state.videoId = num+3
    }
  },
}
</script>

<style scoped>
.skills {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 40px;
}
.skill{
  cursor: pointer;
}
.skill img:first-child{
  display: block;
}
.skill img:last-child{
  display: none;
}
.active img:first-child{
  display: none;
}
.active img:last-child{
  display: block;
}
</style>