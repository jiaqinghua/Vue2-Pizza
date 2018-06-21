<template>
	<div class="row mt-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img src="">

					<form @submit.prevent="submit">
						<div class="form-group">
							<label for="email">邮箱:</label>
							<input type="email" name="email" class="form-control" v-model="email">
							
						</div>
						<div class="form-group">
							<label for="password">密码:</label>
							<input type="password" password="email" class="form-control" v-model="password">
							
						</div>
						 
						<button class="btn btn-success btn-block text-center">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				email:'',
				password:'',
			}
		},
		methods:{
			 submit(){
			  	axios.get('/jqh.json').then(res=>{
			  		//console.log(res)
			  		const data=res.data;
			  		const users=[];
			  		for(let key in data){
			  			const user=data[key];
			  			users.push(user);
			  		}
			  		
			  		let result=users.filter(user=>{
			  			return user.email===this.email && user.password===this.password
			  		})
			  		if(result!=null && result.length>0){
			  			this.$router.push({name:'homeLink'})
			  		}else{
			  			alert("您输入的用户名或密码有误")
			  		}
			  		
			  	})
			 }
		}
	}
</script>
