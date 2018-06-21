<template>
	<div class="about">
		<div class="row mb-5">
			<div class="col-4">
				<!-- 导航 -->
				<div class="list-group mb-2">
					<router-link :to="{name:'newLink'}">
						<a class="list-group-item list-group-item-action">新闻</a>
					</router-link>
					
				</div>
				<div class="list-group mb-2">
				<router-link :to="{name:'contactLink'}">
						<a class="list-group-item list-group-item-action">联系我们</a>
					</router-link>
				</div>
				<div class="list-group mb-2">
					<router-link :to="{name:'orderLink'}">
						<a class="list-group-item list-group-item-action">点餐文档</a>
					</router-link>
				</div>
				<div class="list-group mb-2">
					<router-link :to="{name:'expressLink'}">
						<a class="list-group-item list-group-item-action">快递</a>
					</router-link>
				</div>
			</div>

			<div class="col-8">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>