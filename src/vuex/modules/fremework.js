/**
 * 用来存储框架页面数据（tabbar等）
 * @type {string}
 */

import Vue from 'vue';



export const SET_ACTIVETABBAR   = 'fremework/SET_ACTIVETABBAR';



const state  = {
    // tabbar数据列表
	tabbarList : [
		{
			'id': 1, 'icon': 'fa-bar-chart', 'name': '首页', 'path' : '/home'
		},
        {
            'id': 2, 'icon': 'fa-bar-chart', 'name': '待办', 'badge': '2', 'path' : '/todo'
        },
        {
            'id': 3, 'icon': 'fa-bar-chart', 'name': '通讯录', 'path' : '/address'
        },
        {
            'id': 4, 'icon': 'fa-bar-chart', 'name': '设置', 'path' : '/settings'
        },
        {
            'id': 5, 'icon': 'fa-bar-chart', 'name': '部门通讯录', 'path' : '/department'
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
