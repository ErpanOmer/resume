<template>
  <div id="app">
    <Who/>
    <Title title="技能特长"/>
    <Skill/>
    <Title title="工作经历"/>
    <Company/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Title title="项目经历"/>
    <Project/>
  </div>
</template>

<script>
import Who from '@/components/Who.vue'
import Title from '@/components/Title.vue'
import Skill from '@/components/Skill.vue'
import Company from '@/components/Company'
import Project from '@/components/Project/index.vue'

export default {
  name: 'App',
  components: {
    Who,
    Title,
    Skill,
    Company,
    Project
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style media="screen">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
