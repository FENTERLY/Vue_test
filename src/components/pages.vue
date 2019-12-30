<template>
  <div id="app">
    <button @click="method1">page1</button>
    <button @click="method2">page2</button>
    <div id="test">
      <input type="text" placeholder="我是局部自定义指令" v-focus>
    </div>
    <div id="hook-arguments-example" v-test:foo.a.b="message"></div>
    <div id="baseexample">
      <p>Scroll down the page</p>
      <p v-pin="350">Stick me 350px from the top of the page</p>
    </div>
    <anchored-heading :level="2">Hello world!</anchored-heading>
  </div>
</template>

<script>
    export default {
        name: "pages",
        data(){
          return{
            message:'hello!'
          }
        },
        methods:{
          method1(){
            this.$router.push('/page1');
          },
          method2(){
            this.$router.push('/page2');
          }
        },
      directives:{
          focus:{
            inserted:function (el) {
                el.focus();
            },
          },
          test:{
            bind:function(el,binding,vnode){
              var s = JSON.stringify
              el.innerHTML =
                'name: '       + s(binding.name) + '<br>' +
                'value: '      + s(binding.value) + '<br>' +
                'expression: ' + s(binding.expression) + '<br>' +
                'argument: '   + s(binding.arg) + '<br>' +
                'modifiers: '  + s(binding.modifiers) + '<br>' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
            },
          },
          pin:{
            bind: function (el, binding, vnode) {
              el.style.position = 'fixed'
              el.style.top = binding.value + 'px'
            }
          }
      },
      components:{
        'anchored-heading':{
          render: function (createElement) {
            return createElement(
              'h' + this.level,   // 标签名称
              this.$slots.default // 子节点数组
            )
          },
          props: {
            level: {
              type: Number,
              required: true
            }
          }
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
