<template>
  <div class="Container">
    <Header></Header>
    <Role></Role>
    <Contact></Contact>
    <home-video></home-video>
  </div>
</template>

<script>
import Header from "./HOME_Header";
import Role from "./HOME_Role";
import Contact from "./HOME_Contact"
import HomeVideo from "./homeVideo";

export default {
  name: "HOME",
  components: {HomeVideo, Header, Role, Contact}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none
}

.Container {
  position: relative;
  margin: 0 auto;
  min-width: 1900px;
  max-width: 1920px;
  overflow: hidden
}
</style>