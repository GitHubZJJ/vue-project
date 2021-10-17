<template>
	<div
		class="app"
		v-loading="$store.state.loading"
		element-loading-background="rgba(0, 0, 0, 0.3)"
	>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			loading: true,
		}
	},
}
</script>

<style lang="less" scoped>
.app {
	min-height: 100vh;
}
</style>
