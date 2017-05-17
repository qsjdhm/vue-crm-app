import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 登录页面
const Login                     = resolve => require(['../views/login'], resolve);


export default new Router({
    routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		}
  ]
})
