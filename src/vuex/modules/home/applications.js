/**
 * 用来存储更多应用页面数据
 * @type {string}
 */


// mutations标识
export const SET_APPLIST           = 'applications/SET_APPLIST';




const state  = {
	// 更多应用列表
	appList : [
		{'name' : '销售任务', 'img' : './static/img/work/销售任务.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '拜访管理', 'img' : './static/img/work/拜访管理.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '信息协同', 'img' : './static/img/work/信息协同.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '数据看板', 'img' : './static/img/work/数据看板.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '信息录入', 'img' : './static/img/work/信息录入.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '企业BPM',  'img' : './static/img/work/企业BPM.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '企业邮箱', 'img' : './static/img/work/企业邮箱.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]},
		{'name' : '其他',     'img' : './static/img/work/其他.png', 'show' : false, 'subApp' : [{'name' : '各种业务1'}, {'name' : '各种业务2'}, {'name' : '各种业务3'}]}
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
	[SET_APPLIST](state , appList){
		state.appList = appList;
	},
};

export default {
	state,
	getters,
	actions,
	mutations
};
