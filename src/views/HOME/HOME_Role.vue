<template>
  <div class="home_Role_Main">
    <!--    中间部分左侧的大角色图-->
    <div v-if="bigImgDel" class="home_Role_BigImg" :style="{bottom:bigImgBottom+'px'}">
      <img v-for="(Item,index) in RoleState" :key="index" :src="Item[3].value[0].url" width="100%"
           v-show="RoleSelect==index">
    </div>
    <!--    中间部分右侧的角色信息-->
    <div v-if="bigImgDel" class="roleInfo" :style="{top:roleInfoTop+'px'}">
<!--      首页角色信息的标题部分-->
      <div class="roleInfo-title">
        <h2 style="position: absolute; top: 140px; right: 0px; transform: skew(-11deg); font-size: 60px; font-weight: bold">
          {{ RoleName[RoleSelect] }}</h2>
        <p style="position: absolute; top: 230px; right: 0px; transform: skew(-11deg); font-size: 30px; font-weight: bold; color: #62eaf5">
          角色卡：{{ RoleState[RoleSelect][0].value }}</p>
      </div>
<!--      首页角色信息的详细介绍部分-->
      <div class="roleInfo-Weapon">
        <div>
          <div>姓名: {{ RoleName[RoleSelect] }}</div>
          <div>装甲: {{ RoleState[RoleSelect][0].value }}</div>
          <div>作战方式: {{ RoleState[RoleSelect][1].value }}</div>
        </div>
      <!--      中间部分的小视频区域-->
      <div class="roleInfo_Video">
        <img :src="RoleState[RoleSelect][36].value[0].url">
        <div class="weapon-video-btn" @click="pvAppear"></div>
      </div>
    </div>
      首页角色
      <div class="roleInfo_Intro">
        <div class="roleInfo_Intro_Div">
          <div class="roleInfo_Intro_Div_Title">
            <span style="position: absolute; left: 0px; top: -6px">角色介绍</span>
            <span
                style="color: rgba(255, 255, 255, 0.3); font-weight: 300; font-size: 16px; position: absolute; top: 12px; right: 0px">Role Introduction</span>
            <span
                style="width: 5px; height: 1px; position: absolute; background: #62eaf5; position: absolute; bottom: 0px; left: 3px"></span>
            <span
                style="width: 382px; height: 1px; position: absolute; background: rgba(98, 234, 245, 0.2); position: absolute; bottom: 0px; left: 10.5px"></span>
            <span
                style="width: 5px; height: 1px; position: absolute; background: #62eaf5; position: absolute; bottom: 0px; right: 0px;margin-bottom: 15px"></span>
          </div>
          <p style="position: absolute; left: 22px; top: 86px;margin-bottom: 15px">{{
              RoleState[RoleSelect][2].value
            }}</p>
        </div>
      </div>
    </div>
    <div class="home_Role_Action">
      <div class="home_Role_Action_Btns">
        <div class="home_Role_Action_Btn" v-for="(Item, index) in RoleState" :key="index" @click="RoleChange(index)"
             :class="{RoleBtn_Select:RoleSelect==index}">
          <div class="Base_Role_Action_Btn">
            <img :src="Item[4].value[0].url" style="width: 100%">
            <div style="padding-right: 40px; margin-top: -5px; transform: skew(-11deg); line-height: 22px">
              {{ Item[0].value }}
            </div>
          </div>
        </div>
      </div>
      <div class="home_Role_Action_More" @click="RoleJump">
        <span>查看全部女武神</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_Role",
  data() {
    return {
      RoleSmallImg: [require('../../assets/images/BengHuai/RoleSmall1.png'), require('../../assets/images/BengHuai/RoleSmall2.png'), require('../../assets/images/BengHuai/RoleSmall3.png')],
      RoleSelect: 0,
      RoleName: ['布诺尼亚·扎伊切克', '幽兰黛尔', '萝莎莉娅·阿琳'],
      RoleState: [],
      bigImgBottom: -1000,
      roleInfoTop: -600,
      bigImgDel: true
    }
  },
  created() {
    this.axios.get('/api/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=182').then((res) => {
      for (let i = 0; i < 3; i++) {
        this.RoleState.push(res.data.data.list[i].ext)
      }
    })
    //为了让角色图还有信息一开始就显示
    this.bigImgBottom = 12
    this.roleInfoTop = 0
  },
  methods: {
    RoleChange(index) {
      if (index != this.RoleSelect) {
        this.RoleSelect = index
        console.log(this.RoleState)
        this.$store.state.homeVideo = this.RoleState[index][37].value[0].url
        //让大人物图从下往上出现，信息图从上往下出现
        //这里设置true会先让人物先下去再上来，而我们的效果是让人物直接从下面出来、
        this.bigImgDel = false
        //大人物图完全被下面遮住的像素
        this.bigImgBottom = -1000
        //人物信息图被上面遮住的像素
        this.roleInfoTop = -600

        //延迟显示代码
        setTimeout(() => {
          this.bigImgDel = true
        }, 100)
        //延迟出现动画
        setTimeout(() => {
          this.bigImgBottom = 12
          this.roleInfoTop = 0
        }, 200)
      }
    },
    //让视频显示
    pvAppear() {
      this.$store.state.pvAppear = true
    },
    //跳转到角色页面
    RoleJump() {
      this.$store.commit('ChangeNav', 2)
      this.$router.push("/role")
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none
}

.home_Role_Main {
  position: relative;
  height: 975px;
  background: url('../../assets/images/BengHuai/BodyImage2.jpg') top/cover no-repeat;
  overflow: hidden;
}

.roleInfo {
  position: absolute;
  width: 660px;
  right: 18%;
  color: #fff;
  transition: all .5s;
  height: 615px
}

.roleInfo_Weapon {
  position: absolute;
  width: 460px;
  height: 135px;
  right: 0px;
  top: 295px
}

.roleInfo_Intro {
  position: absolute;
  right: 0px;
  top: 450px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  width: 460px;
  padding: 8px;
  _height: 146px;
  min-height: 146px;
}

.roleInfo_Intro_Div {
  position: absolute;
  left: 8px;
  top: 8px;
  background: rgba(0, 36, 107, 0.6);
  border-radius: 10px;
  width: 444px;
  _height: 130px;
  min-height: 130px;
  margin-bottom: 15px;
  padding: 20px;
}

.roleInfo_Intro_Div_Title {
  position: absolute;
  font-size: 30px;
  color: #62eaf5;
  font-weight: bold;
  transform: skew(-11deg);
  width: 400px;
  height: 38px;
  top: 28px;
  left: 22px
}

.roleInfo_Video {
  position: absolute;
  height: 135px;
  right: 0px;
  top: 295px;
}

.roleInfo_Video video {
  position: absolute;
  width: 248px;
  height: 125px;
  top: 5px;
  left: -4px
}

.weapon-video-btn {
  position: absolute;
  width: 65px;
  height: 87px;
  background: url('../../assets/images/BengHuai/video-btn.png') no-repeat;
  background-size: 100% 100%;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  cursor: pointer;
}

.weapon-video-btn:hover {
  background: url("../../assets/images/BengHuai/video-btn-on.png") no-repeat;
  background-size: 100% 100%;
}


.home_Role_Action {
  position: absolute;
  width: 441px;
  height: 218px;
  right: 18%;
  top: 660px
}

.home_Role_Action_Btns {
  width: 441px;
  height: 148px;
  margin-bottom: 20px;
  display: flex
}

.home_Role_Action_Btn {
  width: 147px;
  height: 148px;
  cursor: pointer;
  background: url('../../assets/images/BengHuai/RoleWhiteBoard.png') no-repeat
}

.home_Role_Action_Btn:hover {
  background: url('../../assets/images/BengHuai/RoleYellowBoard.png') no-repeat
}

.Base_Role_Action_Btn {
  width: 147px;
  height: 148px;
  background-size: 100% 100%;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #000;
  padding-top: 6px;
  padding-left: 5px;
  padding-right: 1px
}

.home_Role_Action_More {
  text-align: right
}

.home_Role_Action_More span {
  background: #fedf4c;
  font-weight: bold;
  font-size: 20px;
  border-radius: 4px;
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 230px;
  color: #000;
  cursor: pointer;
  display: inline-block
}

.home_Role_Action_More span:hover {
  background: #ffffff
}

.home_Role_BigImg {
  position: absolute;
  left: 10%;
  transition: all .5s;
  width: 960px;
}

.RoleBtn_Select {
  background: url('../../assets/images/BengHuai/RoleYellowBoard.png') no-repeat
}
</style>