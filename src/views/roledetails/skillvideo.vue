<template>
  <div class="video">
    <div class="video-info">
      <div>
        {{ roleItem.ext[roleNum-2].value }}
        <div class="base-line"></div>
      </div>
      <p>
        {{ roleItem.ext[roleNum-1].value }}
      </p></div>
    <div class="video-poster">
      <img :src=roleItem.ext[roleNum+2].value[0].url>
      <div class="video-poster-btn" @click="appear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skillvideo",
  data(){
    return{
      roleItem:this.$store.state.roleItem,
    }
  },
  methods:{
    appear(){
      this.$store.state.videoAppear=true
    }
  },
  computed:{
    roleNum(){
      return this.$store.state.currentNum
    }
  }
}
</script>

<style scoped>
.video {
  display: flex;
}
.video-info {
  flex: 1;
}
.video-info div {
  font-size: 30px;
  font-weight: bold;
  transform: skew(-11deg);
  position: relative;
  margin-bottom: 14px;
}
p {
  font-size: 18px;
  line-height: 26px;
}
.video-poster {
  position: relative;
}
.video-poster-btn {
  position: absolute;
  width: 65px;
  height: 87px;
  background: url('../../assets/images/role/video-btn.png') no-repeat;
  background-size: 100% 100%;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  cursor: pointer;
}
.video-poster-btn:hover {
  background: url('../../assets/images/role/video-btn-active.png') no-repeat;
  background-size: 100% 100%;
}
</style>