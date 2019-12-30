<template>
  <div>
    <BaseInput/>
    <BaseIcon name="search"/>
    <BaseButton></BaseButton>
    <blog-post post-title="32"></blog-post>
    <blog-post2 v-bind:likes="42"></blog-post2>
    <bootstrap-date-input data-date-picker="activated" class="date-picker-theme-dark"></bootstrap-date-input>
    <base-checkbox v-model="lovingVue"></base-checkbox>
    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <current-user v-slot="{ user:person }">
      {{ person.firstName }}
    </current-user>
<!--    <async-example></async-example>-->
    <async-example2></async-example2>
    <div id="num">
      {{number}}
      <p><button @click="add">ADD</button></p>
      <p><button @click="reduce">Reduce</button></p>
    </div>
  </div>
</template>

<script>
  const AsyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import('./GD.vue'),
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 3000
  })
  var count = 1;
    export default {
        name: "GS",
        data(){
          return{
            lovingVue:false,
            msg: "zero child data",
            number:1,
          }
        },
        mounted(){
          this.$on('reduce',function(id){
            console.log('触发'+id+'次');
          });
        },
        methods:{
          add(){
            this.number++;
          },
          reduce(){
            this.number = 0;
            this.$emit('reduce',count++);
          },
        },
        components: {
          'blog-post': {
            props: {
              postTitle: {
                validator: function (value) {
                  return value == '32'
                }
              },
            },
            template: '<h3>{{postTitle}}</h3>',
          },
          'blog-post2': {
            template: '<h2>"这是一个 JavaScript 表达式而不是一个字符串"</h2>'
          },
          'bootstrap-date-input': {
            inheritAttrs: false,
            template: '<input type="date" class="form-control">',
          },
          'base-checkbox': {
            model: {
              prop: 'checked',
              event: 'change'
            },
            props: {
              checked: Boolean
            },
            template: `
              <input
                type="checkbox"
                v-bind:checked="checked"
                v-on:change="$emit('change', $event.target.checked)"
              >
            `
          },
          'base-layout':{
            template:`<div class="container">
                <header>
                  <slot name="header"></slot>
                </header>
                <main>
                  <slot></slot>
                </main>
                <footer>
                  <slot name="footer"></slot>
                </footer>
              </div>`
          },
          'current-user':{
            data:function(){
              return {
                user:{
                  firstName:1,
                  lastName:2,
                }
              }
            },
            template:`<span>
              <slot v-bind:user="user">
                {{ user.lastName }}
              </slot>
            </span>`
          },
          // 'async-example':function(resolve,reject){
              // setTimeout(function () {
              //   resolve({
              //     template:'<div>I am async!</div>'
              //   })
              // },20000)
            // require(['./GD.vue'],resolve)
          // },
          // 'async-example':() => import('./GD.vue'),
          // 'async-example':AsyncComponent
          'async-example2':{
            data(){
              return {
                msg: "first child data",
              }
            },
            template:`
                <div>
                  <span>{{this.$refs.msgText}}</span>
                  <async-example3></async-example3>
                </div>
            `,
            components:{
              'async-example3':{
                data(){
                  return {
                    msg: "second child data"
                  }
                },
                template:"<div ref='msgText'>second" +
                  "<div>this.$root.msg: {{this.$root.msg}}" +
                  "<div>this.parent.msg: {{this.$parent.msg}}</div>" +
                  "<div>this.msg: {{this.msg}}</div></div></div>"
              }
            }
          },

        },
    }
</script>

<style scoped>

</style>
