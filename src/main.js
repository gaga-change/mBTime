// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AppRoot from './AppRoot.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(AppRoot)
});
