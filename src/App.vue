<template>
	<div
		class="app"
		v-loading="$store.state.loading"
		element-loading-background="rgba(0, 0, 0, 0.3)"
	>
		{{ $store.state.loading }}
		<Test />
	</div>
</template>

<script>
import Test from '@/views/login/index.vue'
export default {
	name: 'App',
	components: {
		Test,
	},
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
