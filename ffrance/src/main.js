import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import weui from '../node_modules/weui/dist/style/weui.min.css'
import font from '../font_awesome/css/font-awesome.min.css'
import axios from 'axios'
import routes from './router'
import store from './vuex/store'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
const app = new Vue({
  router: router,
  axios: axios,
  store: store,
  render: h => h(App)
}).$mount('#app')
