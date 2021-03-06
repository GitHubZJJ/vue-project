import axios from 'axios'
import _ from 'lodash'
import { Message } from 'element-ui'
import store from '@/store'

// 记录需要loading的接口，且正在请求的个数
let count = 0

const hideLoading = () => {
	count = count - 1
	if (count <= 0) {
		store.commit('hideLoading')
	}
}

export function request(config) {
	const { method, url, params, showLoading } = config || {}
	const instance = axios.create({
		timeout: 5000,
	})

	// 如果需要展示loading，count+1
	if (showLoading) {
		count = count + 1
	}

	// 请求拦截
	instance.interceptors.request.use(
		(config) => {
			if (count > 0) {
				store.commit('showLoading')
			}
			return config
		},
		(error) => {
			hideLoading()
			return Promise.reject(error)
		}
	)

	// 添加响应拦截器
	instance.interceptors.response.use(
		(response) => {
			hideLoading()
			console.log(response)
			const { data } = response || {}
			const { code, msg, resultData } = data || {}
			if (_.isEmpty(data) || code != '0') {
				Message({
					message: msg,
					type: 'warning',
				})
				return {
					isError: true,
				}
			}

			return resultData
		},
		(error) => {
			hideLoading()
			Message({
				message: '出错啦',
				type: 'warning',
			})
			return Promise.reject(error)
		}
	)

	if (method === 'get') {
		return instance.get(url, { params })
	} else {
		return instance.post(url, params)
	}
}
