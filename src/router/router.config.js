const Home = () => import('@/views/home/index.vue')
const Layout = () => import('@/views/layout/index.vue')
const Login = () => import('@/views/login/index.vue')
export default [
	{
		path: '',
		redirect: '/login',
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/project',
		component: Layout,
		children: [
			{
				path: '',
				redirect: '/project/home',
			},
			{
				path: 'home',
				name: 'home',
				component: Home,
				meta: {
					cache: true,
				},
			},
		],
	},
]
