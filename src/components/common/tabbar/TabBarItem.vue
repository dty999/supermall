<template>
	<div id="tabbar-item" @click="itemClick">
		<div v-if="isActive"><slot name='item-icon-active'></slot></div>
		<div v-else><slot name='item-icon'></slot></div>
		<div :style="activeStyle"><slot name='item-text'></slot></div>
	</div>
</template>


<script>
	export default {
		name: "TabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data() {
			return {
				// path: ''
			}
		},
		computed: {
			isActive() {
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
				// console.log(this);
			}
		}
	};
</script>


<style>
	#tabbar-item {
		flex: 1;
		text-align: center;
		height: 49px;
	}

	#tabbar-item img {
		height: 24px;
		widows: 24px;
	}
</style>
