/**
 * 用来存储更多应用页面数据
 * @type {string}
 */


// mutations标识
export const SET_APPLIST           = 'applications/SET_APPLIST';




const state  = {
	// 更多应用列表
	appList : [
		{'name' : '竞争情报系统',   'img' : './static/img/work/销售任务.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : '档案管理系统',   'img' : './static/img/work/拜访管理.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : '云学堂',         'img' : './static/img/work/信息协同.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : '公司官网',       'img' : './static/img/work/数据看板.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : '决策支持系统',   'img' : './static/img/work/信息录入.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : 'NC系统',        'img' : './static/img/work/企业BPM.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : 'BI运营数据平台', 'img' : './static/img/work/企业邮箱.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]},
		{'name' : '其他',          'img' : './static/img/work/其他.png', 'show' : false, 'subApp' : [{'name' : '人力共享系统'}, {'name' : '网报系统'}, {'name' : '电子采购平台'}, {'name' : '合同管理系统'}]}
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
