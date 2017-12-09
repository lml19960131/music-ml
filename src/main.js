import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl';

fastClick.attach(document.body);
Vue.use(VueLazyLoad,{
  loading: require('common/image/show.jpg')
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

router.push('/recommend');
