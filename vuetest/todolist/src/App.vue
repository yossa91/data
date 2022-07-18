<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{count}}</h1>
    <button v-on:click="addNum(1)">addNum</button>
    <button v-on:click="addNum(10)">addNum</button>
    <button v-on:click="minusNum(1)">minusNum</button>
    <button v-on:click="minusNum(10)">minusNum</button>
    <div class="box">
      <button v-on:click="getEvent">getEvent</button>
      <p>{{getE}}</p>
    </div>
    <div>
      <button v-on:click="login">login</button>
      <button v-on:click="logout">logout</button>
      <p>{{log}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      count : 0,
      getE:'test',
      log : '',
    }
  },
  methods: {
     addNum (num) {
      this.count = this.count +num;
     },
     minusNum(num){
      this.count = this.count -num;
     },
     login(){
      this.log = 'login';
     },
     logout(){
      this.log = 'logout';
     },
     getEvent(evt) {
      this.getE = `클릭한 좌표값은 ${evt.pageX}, ${evt.pageY} 입니다.`;
     }
  },
  components: {
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
.box{
  margin: auto;
  width: 500px;
  height: 300px;
  background-color: #2c3e50;
  color: #fff;
}
</style>
