<template>
  <div class="role" v-if="Object.keys(roleInfo).length!==0">
    <div class="role-wrap">
      <div v-if="bigImgDel" class="bigImg" :style="{bottom:bigImgBottom+'px'}">
        <!--        女武神大立绘图-->
        <img :src="roleBigImg[roleIndex]">
      </div>
      <div v-if="bigImgDel" class="role-info" :style="{top: roleInfoTop + 'px'}">
        <div class="role-info-title">
          <!--          女武神全名-->
          <h2 style="display: block">{{ roleName[roleIndex] }}</h2>
          <!--          女武神所属角色卡-->
          <p>角色卡：{{ roleInfo[roleIndex][0].value }}</p>
        </div>
        <div class="role-info-weapon">
          <div>
            <!--            女武神信息-->
            <div>姓名：{{ roleName[roleIndex] }}</div>
            <div>装甲：{{ roleInfo[roleIndex][0].value }}</div>
            <div>作战方式：{{ roleInfo[roleIndex][1].value }}</div>
          </div>
          <div class="weapon-video">
            <!--            女武神PV封面-->
            <img :src="roleInfo[roleIndex][36].value[0].url">
            <!--            女武神pv播放按钮-->
            <div class="weapon-video-btn" @click="pvAppear"></div>
          </div>
        </div>
        <div class="role-info-intro">
          <div>
            <div class="title">
              <div class="line"></div>
              <span>角色介绍</span>
              <span>Role Introduction</span>
            </div>
            <!--            女武神介绍-->
            <p>{{ roleInfo[roleIndex][2].value }}</p>
          </div>
        </div>
      </div>
      <div class="role-action">
        <div class="role-action-btns">
          <div class="role-action-btn" :class="{'btn-selected': index==roleIndex}" v-for="(item,index) in roleInfo"
               :key="index" @click="RoleChange(index)">
            <div class="imgbox">
              <img :src="item[4].value[0].url">
            </div>
            <div class="name">
              {{ item[0].value }}
            </div>
          </div>
        </div>
        <div class="role-action-more">
          <div class="more-btn" @click="RoleJump">
            查看全部女武神
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_Role",
  data() {
    return {
      bigImgBottom: -1000,
      roleInfoTop: -600,
      bigImgDel: true,
      //用于存放角色信息
      roleInfo: [],
      //展示的女武神信息是哪组,默认为0
      roleIndex: 0,
      //处理后的女武神全名
      roleName: [],
      //女武神大立绘图路径
      roleBigImg: [],
    }
  },
  methods: {
    // 获取获取前三组角色的信息
    getRoleInfo() {
      return this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=182')
    },
    // 获取所有的角色信息 用于去判断角色的名字
    getAllRoleInfo() {
      return this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=183')
    },
    RoleChange(index) {
      if (index != this.roleIndex) {
        this.roleIndex = index
        this.$store.state.homeVideo = this.roleInfo[index][37].value[0].url
        //让大人物图从下往上出现，信息图从上往下出现
        //这里设置true会先让人物先下去再上来，而我们的效果是让人物直接从下面出来、
        this.bigImgDel = false
        //女武神立绘图完全被下面遮住的像素
        this.bigImgBottom = -1000
        //女武神信息被上面遮住的像素
        this.roleInfoTop = -600

        //延迟显示代码
        setTimeout(() => {
          this.bigImgDel = true
        }, 100)
        //延迟出现动画
        setTimeout(() => {
          this.bigImgBottom = -4
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
      this.$router.replace("/role")
    }
  },
  mounted() {
    let arrName = []
    //这里使两条请求同步执行，数据即可按顺序执行，不会出现方法未执行完的情况    多用！！！！
    this.axios.all([this.getRoleInfo(), this.getAllRoleInfo()]).then(this.axios.spread((first, second) => {
      for (let i = 0; i < 3; i++) {
        // 获取接口前三组的角色信息
        this.roleInfo.push(first.data.data.list[i].ext)
        this.roleBigImg.push(first.data.data.list[i].ext[3].value[0].url)
        // 获取角色的类型 (官网 +“女武神角色缩写名”) 用于下面判断角色的全名
        arrName.push(first.data.data.list[i].type)
      }
        let index = second.data.data.list.length //获取接口数组的长度 （在这里提前获取防止网络问题的干扰）
        for (let i = 0; i < index; i++) {
          //用判断前面获取的角色类型数组里有没有出现和所有角色信息数组里一致的角色类型，有就将同样位于该数组下的角色名字放进数组里
          if (arrName.indexOf(second.data.data.list[i].ext[2].value) > -1) {
            //indexOf就是用于获取数组下标的
            let j = arrName.indexOf(second.data.data.list[i].ext[2].value)
            arrName[j] = second.data.data.list[i].ext[0].value
          }
        }
        this.roleName =arrName
    }))

    // 下面的请求方法时异步执行的，但是由于异步执行，我下面的方法跟上面的方法同时进行，由于网络问题，可能下面的方法执行完之后了，上面的方法还未执行完，所以会出现获取不到数据的情况

    // this.axios.get('/api/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=182').then((res) => {
    //   for (let i = 0; i < 3; i++) {
    //     // 获取接口前三组的角色信息
    //     this.roleInfo.push(res.data.data.list[i].ext)
    //     this.roleBigImg.push(res.data.data.list[i].ext[3].value[0].url)
    //     // 获取角色的类型 (官网 +“女武神角色缩写名”) 用于下面判断角色的全名
    //     arrName.push(res.data.data.list[i].type)
    //   }
    // })
    // 获取所有的角色信息 用于去判断角色的名字
    // this.axios.get('https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=183').then((res) => {
    //   let index = res.data.data.list.length //获取接口数组的长度 （在这里提前获取防止网络问题的干扰）
    //   for (let i = 0; i < index; i++) {
    //     //用判断前面获取的角色类型数组里有没有出现和所有角色信息数组里一致的角色类型，有就将同样位于该数组下的角色名字放进数组里
    //     if (arrName.indexOf(res.data.data.list[i].ext[2].value) > -1) {
    //       console.log("123123")
    //       this.roleName.push(res.data.data.list[i].ext[0].value)
    //       console.log("Test" + res.data.data.list[i].ext[0].value)
    //     }
    //   }
    // })
    //为了让角色图还有信息一开始就显示
    this.bigImgBottom = -4
    this.roleInfoTop = 0
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none
}

.role {
  height: 975px;
  background: url("../../assets/images/BengHuai/roleBg.jpg") center center no-repeat;
  overflow: hidden;
}

.role-wrap {
  width: 1246px;
  margin: 0 auto 16px;
  position: relative;
  /*计算函数calc() 里面的百分比参数就是看父组件定义的*/
  height: calc(100% - 16px);
}

.bigImg {
  position: absolute;
  bottom: 0;
  width: 960px;
  left: -130px;
  transition: all .5s;
}

.bigImg img {
  width: 100%;
}

.role-info {
  position: absolute;
  width: 660px;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: white;
  padding-top: 140px;
  box-sizing: border-box;
  transition: all .5s;
}

.role-info-title, .role-info-weapon, .role-info-intro {
  width: 460px;
}

.role-info-title {
  font-size: 40px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 30px;
  transform: skew(-11deg);
  flex-wrap: nowrap;
  width: 510px;
}

.role-info-title h2 {
  margin-bottom: 10px;
}

.role-info-title p {
  font-size: 30px;
  color: #62eaf5;
}

.role-info-weapon {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
  line-height: 1.4;
}

.role-info-weapon > div:first-child {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate3d(0, -50%, 0);
}

.role-info-weapon > div:first-child div {
  padding: 10px 0;
}

.weapon-video {
  position: relative;
  height: 135px;
}

.weapon-video img {
  height: 100%;
}

.weapon-video-btn {
  position: absolute;
  width: 65px;
  height: 87px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background: url("../../assets/images/BengHuai/video-btn.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}

.role-info-intro {
  background-color: rgba(255, 255, 255, .1);
  border-radius: 10px;
  padding: 8px;
  margin-bottom: 15px;
}

.role-info-intro > div {
  background: rgba(0, 36, 107, .6);
  border-radius: 10px;
  padding: 20px;
}

.role-info-intro .title {
  font-size: 30px;
  color: #62eaf5;
  transform: skew(-11deg);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  font-weight: bold;
}

.line {
  position: absolute;
  bottom: -5px;
  width: 385px;
  height: 1px;
  background-color: rgba(98, 234, 245, .2);
  left: 12px;
}

.line::before, .line::after {
  content: "";
  position: absolute;
  top: 0px;
  width: 5px;
  height: 1px;
  background-color: #62eaf5;
}

.line::before {
  left: -7px;
}

.line::after {
  right: -7px;
}

.role-info-intro .title span:last-child {
  color: rgba(255, 255, 255, .3);
  font-weight: 300;
  font-size: 16px;
}

.role-info-intro p {
  font-size: 16px;
  line-height: 30px;
}

.role-action {
  position: absolute;
  right: 0px;
  bottom: 135px;
  z-index: 9;
}

.role-action-btns {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.role-action-btn {
  width: 147px;
  height: 148px;
  font-size: 14px;
  font-weight: bold;
  background: url("../../assets/images/BengHuai/RoleWhiteBoard.png") no-repeat;
  background-size: 100% 100%;
  text-align: right;
  color: black;
  padding: 6px 1px 0px 5px;
  cursor: pointer;
  box-sizing: border-box;
}

.btn-selected, .role-action-btn:hover {
  background: url("../../assets/images/BengHuai/RoleYellowBoard.png") no-repeat;
}

.role-action-btn .imgbox {
  position: relative;
}

.role-action-btn .imgbox img {
  display: block;
  width: 100%;
  position: relative;
  z-index: 1;
}

.role-action-btn .name {
  transform: skew(-11deg);
  padding-right: 40px;
  box-sizing: border-box;
}


.role-action-more{
  position: relative;
}
.more-btn{
  position: absolute;
  right: 0px;
  width: 230px;
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  background: #fedf4c;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
}
.more-btn:hover{
  background: white;
}
</style>