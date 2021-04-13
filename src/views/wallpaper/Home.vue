<template>
  <div class="wallpapers">
    <Title></Title>
    <hot></hot>
    <title-second></title-second>
    <Paper></Paper>
  </div>
</template>

<script>
import Title from "@/views/wallpaper/title";
import hot from "@/views/wallpaper/hot";
import titleSecond from "@/views/wallpaper/title-second";
import Paper from "@/views/wallpaper/paper";
export default {
  name: "Home",
  components: {Paper, Title,hot,titleSecond}
}
</script>

<style scoped>
.wallpapers {
  background: url(../../assets/images/wallpaper/wall-bg.jpg) center top no-repeat;
  background-size: cover;
  padding: 92px 0 30px;
}
</style>