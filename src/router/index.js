import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'


import Home from '../components/Home'
import Detail from '../components/Detail'
import Search from '../components/Search'

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
