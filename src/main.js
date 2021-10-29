import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/services'
import './assets/css/base.css';

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

// 安装element npm install element-ui -save
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 安装iview npm install iview -save
import 'iview/dist/styles/iview.css';
import iView from 'iview';
// 引入echarts插件 npm install echarts --save
import echarts from 'echarts';
// 安装vue-lottie包 npm install --save vue-lottie
// import lottie from 'vue-lottie';
import 'lib-flexible'
// Vue.component('lottie', lottie);
Vue.use(ElementUI);
Vue.use(iView);
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
