<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <h1>뷰 처음 실행중입니다</h1>
    <HelloWorld msg="임폴트와 프롬 익스폴트 개념 공부할것"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
