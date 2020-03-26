<template>
  <div>
    <div class="title">幂度邮箱（Windows,  Mac）</div>
    <div class="content">
      这是基于 Electron 开发的桌面应用程序, 采用 Vue CLI 3 构建方式设计成多页面架构，UI 选用 Element-ui 组件库，构建后运行在渲染进程， electron IPC 通道实现进程之间数据交互<br>
      选用 electron-updater 实现更新检查，下载，应用安装。选用 electron-builder 实现多平台打包，包括 windows(x64, x86) 和 macOS<br>
      选用 request 库实现文件下载(设计下载队列)，选用 axios 库实现接口请求，大文件上传（设计上传队列）<br>
      选用 IndexedDB + Vuex 实现本地数据缓存和页面数据缓存，减少不必要的网络请求, 另加 keep-alive + 路由懒加载 让页面响应更快<br>
      基于 ECC 生成随机公私钥对作为用户唯一凭证，并且保证私钥和用户数据的本地安全<br>
      基于 ECDH 密钥交换算法实现邮箱登录验证，另加 AES 对称算法实现随机数验证和邮件内容的的加解密，保证数据的安全传输。
    </div>
    <div class="images">
      <img src="@/assets/desktop_1.png" width="100%">
      <img src="@/assets/desktop_2.png" width="100%">
      <img src="@/assets/desktop_3.png" width="100%">
      <img src="@/assets/desktop_4.png" width="86%">
    </div>
    <div class="link">
      <p>Windows 版本下载: <a target="_blank" href="https://midu-electron.oss-cn-beijing.aliyuncs.com/windows/Midu_Mail.exe">https://midu-electron.oss-cn-beijing.aliyuncs.com/windows/Midu_Mail.exe</a></p>
      <p>Mac 版本下载: <a target="_blank" href="https://midu-electron.oss-cn-beijing.aliyuncs.com/mac/Midu_Mail.dmg">https://midu-electron.oss-cn-beijing.aliyuncs.com/mac/Midu_Mail.dmg</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.images {
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}
</style>
