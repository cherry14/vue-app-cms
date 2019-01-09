// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Header } from 'minu-ui'; 
Vue.component(Header.name, Header); 

import router from './router/index.js'
// import VueResource from 'vue-resource'

//安装vue-resource之后才能进行vue.$http的使用

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'


Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
 render:c=>c(App)
})
