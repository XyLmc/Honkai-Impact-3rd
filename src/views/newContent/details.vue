<template>
  <div class="details" id="details" v-html="detailsContent">
  </div>
</template>

<script>
export default {
  name: "details",
  props:[
    'detailsContent'
  ],
}
</script>

<style scoped>
.details {
  font-size: 16px;
  color: #dcdcdc;
  line-height: 1.5;
}
</style>