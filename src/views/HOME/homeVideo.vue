<template>
  <div class="bg" v-if="videoAppear">
    <div class="video-border">
      <div class="video-close" @click="pvDisappear"></div>
      <video class="pv" :src="homeVideo" autoplay controls></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeVideo",
  methods:{
    pvDisappear(){
      this.$store.state.pvAppear=false
    }
  },
  computed:{
    videoAppear(){
      return this.$store.state.pvAppear
    },
    homeVideo(){
      return this.$store.state.homeVideo
    }
  }
}
</script>

<style scoped>
.bg{
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width:100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,0.5);
}

.video-border{
  position: relative;
  width: 1280px;
  height: 720px;
  border: 1px solid skyblue;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%,-50%,0);
}
.pv{
  width: 100%;
  height: 100%;
  border: none;
}

.video-close{
  position: absolute;
  right: -2px;
  top: -1px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  z-index: 99;
  background: url("../../assets/images/BengHuai/video-close.png") no-repeat;
}
</style>