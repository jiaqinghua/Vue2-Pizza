<template>
	<header class="header">
		<nav  class="navbar navbar-expand-lg navbar-light bg-light">
			 <a class="navbar-brand" href="#">Pizza点餐系统</a>
			<ul class="navbar-nav mr-auto">
		      <li class="nav-item active">
		      	<router-link :to="{name:'homeLink'}" class="nav-link">主页</router-link>
		         
		      </li>
		      <li class="nav-item">
		      	<router-link :to="{name:'menuLink'}" class="nav-link">菜单</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link :to="{name:'adminLink'}" class="nav-link">管理</router-link>
		      </li>
		      <li class="nav-item">
		      	<router-link :to="{name:'aboutLink'}" class="nav-link">关于我们</router-link>
		      </li>
			</ul>

			<ul class="navbar-nav ml-auto">
			 
				<li v-show="!islogin"><router-link :to="{name:'loginLink'}" class="nav-link">登录</router-link></li>
				<li v-show="!islogin"><router-link :to="{name:'registerLink'}" class="nav-link">注册</router-link></li>
				 
				<li v-show="islogin"><span>{{loginName}}</span></li>
				<li v-show="islogin">
					
					<router-link :to="{name:'loginLink'}" class="nav-link">退出</router-link>
				</li>
			</ul>
			</nav>

			<router-view></router-view>
	</header>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				homelink:'/'
			}
		},
		computed:{
			//获取登录名
			loginName(){
				return this.$store.getters.getloginName
			},
			//获取登录状态
			islogin(){
				return this.$store.getters.getislogin
			}
		}
	}
</script>