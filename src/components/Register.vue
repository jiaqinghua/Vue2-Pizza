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
						<div class="form-group">
							<label for="confirmPassword">确认密码:</label>
							<input type="password" name="confirmPassword" class="form-control" v-model="confirmpassword">
						
						</div>
						<button class="btn btn-success btn-block text-center">注册</button>
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
				confirmpassword:''
			}
		},
		methods:{
			 submit(){
			 	if(this.password===this.confirmpassword){
			 		const data={
			 			email:this.email,
			 			password:this.password,
			 			confirmpassword:this.confirmpassword
			 		}
			 		
			 		axios.post('/jqh.json',data)
			 		.then(reponse=>{
			 			this.$router.push({name:'loginLink'})
			 		})
			 	}else{
			 		alert("你输入的密码不一致，请重新输入")
			 	}
			 	
			 }
		}
	}
</script>