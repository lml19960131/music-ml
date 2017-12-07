import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastClick from 'fastclick'
import router from './router'

import 'common/stylus/index.styl';

fastClick.attach(document.body);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

router.push('/recommend');
