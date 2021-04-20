import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios"
import VueAxios from "vue-axios"

import App from "./App.vue"
import Login from "./views/Login.vue"
import Dashboard from "./views/Dashboard.vue"


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

axios.defaults.withCredentials = true

const routes = [
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
  { path: "*", redirect: '/login' }
]

const router = new VueRouter({
  routes
})


new Vue({
  el: "#app",
  render: h => h(App),
  router
})