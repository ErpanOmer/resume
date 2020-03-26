<template>
  <div>
    <div class="title">TokenCat 官网(已停用)</div>
    <div class="content">
      这是公司官网，选用 Vue 技术栈（vue-router, vuex, vue-i18n, axios ,sass），UI 选用 Vux 移动端组件库<br>
      选用 Webpack 构建工具，页面采用响应式设计，移动版嵌入到 native webview<br>
    </div>
    <div class="images">
      <img src="@/assets/tokencatmain_1.png" width="100%">
      <img src="@/assets/tokencatmain_2.png" width="100%">
      <img src="@/assets/tokencatmain_3.png" width="100%">
    </div>
    <div class="link"></div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
.images {
  display:grid;
  grid-template-columns: 2.525fr 1fr 1fr;
  grid-gap: 20px;
}
</style>
