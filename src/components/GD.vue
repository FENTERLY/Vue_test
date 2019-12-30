<template>
  <div id="gd">
    <headerVue></headerVue>
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h1>{{details()}}</h1>
    <span v-once>这个将不会改变: {{ msg }}</span>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <button @click="click">
      button
    </button>
    <div v-bind:id="'id-'+dynamicId">
      <h1>789798798</h1>
    </div>
    <h2>{{ number + 1 }}</h2>
    <p v-if="seen">现在你看到我了</p>
    <a v-bind:href="url_2">...</a>
    <p v-on:click="doSomething">监听</p>
    <a :href="url_2">...</a>
    <div id="example">
      <p>Original message: "{{ message }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
    <p>FullName: {{person.fullname}}</p>
    <p>FirstName: <input type="text" v-model="person.firstname"></p>
    <my-ss></my-ss>
    <div :style="styleObject">13</div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <button @click="ch"></button>
    <h1 v-show="ok">Hello!</h1>
    <ul id="example-1" @click="dd">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
    <ul>
      <li v-for="userProfile in us">
        {{userProfile}}
      </li>
    </ul>
    <li v-for="n in evenNumbers">{{ n }}</li>
    <li v-for="todo in todos" v-if="todo.isComplete!=0">
      {{ todo.isComplete }}
    </li>
    <div>{{ssss}}</div>
    <button @click="doThis">
      button
    </button>
    <form  autocomplete="off" @submit.prevent="onSubmit" action="https://www.baidu.com" ref="d">
      <input type="text" />
      <button type="submit">提交</button>
    </form>
    <div v-on:click.capture='alert("1")' style="width: 100%;height: 45px;background-color: black;">
      <div v-on:click="alert('2')" style='width: 80%;margin-left: 10%;background-color: white;'>
        123
      </div>
    </div>
    <div v-on:click.self='alert("1")' style="width: 100%;height: 45px;background-color: black;">
      <div v-on:click="alert('2')" style='width: 80%;margin-left: 10%;background-color: white;'>
        123
      </div>
    </div>
    <input v-model="ss" placeholder="edit me">
    <p>Message is: {{ ss }}</p>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{checked}}</label>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <input type="checkbox" id="qq" value="qq" v-model="aaa">
    <label for="qq">qq</label>
    <span>Checked names: {{ aaa }}</span>
    <div id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <div id="example-6">
      <select v-model="selected2" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected2 }}</span>
    </div>
    <select v-model="selected3">
      <option v-for="option in ggg" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected3 }}</span>
    <span>Selected: {{ selected4 }}</span>
    <select v-model="selected4">
      <!-- 内联对象字面量 -->
      <option :value="{ number: 123 }">123</option>
    </select>
    <input v-model.lazy="msg" >
    <span>{{msg}}</span>
    <input v-model.number="as" type="number">
    <input v-model.trim="bs">
    <span>{{bs}}</span>
    <div id="components-demo">
      <button-counter></button-counter>
      <button-counter></button-counter>
      <button-counter></button-counter>
    </div>
    <blog-post aaaaa="sssssssasa"></blog-post>
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-mo v-for="gw in gws" :key="gw.id" :title="gw.title" v-on:enlarge-text="postFontSize += $event"></blog-mo>
    </div>
    <custom-input v-model="searchText"></custom-input>
    <div id="component-demo" class="demo">
      <button v-for="tab in tabs" :key="tab" :class="['tab-button',{active:currentTab === tab}]" @click="currentTab = tab">
        {{tab}}
      </button>
      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
    <table>
      <tr is="blog-post-row"></tr>
    </table>
    <div>{{detail.name}}</div>
    <div>{{detail.type}}</div>
    <div>
      <component-a></component-a>
      <component-b></component-b>
      <component-c></component-c>
    </div>
    <button @click='diyfun'>Click</button>
  </div>
</template>

<script>
  import {myfun} from '../../static/js/test'
  import {cc} from '../../static/js/test'
  import header from  './HelloWorld'
  var ComponentA = {template:'<div>A</div>'}
  var ComponentB = {template:'<div>B</div>'}
  var ComponentC = {template:'<div>C</div>'}
    export default {
      name: "GD",
      data() {
        return {
          bs:'sadasd',
          as:1,
          site: 15234,
          url: 'www.badiu.com',
          msg: '166',
          rawHtml: '123',
          dynamicId: '8888',
          number: 8,
          seen: true,
          url_2: 'http://www.baidu.com',
          message: 'hello',
          person: {
            firstname: 'Menghui',
            lastname: 'Jin',
            fullname: ''
          },
          styleObject: {
            color: 'blue',
            fontSize: '13px'
          },
          awesome: false,
          type: 'D',
          loginType: 'username',
          ok: true,
          items: [
            {message: 'Foo'},
            {message: 'Bar'},
            {message: 'asd'},
          ],
          us:{
            name:'asdas',
          },
          numbers: [ 1, 2, 3, 4, 5 ],
          todos:[
            {isComplete:0},
            {isComplete:1},
            {isComplete:2},
          ],
          vv:[
            {message: 'Foo'},
            {message: 'Bar'},
            {message: 'asd'},
          ],
          ssss:123,
          ss:123,
          checked:true,
          checkedNames:[],
          aaa:[],
          selected: '',
          selected2:[],
          selected3: 'A',
          selected4:'',
          ggg: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ],
          gws: [
            {id: 1, title: 'My journey with Vue' },
            {id: 2, title: 'Blogging with Vue' },
            {id: 3, title: 'Why Vue is so fun' }
          ],
          postFontSize: 1,
          searchText:1,
          currentTab:'Home',
          tabs:['Home','Posts','Archive'],
          detail:{
            name:'myname',
            type:'NAME',
          }
        }
      },
      mounted() {
        this.$set(this.items,1,{message:'asfasdasdasdasdsa'})
        dd:{
          this.items.push({message: 'asfasf'});
        }
        this.us = Object.assign({}, this.us, {
          age: 27,
          favoriteColor: 'Vue Green'
        });
      },
      methods: {
        diyfun:function(){
          myfun();
        },
        details: function () {
          return this.site + "- 学的不仅是技术，更是梦想！";
        },
        click: function () {
          this.msg = 'aaaa'
        },
        doSomething() {

        },
        ch: function () {
          if (this.loginType == 'username') {
            this.loginType = ''
          } else {
            this.loginType = 'username'
          }
        },
        dd: function () {
          this.items.push({message: 'asfasf'});
        },
        doThis: function(){
          this.ssss = 'sssssssssssssssssss';
        },
        onSubmit: function () {
          this.$refs.d.submit();
        },
        alert:function(mess){
          alert(mess);
        }
      },
      computed: {
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        },
        evenNumbers: function () {
          return this.numbers.filter(function (number) {
            return number % 2 != 0
          })
        },
        currentTabComponent: function () {
          return 'tab-' + this.currentTab.toLowerCase()
        },
      },
      watch: {
        person: {
          handler(n) {
            this.person.fullname = n.firstname + ' ' + this.person.lastname;
          },
          immediate: true,
          deep: true
        }
      },
      components: {
        'headerVue':header,
        'my-ss': {
          template: '<p class="ss bar">Hi</p>',
        },
        'my-component': {
          template: '<p class="ss bar">NO</p>',
        },
        'button-counter':{
          data(){
            return{
              counts:1,
            }
          },
          template:'<button v-on:click="counts++">You clicked me {{ counts }} times.</button>'
        },
        'blog-post':{
          props:['aaaaa'],
          template:'<h3>{{aaaaa}}</h3>'
        },
        'blog-mo':{
          props:['title'],
          template: `
            <div>
              <h2>{{title}}</h2>
              <button @click="$emit('enlarge-text',0.2)">Enlarge text</button>
            </div>
          `
        },
        'custom-input':{
          props:['value'],
          template:`
             <input
              v-bind:value="value"
              v-on:input="$emit('input', $event.target.value)"
            >
          `
        },
        'tab-home':{
          template:'<div>Home</div>'
        },
        'tab-posts':{
          template:'<div>Posts</div>'
        },
        'tab-archive':{
          template:'<div>Archive</div>'
        },
        'blog-post-row':{
          template:'<div>ROW</div>'
        },
        'component-a':ComponentA,
        'component-b':ComponentB,
        'component-c':ComponentC,
      },
    }
</script>

<style lang="scss" scoped>
  .tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
  }
  .tab-button:hover {
    background: #e0e0e0;
  }
  .tab-button.active {
    background: #e0e0e0;
  }
  .tab {
    border: 1px solid #ccc;
    padding: 10px;
  }
</style>
