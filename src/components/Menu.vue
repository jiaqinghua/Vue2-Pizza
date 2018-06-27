<template>
	<div class="container">
		<div class="row">

		<div class="col-sm-8">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="(item,index) in getItem" :key="index">
					<tr>
						<td>{{item.name}}</td>
					</tr>
					<tr v-for="(option,index) in item.options" :key="index">
						<td>{{option.size}}</td>
						<td>{{option.price}}</td>
						<td><button class="btn btn-sm btn-outline-success" @click="addshop(item,option)">+</button></td>
					</tr>
				</tbody>
			</table>
			
		</div>

		<div class="col-sm-4">
			<div v-if="shoparr.length>0">
				<table class="table">
					<thead class="thead-default">
					<tr>
						<th>数量</th>
						<th>品种</th>
						<th>价格</th>
					</tr>
				</thead>
					<tbody v-for="shop in shoparr">
						<tr>
							<td><button class="btn btn-sm" @click="reducenum(shop)">-</button>
								<span>{{shop.num}}</span>
								<button class="btn btn-sm" @click="addnum(shop)">+</button>
							</td>
							<td>{{shop.name}}  {{shop.size}}寸</td>
							<td>{{shop.price*shop.num}}</td>
						</tr>
					</tbody>
				</table>
				<p>总价：{{total +"RMB"}}</p>
				<button class="btn btn-success btn-block">提交</button>
			</div>
			<div v-else>
				购物车还没有商品！
			</div>
				
			
		</div>
		</div>


	</div>
</template>

<script>
	/***
		by 贾清华
		实现购物车
		addnum 购物车数量加的方法
		reducenum 购物车数量减的方法
	***/
	import axios from 'axios'

	export default{
		data(){
			return {
				shoparr:[]
			}
		},
		created(){
			this.fetData()
			 
		},
		computed:{
			total(){
				let totalPrice=0;
				for(let index in this.shoparr){
					let shopindex=this.shoparr[index];
					totalPrice+=shopindex.price*shopindex.num;
				}
				return totalPrice;
			},
			getItem(){
				return this.$store.state.itemMenu
			}
		},
		methods:{
			addshop(item,option){
				let shops={
					name:item.name,
					size:option.size,
					price:option.price,
					description:item.description,
					num:1
				}
				if(this.shoparr.length>0){
					let result=this.shoparr.filter(shops=>{
						return (shops.name===item.name&&shops.price===option.price)
					})
					if(result!=null &&result.length>0){
						result[0].num++;
					}else{
						this.shoparr.push(shops)
					}
					
				}else{
					this.shoparr.push(shops)
				}
				
			},
			addnum(shop){  
				shop.num++; 
			},
			reducenum(shop){
				shop.num--; 
				if(shop.num<=0){
					this.removeshop();
				}
			},
			removeshop(shop){
				this.shoparr.splice(this.shoparr.indexOf(shop),1);
			},
			fetData(){
				//es6
				/*fetch('https://wd2425857849fuwfgz.wilddogio.com/menu.json',{
	              method:"get",
	          	})
	            .then(res=>res.json())
	            .then(data=>{
	            		this.getItem=data
	            	 
	            })
	            .catch(err=>console.log(err))*/

	            //axios
	           /* axios.get('/menu.json')
			 		.then(res=>{
			 			this.getItem=res.data
			 	})*/

			 	//将请求的数据放到vuex中
			 	axios.get('/menu.json')
			 	 .then(res => this.$store.commit("setMenuItems",res.data))

			}


			
		}
	}
</script>