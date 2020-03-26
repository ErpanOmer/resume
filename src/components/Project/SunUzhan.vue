<template>
  <div>
    <div class="title">U栈联盟</div>
    <div class="content">
      这是基于 Vue 技术栈（vue-router, vuex, vue-i18n, axios ,sass）开发的商城系统，UI 选用 Vux 移动端组件库<br>
      选用 Webpack 构建工具，接口请求统一采用 RESTful API 风格，微信 js-sdk 开发出微信登陆，微信支付，腾讯地图，二维码扫码等功能<br>
      页面用 keep-alive + 路由懒加载 + 图片懒加载 + 图片压缩 + gzip压缩等手段加快响应速度，提升用户体验
    </div>
    <div class="images">
      <img src="@/assets/uzhan_1.png" width="100%">
      <img src="@/assets/uzhan_2.png" width="100%">
      <img src="@/assets/uzhan_3.png" width="100%">
      <img src="@/assets/uzhan_4.png" width="100%">
      <img src="@/assets/uzhan_5.png" width="100%">
    </div>
    <div class="link">
      访问地址：<a target="_blank" href="http://u.a9sky.cn">http://u.a9sky.cn</a>
    </div>
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
