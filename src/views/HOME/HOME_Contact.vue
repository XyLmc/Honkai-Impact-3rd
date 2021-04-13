<template>
  <div class="Home_Contact_Main">
    <div class="Home_Contact_Wrap">
      <div class="Home_Contact_Content">
        <div class="social">
          <a class="social-item" v-for="(Item, index) in ListItem" :key="index">
            <div class="social-div">
              <img :src=Item.imgSrc alt="米哈游"/>
            </div>
            <div>{{ Item.name }}</div>
          </a>
        </div>
        <div class="contract-info">
          <div class="contract-list">
            <div class="title">联系我们</div>
            <div class="contract-list-item" v-for="(Item,index) in Contract_Call" :key="index">
              {{ Item }}
            </div>
          </div>
          <div class="contract-list qqgroup">
            <div class="title">官方QQ群</div>
            <div class="half-item">
              <div class="contract-list-item" v-for="(Item,index) in Contract_Number" :key="index">
                {{ Item.Text }}<span>{{ Item.Number }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/images/BengHuai/ContactRole.png"
         style="z-index: 999; position: absolute; bottom: -20px; left: 1080px"/>
  </div>
</template>

<script>
export default {
  name: "Home_Contact",
  data() {
    return {
      ListItem: [
        {name: '官方微博', imgSrc: require('../../assets/images/BengHuai/Icon1.png')},
        {name: '官方微信', imgSrc: require('../../assets/images/BengHuai/Icon2.png')},
        {name: '官服QQ', imgSrc: require('../../assets/images/BengHuai/Icon3.png')},
        {name: '官方社区', imgSrc: require('../../assets/images/BengHuai/Icon4.png')},
      ],
      Contract_Call: [
        '前台电话：021-60331122（工作时间：工作日10点 - 18点）', '游戏客服：021-34203305（工作时间：每天10点 - 20点)',
        '投诉电话：021-34203135（工作时间：每天10点 - 20点）', '投诉邮箱：tousu@mihoyo.com', '合作洽谈：bh3_contact@mihoyo.com'
      ],
      Contract_Number: [
        {Text: '崩坏3官方①群：', Number: 579074091}, {Text: '崩坏3官方③群：', Number: 322530480},
        {Text: '崩坏3官方⑦群：', Number: 486658559}, {Text: '崩坏3官方⑧群：', Number: 419960123},
        {Text: '崩坏3官方⑩群：', Number: 586442980}, {Text: '崩坏3官方⑫群：', Number: 471316989},
        {Text: '崩坏3桌面服官方②群：', Number: 872308494}, {Text: '崩坏3桌面服官方③群：', Number: 724886324}
      ]
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  user-select: none
}

.Home_Contact_Main {
  position: relative;
  height: 638px;
  background: url("../../assets/images/BengHuai/BodyImage3.jpg") top/cover no-repeat
}

.Home_Contact_Wrap {
  position: relative;
  width: 1246px;
  height: 425px;
  border: 2px solid #269ad1;
  border-radius: 4px;
  margin: 0 auto;
  top: 160px;
  padding: 6px
}

.Home_Contact_Content {
  background: #2e448f;
  height: 100%;
  padding: 40px 20px 0
}

.social {
  display: flex;
  margin-bottom: 15px;
  box-sizing: border-box
}

.social-item {
  margin-right: 25px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  position: relative
}

.social-item .social-div {
  background: #00a5e2;
  border-radius: 8px;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center
}

.social-item .social-div:hover {
  background: #33c8ff
}

.contract-info {
  display: flex
}

.contract-list {
  color: #fff;
  width: 430px;
  font-size: 12px
}

.contract-list span {
  text-decoration: underline
}

.contract-list .title {
  font-size: 20px;
  transform: skew(-15deg);
  font-weight: bold;
  margin-bottom: 15px;
  position: relative
}

.title::after {
  content: "";
  position: absolute;
  background: #2070be;
  height: 2px;
  width: 290px;
  left: 115px;
  top: 50%
}

.contract-list-item {
  display: flex;
  line-height: 26px
}

.contract-list-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  display: block
}

.half-item {
  display: flex;
  flex-wrap: wrap
}
</style>