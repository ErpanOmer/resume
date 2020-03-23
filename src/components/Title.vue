<template>
  <div class="title">
    <div class="text" v-text="title"></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  padding: 25px 0 15px;
  .text {
    background-color: #404160;
    color: #fff;
    height: 30px;
    width: 200px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
}
</style>
