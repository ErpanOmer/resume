<template>
  <div class="project">
    <MiduDesktop/>
  </div>
</template>
<script>
import MiduDesktop from './MiduDesktop'
export default {
  components: {
    MiduDesktop
  }
}

</script>

<style lang="scss" scoped>
.project {
  padding: 5px 10px;
  /deep/ .title {
    font-size: 20px;
    font-weight: bold;
    color: #202020;
  }

  /deep/ .content {
    font-size: 16px;
    color: #555;
    line-height: 30px;
    margin: 10px 0 15px;
  }

  /deep/ .link {
    margin: 15px 0;
    line-height: 30px;
    a {
      color: #2995F2;
    }
  }
}
</style>
