<template>
  <div id="app">
    <button @click="pig">点击就能生成一只猪的名字</button>
    <h1 v-show="see">{{PigName}}</h1>
  </div>
</template>

<script>
    export default {
        name: "BigPigs",
        data(){
          return {
            PigName:'欣怡',
            see:false,
          }
        },
        methods:{
          pig:function(){
            this.see = true
          }
        },
        components:{

        }
    }
</script>

<style scoped>

</style>
