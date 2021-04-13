<template>
  <div class="detail">
    <div class="detail-wrap">
      <back></back>
      <div>
        <roleimg></roleimg>
        <roledetail></roledetail>
        <rolelist></rolelist>
      </div>
    </div>
    <shipin></shipin>
  </div>
</template>

<script>
import Back from "@/views/roledetails/back";
import Roleimg from "@/views/roledetails/roleimg";
import roledetail from "@/views/roledetails/roledetail";
import shipin from "@/views/roledetails/video";
import Rolelist from "@/views/roledetails/rolelist";
export default {
  name: "Home",
  components: {Rolelist, Roleimg, Back, roledetail,shipin},
  mounted() {
    document.documentElement.scrollTop = 0
  }
}
</script>

<style scoped>
.detail {
  height: 1175px;
  background: url("../../assets/images/role/role-detail-bg.jpg") center top no-repeat;
  background-size: cover;
  padding-top: 92px;
}

.detail-wrap {
  width: 1246px;
  margin: 0 auto;
  height: 100%;
  position: relative;
}
</style>