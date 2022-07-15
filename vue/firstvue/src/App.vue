<template>
  <h1>hi vue</h1>
  <introMe></introMe>
</template>

<script>
import introMe from './components/IntroMe.vue'

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
