// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import './assets/css/base.css'

// import  '//at.alicdn.com/t/font_587947_4e7wxdmocu3anhfr.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
