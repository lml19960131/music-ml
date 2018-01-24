import 'babel-polyfill' //用于扩充ES6的语法
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import 'common/stylus/index.styl';

// fastClick.attach(document.body); //用于限制点击频率，并将其绑定在body
Vue.use(VueLazyLoad,{
  loading: require('common/image/show.jpg')
});

new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
});

router.push('/recommend'); //设置默认的根路由，也可以在router组件中设置redirect属性
