<template>
  <div>page2的值是:{{number}}</div>
</template>

<script>
  import {mixin} from "../mixin"
    export default {
      mixins:[mixin],
        name: "page2",
        data () {
          return {

          }
        }
    }
</script>

<style scoped>

</style>
