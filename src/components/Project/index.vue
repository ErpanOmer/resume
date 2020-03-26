<template>
  <div class="project">
    <MiduDesktop/>
    <MiduExtensions/>
    <SunUwee/>
    <SunUzhan/>
    <TokenCatMain/>
    <TokencatWebApp/>
    <TokenCatDapp/>
  </div>
</template>
<script>
import MiduDesktop from './MiduDesktop'
import MiduExtensions from './MiduExtensions'
import TokencatWebApp from './TokencatWebApp'
import TokenCatDapp from './TokenCatDapp'
import TokenCatMain from './TokenCatMain'
import SunUwee from './SunUwee'
import SunUzhan from './SunUzhan'

export default {
  components: {
    MiduDesktop,
    MiduExtensions,
    TokencatWebApp,
    TokenCatDapp,
    TokenCatMain,
    SunUwee,
    SunUzhan
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
    margin: 15px 0 45px;
    line-height: 30px;
    a {
      color: #2995F2;
    }
  }
}
</style>
