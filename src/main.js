import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'
import axios from 'axios'

Vue.use(VueRouter)

axios.defaults.baseURL = 'https://wd2425857849fuwfgz.wilddogio.com/'; 

const router=new VueRouter({
	mode:"history",
	routes,
	scrollBehavior (to, from, savedPosition) {
    	 	  if (savedPosition) {
			    return savedPosition
			  } else {
			    return { x: 0, y: 0 }
			  }
		  }  
  	 
})



new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
