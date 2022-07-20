<template>
    <table>
        <tr>
            <th v-for="(head,head_index) in header" :key="'head-' + head_index">{{head}}</th>
        </tr>
        <tr v-for="(row, row_index) in rows" :key="'row-' + row_index">
            <td v-for="(el, el_index) in row" :key="'el-' + el_index" :colspan="el.colspan || 1">{{el.el}}</td>
        </tr>
    </table>

</template>

<script>


    export default({
        name : 'my-table',
        props : ['header','rows'],


    })

</script>

<style scoped>
    table{
        width: 300px;
        text-align: center;
        border: 2px solid #333;
    }
    td,th{
        line-height: 30px;
        border: 1px solid #333;
    }
</style>