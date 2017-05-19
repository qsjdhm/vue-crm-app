import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 登录页面
const Login                = resolve => require(['../views/login'], resolve);

// 主架构页面
const Framework            = resolve => require(['../views/framework'], resolve);

// tabbar主页面
const Home                 = resolve => require(['../views/tabbar/home'], resolve);
const Visit                = resolve => require(['../views/tabbar/visit'], resolve);
const Performance          = resolve => require(['../views/tabbar/performance'], resolve);
const Mine                 = resolve => require(['../views/tabbar/mine'], resolve);



export default new Router({
    routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/f',
			name: '框架',
			component: Framework,
			children: [
				{
					meta: { id: 1 },
					path: 'home',
					name: '首页',
					component: Home
				},
				{
					meta: { id: 2 },
					path: 'visit',
					name: '拜访',
					component: Visit
				},
				{
					meta: { id: 3 },
					path: 'performance',
					name: '业绩',
					component: Performance
				},
				{
					meta: { id: 4 },
					path: 'mine',
					name: '我的',
					component: Mine
				}
			]
		},
  ]
})
