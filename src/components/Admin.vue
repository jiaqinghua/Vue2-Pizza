<template>
	<div class="admin">
		<h1>admin</h1>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				name:'jqh'
			}
		},
		beforeRouteEnter (to, from, next) {
		 next((a)=>{
		 	
		 })
		},
		beforeRouteUpdate (to, from, next) {
		  // just use `this`
		  this.name = '88888';
		  next(vm=>{
		  	console.log(vm.name)
		  })
		}
	}
</script>