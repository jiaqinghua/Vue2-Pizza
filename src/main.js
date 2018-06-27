import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'
import {store} from './store/store'
Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd2425857849fuwfgz.wilddogio.com/'; 

const router=new VueRouter({
	mode:"history",
	routes
  	 
})



new Vue({
  el: '#app',
  router:router,
  store,
  render: h => h(App)
})
