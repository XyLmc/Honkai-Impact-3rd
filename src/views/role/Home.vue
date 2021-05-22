<template>
  <div class="bg">
    <Head></Head>
    <wrap></wrap>
  </div>
</template>

<script>
import Head from "@/views/role/Head";
import wrap from "@/views/role/wrap";
export default {
  name: "Home.vue",
  components:{
    Head,wrap
  },
  created() {
    this.$store.state.NavSelect = 2
  }
}
</script>

<style scoped>
.bg{
  background: url("../../assets/images/role/rolebg.jpg") center top no-repeat;
  background-size: cover;
  background-attachment: fixed;
  min-height: 1200px;
  padding: 92px 0;
}
</style>