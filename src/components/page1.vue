<template>
  <div>page1的值是:{{number}}</div>
</template>

<script>
  import {mixin} from "../mixin"
    export default {
      mixins:[mixin],
        name: "page1",
        data () {
          return {
            number:10
          }
        },
        mounted(){
          this.demo1();
        },
        methods:{
          demo1(){
            console.log("这里是page1");
          }
        }
    }
</script>

<style scoped>

</style>
