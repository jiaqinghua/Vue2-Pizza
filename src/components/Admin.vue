<template>
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-8">
				<app-header-pizza></app-header-pizza>
			</div>

			<div class="col-sm-12 col-md-4">
				<h3>菜单</h3>
				<table class="table">
					<thead class="thead-default">
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
					<tbody >
						<tr  v-for="item in menuArr" :key="menuArr">
							<td>{{item.name}}</td>
							<td><button class="btn btn-sm" @click="deleteMenu(item)">&times;</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<
<script>
	import axios from 'axios'
	import newPizza from '../components/Newpizza.vue'
	export default{
		components:{
			'app-header-pizza':newPizza 
		},
		data(){
			return{
				/*menuArr:[]*/
			}
		},
		computed:{
			menuArr:{
				get(){
					return this.$store.state.itemMenu
				},
				set(){

				}
				
			}
		},
		created(){
			/*fetch('https://wd2425857849fuwfgz.wilddogio.com/menu.json',{
	              method:"get",
	              headers:{
	                  "Content-type":"application/x-www-form-urlencoded"
	              }
	          	})
	            .then(res=>res.json())
	            .then(data=>{
	            	let addarr=[];
	            	for(var key in data){
	            		data[key].id=key
	            		addarr.push(data[key])
	            	}
	            	this.menuArr=addarr
	            })
	            .catch(err=>console.log(err))*/
	            axios.get('/menu.json')
	            .then(res=>{
	            	console.log(res)
	            	var data=res.data;
	            	var addarr=[];
	            	for(var key in data){
	            		data[key].id=key
	            		addarr.push(data[key])
	            	}
	            	//this.itemMenu=addarr
	            	this.$store.commit("setMenuItems",addarr)
	            })
	            .catch(err=>console.log(err))

		},
		methods:{
			deleteMenu(item){
				/*fetch('https://wd2425857849fuwfgz.wilddogio.com/menu/'+item.id+'/.json',{
	              method:"delete",
	              headers:{
	                  "Content-type":"application/x-www-form-urlencoded"
	              }
	              
	          	})
	            .then(res=>res.json())
	            .then(data=>this.$router.push({name:'menuLink'}))
	            .catch(err=>console.log(err))*/
	            axios.delete('/menu/'+item.id+'/.json')
	            .then(res=>{
	            	this.$store.commit("removeItemMenu",item)
	            })
	            .catch(err=>console.log(err))
			}
		}
	}
		
 
 
</script>