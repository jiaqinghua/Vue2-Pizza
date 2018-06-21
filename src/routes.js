import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

/*二级路由*/
import New from './components/about/twoRouter/New'
import Contactus from './components/about/twoRouter/Contactus'
import Order from './components/about/twoRouter/Ordermessage'
import Express from './components/about/twoRouter/Express'

/*三级路由*/
import Phone from './components/about/twoRouter/contactus/Phone'
import Person from './components/about/twoRouter/contactus/Person'


export const routes=[
	{path:'/',name:'homeLink',components:
		{
		default:Home,
		'new':New,
		'order':Order,
		'express':Express
		}
	},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin},
	{path:'/about',name:'aboutLink',component:About,redirect:'/about/new',children:[
		{path:'/about/new',name:'newLink',component:New},
		{path:'/about/contact',name:'contactLink',component:Contactus,redirect:'/about/contact/phone',children:[
			{path:'/about/contact/phone',name:'phoneLink',component:Phone},
			{path:'/about/contact/person',name:'personLink',component:Person}
		]},
		{path:'/about/order',name:'orderLink',component:Order},
		{path:'/about/express',name:'expressLink',component:Express},

	]},
	{path:'/login',name:'loginLink',component:Login},
	{path:'/register',name:'registerLink',component:Register},
	{path:'*',redirect:'/'}
]
