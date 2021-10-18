<template>
	<div class="header">
		<a href="https://element.eleme.cn/" class="nav-logo">
			<img src="@/assets/img/logo.svg" alt="logo" />
		</a>

		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
		>
			<el-menu-item index="1">首页</el-menu-item>
			<el-menu-item index="1.1">组件</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"
				><a href="https://www.ele.me" target="_blank"
					>订单管理</a
				></el-menu-item
			>
		</el-menu>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {}
	},
}
</script>

<style lang="less" scoped>
.header {
	height: 80px;
	width: 1140px;
	border-bottom: 1px solid #dcdfe6;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	.nav-logo {
		padding-top: 20px;
		height: 80px;
		display: inline-block;
	}
	/deep/.el-menu {
		border-bottom: none;
		.el-menu-item {
			margin-top: 10px;
		}
		.el-submenu {
			.el-submenu__title {
				margin-top: 10px;
			}
		}
	}
}
</style>
