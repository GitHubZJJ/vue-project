import { request } from './request'

// 获取首页信息
export const getUserInfo = (params, showLoading = true) => {
	console.log(params, 'params')
	const config = {
		url: '/api/login/getUserInfo',
		method: 'get',
		params,
		showLoading,
	}
	return request(config)
}
