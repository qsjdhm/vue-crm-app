/**
 * 用来存储拜访页面数据
 * @type {string}
 */



// mutations标识
export const SET_KEYWORD        = 'visit/SET_KEYWORD';

// action标识


// state
const state  = {
    keyword : '',
	clientList : [

	]
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
	[SET_KEYWORD](state , newKeyword){
		state.keyword = newKeyword;
	},

};

export default {
	state,
	getters,
	actions,
	mutations
};
