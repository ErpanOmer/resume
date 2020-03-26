<template>
  <div>
    <div class="title">幂度邮箱插件（Chrome 扩展）</div>
    <div class="content">
      这是基于 Chrome 扩展框架开发的浏览器插件。目的是隔离网页运行环境，在沙盒模式下利用区块链加密技术保证信息安全<br>
      popup 脚本选用 Vue 技术栈开发, UI 选用 Element-ui, 构建后运行在插件渲染层<br>
      设计 Web 网页和插件之间的数据通信机制，background 脚本设为事件拦截器, 实现数据交互<br>
      根据浏览器扩展开发标准，兼容 Chrome, FireFox, chromium内核浏览器，Webpack 4 多入口构建方式实现插件开发环境和自动化构建<br>
      插件作为用户私钥的保险箱，选用 AES 算法 + salt 把插件密码和私钥做一系列加密操作保证用户数据的安全性<br>
      基于 ECDH 实现邮箱登录验证方式，另加 AES 对称算法实现随机数验证和邮件内容的的加解密，保证数据的安全传输<br>
    </div>
    <div class="images">
      <img src="@/assets/extensions_1.png" width="100%">
      <img src="@/assets/extensions_3.png" width="100%">
      <img src="@/assets/extensions_4.png" width="100%">
      <img src="@/assets/extensions_2.png" width="100%">
    </div>
    <div class="link">
      <p>Chrome 商店: <a target="_blank" href="https://chrome.google.com/webstore/detail/necgjmgbdfochlhjnjedeahcncophhcm/publish-accepted?authuser=0&hl=zh-CN">https://chrome.google.com/webstore/detail/necgjmgbdfochlhjnjedeahcncophhcm/publish-accepted?authuser=0&hl=zh-CN</a></p>
      <p>FireFox 应用商店: <a target="_blank" href="https://addons.mozilla.org/zh-CN/firefox/addon/midu-hermes">https://addons.mozilla.org/zh-CN/firefox/addon/midu-hermes</a></p>
      <p>360 应用商店：<a target="_blank" href="https://ext.se.360.cn/webstore/detail/kfombllkgckhmigbafofljbcegacbddm">https://ext.se.360.cn/webstore/detail/kfombllkgckhmigbafofljbcegacbddm</a></p>
      <p>下载地址(需要手动安装)： <a target="_blank" href="https://midu-plug-in.oss-cn-shenzhen.aliyuncs.com/Midu-Hermes.zip">https://midu-plug-in.oss-cn-shenzhen.aliyuncs.com/Midu-Hermes.zip</a></p>
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-items: center;
}
</style>
