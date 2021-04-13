<template>
  <div class="role-detail-bd">
    <div class="role-detail-bd__title">
      {{ this.$store.state.roleName }}
    </div>
    <div class="role-detail-bd__card">
      <div class="wrap">
        <div class="name">
          {{ roleItem.ext[0].value }}
        </div>
        <div class="title">
          背景资料
        </div>
        <div class="info-item">
          姓名：{{ this.$store.state.roleName }}
        </div>
        <div class="info-item">
          生日：{{ roleItem.ext[43].value }}
        </div>
        <div class="info-item">
          装甲：{{ roleItem.ext[0].value }}
        </div>
        <div class="info-item">
          作战方式：{{ roleItem.ext[1].value }}
        </div>
        <div class="title">
          角色招式
        </div>
        <roleskill></roleskill>
        <skillvideo></skillvideo>
      </div>
    </div>
  </div>
</template>

<script>
import roleskill from "@/views/roledetails/roleskill";
import skillvideo from "@/views/roledetails/skillvideo";
export default {
  name: "roledetail",
  components:{roleskill,skillvideo},
  data(){
    return{
      roleItem:this.$store.state.roleItem
    }
  }
}
</script>

<style scoped>
.role-detail-bd {
  position: absolute;
  right: 30px;
  top: 60px;
  z-index: 9;
}
.role-detail-bd__title {
  color: #fff;
  font-size: 60px;
  font-weight: bold;
  -webkit-transform: skew(-11deg);
  -ms-transform: skew(-11deg);
  transform: skew(-11deg);
  text-align: right;
  margin-bottom: 20px;
}
.role-detail-bd__card {
  border: 1px solid rgba(255,255,255,.5);
  border-radius: 10px;
  padding: 9px;
  color: #fff;
}
.role-detail-bd__card .wrap {
  background: rgba(25,125,164,.42);
  border-radius: 10px;
  padding: 20px 30px;
  width: 510px;
}
.role-detail-bd__card .name {
  font-size: 36px;
  font-weight: bold;
  -webkit-transform: skew(-11deg);
  -ms-transform: skew(-11deg);
  transform: skew(-11deg);
  padding-left: 10px;
}
.role-detail-bd__card .title {
  font-size: 20px;
  font-weight: bold;
  width: 452px;
  height: 44px;
  line-height: 44px;
  padding-left: 20px;
  background: url('../../assets/images/role/roleskillbg.png') no-repeat;
  margin: 10px 0 20px;
}
.role-detail-bd__card .info-item {
  font-size: 18px;
  line-height: 40px;
  font-weight: 400;
  padding-left: 20px;
}
.role-detail-bd__card .title {
  font-size: 20px;
  font-weight: bold;
  width: 452px;
  height: 44px;
  line-height: 44px;
  padding-left: 20px;
  background: url('../../assets/images/role/roleskillbg.png') no-repeat;
  margin: 10px 0 20px;
}
</style>