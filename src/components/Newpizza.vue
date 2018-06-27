<template>
	<div class="newPizza">
		<form>
			<h3 class="text-muted my-5">添加新的pizza</h3>
			<div class="form-group row">
				<label class="col-sm-2">
					品种
				</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="newPizza.name">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">
					描述
				</label>
				<div class="col-sm-10">
					<textarea type="text" rows="10" class="form-control" v-model="newPizza.descption">
					</textarea>
				</div>
			</div>

			<p><strong>选项1</strong></p>
			<div class="form-group row">
				<label class="col-sm-2">
					尺寸
				</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="newPizza.size1">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">
					价格
				</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="newPizza.price1">
				</div>
			</div>
			<p><strong>选项2</strong></p>
			<div class="form-group row">
				<label class="col-sm-2">
					尺寸
				</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="newPizza.size2">
				</div>
			</div>
			<div class="form-group row">
				<label class="col-sm-2">
					价格
				</label>
				<div class="col-sm-10">
					<input type="text" class="form-control" v-model="newPizza.price2">
				</div>
			</div>
			<div class="form-group row">
				<button type="button" class="btn btn-success btn-block" @click="addMes()">添加</button>
			</div>
		</form>
	</div>
	
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				newPizza:{}
			}
		},
		
		methods:{
			addMes(){
				let addData={
					name:this.newPizza.name,
					descption:this.newPizza.descption,
					options:[
						{size:this.newPizza.size1,
						price:this.newPizza.price1},
						{size:this.newPizza.size2,
						price:this.newPizza.price2
					}]
					 
				}
				// es6
				/*  
				fetch('https://wd2425857849fuwfgz.wilddogio.com/menu.json',{
	              method:"post",
	              headers:{
	                  "Content-type":"application/x-www-form-urlencoded"
	              },
	              body:JSON.stringify(addData)
	          	})
	            .then(res=>res.json())
	            .then(data=>this.$router.push({name:'menuLink'}))
	            .catch(err=>console.log(err))*/
/*
	            axios.post('/menu.json',JSON.stringify(addData))
	            .then(data=>{
	            	this.$router.push({name:'menuLink'})
	            })
	            .catch(err=>{
	            	console.log(err)
	            })*/


	            //请求到数据放到vuex中
	            axios.post('/menu.json',addData)
	            .then(data=>{
	            	this.$store.commit("pushMenuData",addData)
	            	//this.$router.push({name:'menuLink'})

	            })
			}
		}

	}
</script>