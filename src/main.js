// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from './toast.js';
Vue.use(Toast);

Vue.config.productionTip = false


import BaseButton from './components/BaseButton.vue'
import BaseIcon from './components/BaseIcon.vue'
import BaseInput from './components/BaseInput.vue'

Vue.component('BaseButton', BaseButton)
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseInput', BaseInput)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    msg:1231231
  }
})

