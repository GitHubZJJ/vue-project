<template>
	<div class="wrap">
		<div class="row">
			<span class="lable">
				姓名
			</span>
			<span class="value">
				<el-input class="input" v-model="user" />
			</span>
		</div>
		<div class="row">
			<span class="lable">
				密码aaaaaaaaaaa
			</span>
			<span class="value">
				<el-input type="password" class="input" v-model="password" />
			</span>
		</div>
		<el-button class="btn" type="primary" @click="handleLogin"
			>登陆</el-button
		>
	</div>
</template>

<script>
import Cookies from 'js-cookie'
import { getUserInfo } from '@/network/api.js'
export default {
	name: 'Login',
	data() {
		return {
			user: '',
			password: '',
		}
	},
	methods: {
		handleLogin() {
			getUserInfo({ user: this.user, password: this.password }).then(
				(res) => {
					console.log(res)
					const { token } = res || {}
					Cookies.set('token', token)
					this.$router.push('/project/home')
				}
			)
		},
	},
}
</script>

<style lang="less" scoped>
.wrap {
	width: 320px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	.row {
		display: flex;
		margin-bottom: 12px;
		.lable {
			width: 50px;
			align-items: center;
			line-height: 40px;
			color: #000;
		}
		.value {
			flex: 1;
			width: 100%;
		}
	}
	.btn {
		width: calc(100% - 50px);
		margin-left: 50px;
	}
}
</style>
