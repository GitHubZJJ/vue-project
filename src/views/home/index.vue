<template>
	<div class="home">
		<h1>网站快速成型工具</h1>
		<p>
			Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0
			的桌面端组件库
		</p>
		<div class="img-wrap">
			<img src="@/assets/img/home.png" alt="home" />
		</div>
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
.home {
	text-align: center;
	h1 {
		font-size: 34px;
		margin: 0;
		line-height: 48px;
		color: #555;
	}
	p {
		font-size: 18px;
		line-height: 28px;
		color: #888;
		margin: 10px 0 5px;
	}
	.img-wrap {
		width: 890px;
		margin: 30px auto;
		position: relative;
		img {
			width: 100%;
		}
	}
}
</style>
