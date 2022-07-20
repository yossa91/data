
<template>
    <h3>table</h3>
    <mytable :header = 'header' :rows = 'rows'/>


</template>

<script>
  import  mytable  from '../components/table-list.vue'
  export default({
    name : 'list-table',
    data(){
        return {
            header : ['이름','반'],
            rows : [
                [{el: '누구누'},{el:'303'}],
                [{el: '구누구'},{el:'301'}],
                [{el: '입니당'},{el:'302'}],
                [{el: '이름없음' , colspan : 2}],
            ]
        }
    },
    components : {
        mytable
    }
  })

</script>


<style>

</style>