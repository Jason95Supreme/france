import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import weui from '../node_modules/weui/dist/style/weui.min.css'
import iview from '../node_modules/iview/dist/styles/iview.css'

Vue.use(VueRouter);
Vue.use(VueResource);

import login from './components/login.vue'
import signup from './components/sign_up.vue'
import home from './components/home.vue'
import contact from './components/contact.vue'
import airplane from './components/airplane.vue'
import me from './components/me.vue'

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
      path: '/contact',
      component: contact
    },
    {
      path: '/airplane',
      component: airplane
    },
    {
      path: '/me',
      component: me
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
