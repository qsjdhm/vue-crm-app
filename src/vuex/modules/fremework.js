/**
 * 用来存储框架页面数据（tabbar等）
 * @type {string}
 */




export const SET_ACTIVETABBAR   = 'fremework/SET_ACTIVETABBAR';



const state  = {
    // tabbar数据列表
	tabbarList : [
		{
			'id': 1, 'icon': 'fa-home', 'name': '首页', 'path' : '/home'
		},
        {
            'id': 2, 'icon': 'fa-handshake-o', 'name': '拜访', 'badge' : '9', 'path' : '/visit'
        },
        {
            'id': 3, 'icon': 'fa-bar-chart', 'name': '业绩', 'path' : '/performance'
        },
        {
            'id': 4, 'icon': 'fa-user-o', 'name': '我的', 'path' : '/mine'
        }
    ],
    // 当前选中的tabbar
    activeTabbar : 1,
};

// getters
// 只能获取state中的值，并且可以进行数据处理，但是不建议，因为view中需要获取最初始的state的状态
const getters = {

};

// actions
const actions = {

};

// mutations
// action会发送请求到此，在此对state的值做设置处理
const mutations = {
	[SET_ACTIVETABBAR](state , id){
		state.activeTabbar = id;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
