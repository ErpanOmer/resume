<template>
  <div class="company">
    <div class="item">
      <div class="name">
        <p>深圳幂度信息科技有限公司</p>
        <span>公司性质：区块链</span>
        <span>2018.4 ~ 至今</span>
        <span>职位：Web前端工程师</span>
      </div>
      <div class="detail">
        <p>负责公司前端项目的开发-测试-部署-上线-迭代-维护等流程</p>
        <p>负责基于Vue,React的UI组件库模板的构建，项目架构，环境配置，构建优化</p>
        <p>负责开发公司官网，Web移动端，区块链DApp小游戏</p>
        <p>参与开发公司 PC 邮箱系统，后台管理系统</p>
        <p>负责开发 Chrome 插件，NPM 包，设计Web页面和插件之间数据通信</p>
        <p>负责开发 Electron 桌面端程序，设计进程之间数据通信，多平台打包，下载安装更新</p>
        <p>负责公司区块链 js 加密库的开发，封装和优化，保证前端数据的安全存储和传输</p>
        <p>制定代码规范，Git 提交规范，推动代码审核和优化</p>
        <p>负责项目迭代优化，多方面加快响应速度，提升用户体验</p>
      </div>
    </div>
    <div class="item">
      <div class="name">
        <p>	深圳市明之阳移动多媒体技术有限公司（实习）</p>
        <span>公司性质：外包</span>
        <span>2017.5 ~ 2018.3</span>
        <span>职位：Web前端工程师</span>
      </div>
      <div class="detail">
        <p>负责公司的前端项目的开发和测试</p>
        <p>选定Vue为主要开发框架，Vux为移动端UI组件库, Webpack 为构建工具</p>
        <p>负责开发商城系统WebApp，对接腾讯地图，实现微信登录，微信支付，微信扫码等功能</p>
        <p>负责开发UI模板，编写公共代码，提高开发效率</p>
        <p>建立前后端接口交互规范，提高对接质量</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  .item {
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;

    .name {
      display: flex;
      flex-direction: column;
      width: 240px;
      p {
        font-size: 20px;
        font-weight: bold;
        color: #202020;
        margin-bottom: 25px;
      }

      span {
        font-size: 17px;
        font-weight: bold;
        color: #434343;
        line-height: 30px;
      }
    }

    .detail {
      font-size: 17px;
      font-weight: bold;
      padding-left: 25px;
      color: #666;
      p {
        margin-bottom: 15px;
      }
    }
  }
}
</style>
