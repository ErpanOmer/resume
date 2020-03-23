<template>
  <div class="who">
    <img src="@/assets/avatar.png" width="140">
    <div class="text">
      <p>艾力番·吾买尔</p>
      <span>年龄：25岁</span>
      <span>职位：Web前端工程师</span>
      <span>手机：13025436606</span>
      <span>电子邮箱：354073823@qq.com</span>
    </div>
    <div class="text">
      <p style="color: #404160">艾力番·吾买尔</p>
      <span>毕业：深圳大学（2018）</span>
      <span>学历：本科</span>
      <span>专业：软件工程</span>
      <span>工作年限：3 年</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.who {
  display: flex;
  flex-direction: row;
  padding: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #404160;
  img {
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 25px;
    color: #fff;
    p {
      font-size: 35px;
    }

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
