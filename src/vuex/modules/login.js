/**
 * 用来存储登录页面数据
 * @type {string}
 */



// mutations标识
export const SET_VPN        = 'login/SET_VPN';
export const SET_PASSWORD   = 'login/SET_PASSWORD';
export const SET_TEL        = 'login/SET_TEL';

// action标识
export const LOGIN_SYSTEM   = 'login/LOGIN_SYSTEM';  // 登录系统


// state
const state  = {
    vpn : 'putian_crm',
	password : '123456',
	tel : '13912345678'
};

// getters
// 只能获取state中的值，并且可以进行数据处理，但是不建议，因为view中需要获取最初始的state的状态
const getters = {

};

// actions
const actions = {
	// 登录系统
	[LOGIN_SYSTEM] (context, payload) {
		return new Promise((resolve, reject) => {
			resolve('登录成功');
		});
	}
};

// mutations
// action会发送请求到此，在此对state的值做设置处理
const mutations = {
	[SET_VPN](state , newVpn){
		state.vpn = newVpn;
	},
	[SET_PASSWORD](state , newPassword){
		state.password = newPassword;
	},
	[SET_TEL](state , newTel){
		state.tel = newTel;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
