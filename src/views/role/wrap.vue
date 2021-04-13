<template>
  <div class="wrap">
    <div class="list">
      <wrapitem></wrapitem>
    </div>
  </div>
</template>

<script>
import wrapitem from "@/views/role/wrapitem";
export default {
  name: "wrap",
  components:{
    wrapitem
  }
}
</script>

<style scoped>
.wrap {
  border: 2px solid rgba(255,255,255,.1);
  border-radius: 10px;
  width: 1246px;
  margin: 0 auto;
  padding: 20px 20px 0;
}
</style>