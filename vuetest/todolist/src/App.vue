<template>
  <div>
    <h1>vue test</h1>
    <router-link to="/" class="home">home</router-link>
    <router-link to="/list" class="list">list</router-link>
    <router-link to="/table" class="table">table</router-link>
    <router-view></router-view>    
  </div>
</template>

<script>

</script>

<style>
.home, .list, .table{
  padding: 5px 10px;
  background-color: blue;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
}
.list, .table{
  margin-left: 10px;
}

</style>
