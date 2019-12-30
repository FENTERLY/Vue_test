<template>
  <div>
    <div id="example-1">
      <button @click="show = !show">
        Toggle render
      </button>
      <transition name="slide-fade">
        <p v-if="show">hello</p>
      </transition>
    </div>
    <div id="example-2">
      <button @click="show2 = !show2">Toggle show</button>
      <transition name="bounce">
        <p v-if="show2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>
    <div id="example-3">
      <transition name="fades" mode="out-in">
        <button @click="changes" v-bind:key="isOn">
          {{isOn ? 'on' : 'off'}}
        </button>
      </transition>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CS",
        data(){
          return{
            show:true,
            show2:true,
            show3:true,
            isOn:1,
          }
        },
      methods:{
        changes(){
          if(this.isOn==1)
          {
            this.isOn=0
          }else{
            this.isOn=1
          }
        },
      }
    }
</script>

<style scoped lang="scss">
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }
  .bounce-enter-active {
    animation: bounce-in .5s
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(2);
    }
  }
  .fades-enter-active {
    transition: all .3s ease;
  }
  .fades-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fades-enter, .fades-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(100px);
    opacity: 0;
  }
</style>
