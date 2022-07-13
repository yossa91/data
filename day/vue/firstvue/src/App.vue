<template>
    <div>
    <h1>뷰 처음 실행중입니다</h1>
    <introMe></introMe>
    </div>
</template>

<script>
import introMe from './components/introMe.vue';

export default {
  name: 'App',
  components: {
    introMe
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
