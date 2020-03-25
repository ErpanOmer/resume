<template>
  <div>
    <div class="title">幂度邮箱桌面应用</div>
    <div class="content">
      这是基于 Electron 开发的桌面应用程序, Vue 多页面架构来实现多个应用窗口的渲染层，各进程之间用 IPC 通信<br>
      用 electron-updater 实现更新检查，下载，安装等操作。用 electron-builder 实现多平台打包，包括 windows(x64, x86) 和 macOS<br>
      用 request 库来实现文件下载功能(包括下载队列)<br>
      用 IndexedDB + Vuex 实现本地数据缓存和页面数据缓存，减少不必要的网络请求<br>
      基于 ECC 生成随机私钥作为用户唯一凭证，并且保证私钥和用户数据的本地安全<br>
      基于 ECIES 实现邮箱登录验证，另加 AES 对称算法实现随机数验证和邮件内容的的加解密，保证数据的安全传输。
    </div>
    <div class="images">
      <img src="@/assets/desktop_1.png" width="98%">
      <img src="@/assets/desktop_2.png" width="98%">
      <img src="@/assets/desktop_3.png" width="98%">
      <img src="@/assets/desktop_4.png" width="92%">
    </div>
    <div class="link">
      <p>Windows 版本下载: <a href="https://midu-electron.oss-cn-beijing.aliyuncs.com/windows/Midu_Mail.exe">https://midu-electron.oss-cn-beijing.aliyuncs.com/windows/Midu_Mail.exe</a></p>
      <p>Mac 版本下载: <a href="https://midu-electron.oss-cn-beijing.aliyuncs.com/mac/Midu_Mail.dmg">https://midu-electron.oss-cn-beijing.aliyuncs.com/mac/Midu_Mail.dmg</a></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.images {
  display:grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;
  justify-items: center;
}
</style>
