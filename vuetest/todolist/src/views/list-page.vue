
<template>
    <h3>from tag</h3>
    <form action="">
        <div>
            <input type="text" v-model="result.name" placeholder="이름" >
        </div>
        <div>
            <label for="ox">O</label>
            <input type="radio" name="ox" v-model="result.ox" value="o">
            <label for="ox">X</label>
            <input type="radio" name="ox" v-model="result.ox" value="x">
        </div>
        <div>
            <label v-for=" color in colors" v-bind:key ="color">{{color}}
            <input type="checkbox" v-bind:value="color" v-model="result.color">
            </label>
        </div>
        <div>
            <select v-model="result.option">
                <option v-for="option in options" v-bind:key ="option" v-bind:value="option">{{option}}</option>
            </select>
        </div>
        <div class="box">{{ result }}</div>
    </form>
</template>

<script>
    import {reactive} from 'vue'
    export default ({
        setup() {
           const name = '이름' 
           const ox = 'O'
           const colors = ['red','blue','yellow','puple']
           const color = ['red']
           const options = ['list1','list2','list3','list4','list5']
           const option =['list1']
           const result = reactive({
            name,
            ox,
            color,
            option
           })       
            return{
                result,
                colors,
                options
            }
        },
    })

</script>


<style>

.box{
    display: inline-block;
    margin-top: 50px;
    padding: 20px;
    border: 1px solid red;
    font-weight: bold;
}
div{
    padding: 5px 0;
}
</style>