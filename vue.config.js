const path = require('path')
module.exports = {
	css: {
		loaderOptions: {
			less: {},
		},
	},
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'less',
			patterns: [path.resolve(__dirname, './src/common/less/index.less')],
		},
	},
	configureWebpack: (config) => {
		if (process.env.NODE_ENV === 'production') {
			// 为生产环境修改配置...
			config.mode = 'production'
		} else {
			// 为开发环境修改配置...
			config.mode = 'development'
		}
		Object.assign(config, {
			// 开发生产共同配置
			resolve: {
				alias: {
					'@': path.resolve(__dirname, './src'),
				}, // 别名配置
			},
		})
	},

	devServer: {
		proxy: {
			'/api': {
				target: 'http://mockjs.docway.net/mock/1gDd6Vd50Er',
				ws: true,
				changeOrigin: true,
				pathRewrite: { '^/api': '/' },
			},
		},
	},
}
