<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '丢'
    }
  }
}
</script>

<style scoped>
  .hello{
    color: blue;
  }
</style>

