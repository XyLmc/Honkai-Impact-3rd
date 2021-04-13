<template>
<!--  整个视频页面用于判断显示与否-->
  <div v-if="videoAppear" aria-expanded="true" data-modal="video-modal" class="overlay">
<!--    点击视频外的部分关闭视频-->
    <div class="background-click" @click="disappear">
      <div class="modal-top-right"></div>
      <div role="dialog" aria-modal="true" class="modal-box modal"
           style="top: 124px; left: 50%; width: 1280px; height: auto; transform: translateX(-50%)">
        <div class="video-modal-content">
          <div class="video-close" @click="disappear"></div>
          <video id="modalVideo" :src=roleItem.ext[roleNum].value[0].url controls="controls" type="h5"
                 airplay="true" playsinline="true" controlslist="nodownload"
                 autoplay="autoplay"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      roleItem: this.$store.state.roleItem,
    }
  },
  methods: {
    disappear() {
      this.$store.state.videoAppear = false
    }
  },
  computed: {
    roleNum() {
      return this.$store.state.videoId
    },
    videoAppear() {
      return this.$store.state.videoAppear
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 1;
}

.background-click {
  width: 100%;
  min-height: 100%;
  height: auto;
}

.modal-top-right {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.overlay .modal-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
}

.video-modal-content {
  position: relative;
  width: 1280px;
  height: 720px;
  border: 1px solid #56c0f7;
  overflow: hidden;
  background: #fff;
}

.video-modal-content .video-close {
  position: absolute;
  right: -1px;
  top: -2px;
  width: 50px;
  height: 50px;
  background: url('../../assets/images/role/close.png') no-repeat;
  background-size: cover;
  cursor: pointer;
  z-index: 99;
}

.video-modal-content video {
  background: #000;
  width: 100%;
  height: 100%;
  display: block;
}

video {
  object-fit: contain;
}
</style>