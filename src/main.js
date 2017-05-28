// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { LoadingPlugin} from 'vux'
import VueScroller from 'vue-scroller'

Vue.config.productionTip = false

Vue.use(LoadingPlugin)
Vue.use(VueScroller)

// 为了避免每个路由切换还需要重新加载echarts的类库，所以在这里引用
// 并且赋值到vue的原型中，在view中直接 this.$echarts.init就可以了
let echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/component/grid');
require('echarts/lib/component/legend');

Vue.prototype.$echarts = echarts;

const FastClick = require('../static/fastclick/fastclick.js')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
