import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hell

import Home from '@/components/home/Home'
import Detail from '@/components/detail/Detail'
import Search from '@/components/search/Search'

Vue.use(Router);
console.log("1234");
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
