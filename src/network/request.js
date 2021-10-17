import axios from 'axios'
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

			return response
		},
		(error) => {
			hideLoading()
			return Promise.reject(error)
		}
	)

	if (method === 'get') {
		return instance.get(url, { params })
	} else {
		return instance.post(url, params)
	}
}
