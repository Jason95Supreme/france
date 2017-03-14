import Vue from 'vue'
import login from './component/login.vue'
import signup from './component/sign_up.vue'
import home from './component/home.vue'
import how from './component/how'
import fy from './component/fly'
import m from './component/me'
import mydetail from './component/my-details'

Vue.component('tabbar',require('./component/tabbar'))

export default[
    {
      path: '/login',
      component: login
    },
    {
      path: '/signup',
      component: signup
    },
    {
      path: '/home',
      component: home
    },
    {
      path:'/how',
      component: how
    },
    {
      path:'/fy',
      component: fy
    },
    {
      path:'/m',
      component: m
    },
    {
      path:'/m/mydetail',
      component: mydetail,
    },
    {
      path: '*',
      component: login
    },

]
