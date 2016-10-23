import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import weui from '../node_modules/weui/dist/style/weui.min.css'
import font from '../font-awesome/css/font-awesome.min.css'

Vue.use(VueRouter);
Vue.use(VueResource);

import login from './components/login.vue'
import signup from './components/sign_up.vue'
import home from './components/home.vue'

const router = new VueRouter({
  routes:[
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
      path: '/*',
      component: login
    },

  ]
})

/* eslint-disable no-new */
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
