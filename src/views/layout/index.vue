<template>
	<div class="wrap">
		<el-container>
			<el-header>
				<div class="header">
					Header
				</div>
			</el-header>
			<el-main>
				<keep-alive>
					<router-view v-if="$route.meta.cache"></router-view>
				</keep-alive>
				<router-view v-if="!$route.meta.cache"></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {}
	},
}
</script>

<style lang="less" scoped>
.wrap {
	font-size: 30px;
	.header {
		background: rgb(0, 195, 255);
		height: 100%;
	}
}
</style>
