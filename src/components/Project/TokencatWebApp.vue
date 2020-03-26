<template>
  <div>
    <div class="title">TokenCat 手机网页版(已停用)</div>
    <div class="content">
      这是基于 eos 区块链开发的 WebApp，选用 Vue 技术栈（vue-router, vuex, vue-i18n, axios ,sass），UI 选用 Vux 移动端组件库<br>
      选用 Webpack 构建工具，接口请求统一采用 RESTful API 风格，js-sdk 开发出微信登陆，微博登录<br>
      页面用 keep-alive + 路由懒加载 + 图片懒加载 + 图片压缩 + gzip压缩 + 代码压缩等手段加快响应速度，提升用户体验<br>
      基于 eos-js 开发 eos 查询交易记录，转账记录，代币充值，代币和 eos 互换等链交互
    </div>
    <div class="images">
      <img src="@/assets/tokencatwebapp_1.png" width="100%">
      <img src="@/assets/tokencatwebapp_2.png" width="100%">
      <img src="@/assets/tokencatwebapp_3.png" width="100%">
      <img src="@/assets/tokencatwebapp_4.png" width="100%">
      <img src="@/assets/tokencatwebapp_5.png" width="100%">
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
}
</style>
