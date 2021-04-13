<template>
  <div class="Nav">
    <div class="Nav-Wrap">
      <div class="NavItems" style="margin-right: 55px" v-for="(Show, index) in NavLeftItem.Top" :key=index
           :class="{NavItems_Select:NavSelect==index}" @click="NavLeftLink(index)">
        <div class="NavLeftItem-Top">{{ Show }}</div>
        <div class="NavItem-Bottom">{{ NavLeftItem.Bottom[index] }}</div>
        <img src="../assets/images/BengHuai/NavGang.png" class="Gang">
      </div>
      <div class="NavItems" style="left: 200px; margin-right: 35px" v-for="(Show, index) in NavRightItem.Top" :key=Show
           @click="NavRightLink(index)">
        <div class="NavRightItem-Top">{{ Show }}</div>
        <div class="NavItem-Bottom">{{ NavRightItem.Bottom[index] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      NavLeftItem: {
        Top: ['官网首页', '作战咨询', '女武神', '动画壁纸', '周边商城', '官方社区'],
        Bottom: ['HOME', 'NEWS', 'VALKYRIES', 'WALLPAPERS', 'MERCH', 'FORUM']
      },
      NavRightItem: {Top: ['成长关爱系统', '米哈游通行证'], Bottom: ['PROGRESS', 'miHoYo PASS']},
    }
  },
  computed: {
    NavSelect() {
      return this.$store.state.NavSelect
    }
  },
  methods: {
    NavLeftLink(index) {
      if (index != this.NavSelect) {
        this.$store.commit('ChangeNav', index)
        document.documentElement.scrollTop = 0
        switch (index) {
          case 0: {
            this.$router.push("/home")
            break
          }
          case 1: {
            this.$router.push("/news")
            break
          }
          case 2: {
            this.$router.push("/role")
            break
          }
          case 3: {
            this.$router.push("/wallpaper")
            break
          }
          case 4: {
            window.open('https://mihoyo.tmall.com/')
            break
          }
          case 5: {
            window.open('https://bbs.mihoyo.com/bh3/')
            break
          }
          default: {
            this.$router.push("/home")
            break
          }
        }
      }
    },
    NavRightLink(index) {
      switch (index) {
        case 0: {
          window.open("https://jiazhang.mihoyo.com/#/")
          break
        }
        default: {
          window.open("https://user.mihoyo.com/#/login/captcha?cb_route=%2Faccount%2Fhome")
          break
        }
      }
    }
  }
}
</script>

<style>

.Nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 92px;
  background-color: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid rgba(64, 206, 255, 0.84);
  box-shadow: 0 2px 10px 0 rgba(1, 1, 1, 0.3);
  z-index: 99999;
  min-width: 1240px;
}

.Nav-Wrap {
  margin: 0 auto;
  width: 1240px;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  padding-left: 55px;
}

.NavItems {
  position: relative;
  text-align: center;
  display: block;
  line-height: 1.65;
  color: #62eaf5;
  font-weight: bold;
}

.NavItems:hover {
  color: white;
  cursor: pointer;
}

.NavItems_Select {
  color: white;
}

.NavItem-Bottom {
  font-size: 12px;
  opacity: 0.3;
}

.NavLeftItem-Top {
  font-size: 19px;
  font-style: italic;
}

.NavRightItem-Top {
  font-size: 14px;
}

.Gang {
  position: absolute;
  top: 0;
  left: 85px;
  width: 30px;
}
</style>