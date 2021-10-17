import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loading: false,
		count: 0,
	},
	getters: {},
	mutations: {
		showLoading(state) {
			state.loading = true
		},
		hideLoading(state) {
			state.loading = false
		},
	},
	actions: {},
})
