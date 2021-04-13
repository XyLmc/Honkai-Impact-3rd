<template>
  <div class="footer" loading="lazy" id="p4" @mousewheel.prevent>
    <div class="footerListBg">
      <ul class="footerList">
        <li><img src="../assets/images/Footer/weibo.png" width="32px" height="32px"></li>
        <li><img src="../assets/images/Footer/wechat.png" width="32px" height="32px"></li>
        <li><img src="../assets/images/Footer/qq.png" width="32px" height="32px"></li>
        <li><img src="../assets/images/Footer/share.png" width="32px" height="32px"></li>
      </ul>
    </div>
    <div class="copyRight">
      <div class="copyRightLeft">
        <div class="copyRightLeftLogo">
          <div>
            <img src="../assets/images/Footer/mihoyo.png" width="119.3" height="42">
            <span></span>
            <img src="../assets/images/Footer/footerLogos.png" width="110">
          </div>
        </div>
        <div class="copyRightRight">
          <div class="copyRightRightTop">
            <a href="">用户协议</a>
            |
            <a href="">隐私政策</a>
            |
            <a href="">家长监护工程</a>
            |
            <a href="">关于我们</a>
            |
            <a href="">联系我们</a>
            |
            <a href="">加入我们</a>
          </div>
          <div class="copyRightRightCenter">
            健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。<br>
            沪公网安备31010402001113号 | 增值电信业务经营许可证：沪B2-20190555<br>
            沪ICP备19018275号-4 | 沪网文〔2019〕3168-216号 | 国新出审【2019】2978号<br>
            互联网违法不良信息举报邮箱: tousu@mihoyo.com 互联网违法不良信息举报电话: 021-34203135 （工作时间：每天10点 - 20点）<br>
            亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。<br>
            ©2012-2020 上海米哈游影铁科技有限公司版权所有
          </div>
          <div class="copyRightRightBottom">
            <a href="" v-for="Item in BottomTipsImg" :key="Item"><img :src="Item"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      BottomTipsImg: [
        require('../assets/images/Footer/icon1.png'), require('../assets/images/Footer/icon2.png'),
        require('../assets/images/Footer/icon3.png'), require('../assets/images/Footer/icon4.png'),
        require('../assets/images/Footer/icon5.png'), require('../assets/images/Footer/icon6.png'),
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 365px;
  min-width: 1600px;
  background-color: #111;
  z-index: 1000;
}

.footerListBg {
  position: relative;
  top: 0px;
  display: inline-block;
  width: 100%;
  height: 52px;
  background-color: #111111;
  border-bottom: #1a1a1a solid 2px;
}

.footer .footerList {
  display: flex;
  z-index: 2;
  list-style-type: none;
  width: 100%;
  height: 52px;
  line-height: 52px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: #1a1a1a solid 2px;
}

.footer li {
  position: relative;
  float: left;
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin-right: 34px;
  opacity: 0.4;
  cursor: pointer;
  background-size: cover;
}

.footer li:hover {
  opacity: 1;
}

.copyRight {
  position: absolute;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: black;
  box-sizing: border-box;
}

.copyRightLeft {
  position: relative;
  left: 16.4%;
  display: inline-block;
  width: 300px;
  height: 268.8px;
  margin-right: 10px;
}

.copyRightLeftLogo {
  position: absolute;
  top: 90.55px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  width: 280.4px;
  height: 87.7px;
}

.copyRightLeftLogo span {
  width: 1px;
  height: 28px;
  background: #666;
  margin-left: 25px;
  margin-right: 25px;
}

.copyRightLeftLogo div {
  display: flex;
  left: 50%;
  align-items: center;
}

.copyRightRight {
  position: relative;
  left: 120%;
  display: inline-block;
  width: 882px;
  height: 268.8px;
}

.copyRightRightTop {
  display: inline-block;
  width: 882px;
  height: 48px;
  color: white;
  font-size: 14px;
}

.copyRightRightTop a {
  color: white;
  font-size: 14px;
  text-decoration: none;
}

.copyRightRightCenter {
  display: inline-block;
  width: 882px;
  height: 140.8px;
  color: #AAAAAA;
  font-size: 14px;
  line-height: 24px;
}

.copyRightRightBottom {
  display: inline-block;
  width: 882px;
  height: 76px;
  margin-top: 10px;
}
.copyRightRightBottom a{
  margin-right: 15px;
}
</style>