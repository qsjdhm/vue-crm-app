/**
 * 用来存储任务页面数据
 * @type {string}
 */



// mutations标识
export const SET_GATHERLIST        = 'task/SET_GATHERLIST';
export const SET_DEMANDLIST        = 'task/SET_DEMANDLIST';
export const SET_INDENTLIST        = 'task/SET_INDENTLIST';


// action标识
export const TIME_CHANGE           = 'task/TIME_CHANGE';



// state
const state  = {
    // 供查询使用的数据列表
	allGatherList: [
		{
			'time': '2016-07-12 09:30',
			'timeScope': '4h',
			'name': '拜访中国普天集团',
			'state': 0,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 0,  // 0:严重; 1:紧急; 2:重要
			'initiator': '李经理'
		},
		{
			'time': '2016-07-12 14:30',
			'timeScope': '4h',
			'name': '拜访阿里巴巴集团',
			'state': 1,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 1,  // 0:严重; 1:紧急; 2:重要
			'initiator': '李经理'
		},
		{
			'time': '2016-07-13 09:30',
			'timeScope': '1d',
			'name': '收集最近客户需求，分离客户层次',
			'state': 2,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 2,  // 0:严重; 1:紧急; 2:重要
			'initiator': '李经理'
		},
		{
			'time': '2016-09-16 09:30',
			'timeScope': '1d',
			'name': '向副总裁汇报最近收集工作',
			'state': 2,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 2,  // 0:严重; 1:紧急; 2:重要
			'initiator': '张副总'
		},
	],
	// 需求反馈列表
	allDemandList: [
		{
			'time': '2016-08-15 09:30',
			'timeScope': '1h',
			'name': '向产品部门询问浪潮项目客户反馈的DRC2601可否添加安全服务问题',
			'state': 1,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 1,  // 0:严重; 1:紧急; 2:重要
			'initiator': '张副总'
		},
		{
			'time': '2016-09-15 09:30',
			'timeScope': '1h',
			'name': '统计天融信项目客户需求，反馈给产品部门进行报价评估',
			'state': 1,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 1,  // 0:严重; 1:紧急; 2:重要
			'initiator': '张副总'
		},
	],
	// 待签单列表
	allIndentList: [
		{
			'time': '2016-08-15 09:30',
			'timeScope': '1h',
			'name': '督促中国普天集团交付尾款',
			'state': 0,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 0,  // 0:严重; 1:紧急; 2:重要
			'initiator': '张副总'
		},
		{
			'time': '2016-09-15 11:30',
			'timeScope': '1h',
			'name': '询问浪潮集团定金到款日期，是否会存在拖延问题',
			'state': 2,     // 0:未开始; 1:解决中; 2:已完成
			'priority': 1,  // 0:严重; 1:紧急; 2:重要
			'initiator': '张副总'
		},
	],


    // 客户收集数据列表
    gatherList: [],
    // 需求反馈列表
    demandList: [],
    // 待签单列表
    indentList: []
};

// getters
// 只能获取state中的值，并且可以进行数据处理，但是不建议，因为view中需要获取最初始的state的状态
const getters = {
    // 分类后的客户收集数据列表
    treatedGatherList: state => {
        // 根据日期进行区分
        let existingTimeList = [];
        let list = {};
        for (let item of state.gatherList) {
            let date = item.time.split(' ')[0];
            let time = date.replace(new RegExp("-","gm"),"/");
            time = (new Date(time)).getTime();  // 得到毫秒数

            // 按照时间毫秒数进行任务分类
            if (existingTimeList.indexOf(time) > -1) {
                list[date].push(item);
            } else {
                existingTimeList.push(time);
                list[date] = [];
                list[date].push(item);
            }
        }
        return list;
    },
    // 分类后的需求反馈列表
    treatedDemandList: state => {
        // 根据日期进行区分
        let existingTimeList = [];
        let list = {};
        for (let item of state.demandList) {
            let date = item.time.split(' ')[0];
            let time = date.replace(new RegExp("-","gm"),"/");
            time = (new Date(time)).getTime();  // 得到毫秒数

            // 按照时间毫秒数进行任务分类
            if (existingTimeList.indexOf(time) > -1) {
                list[date].push(item);
            } else {
                existingTimeList.push(time);
                list[date] = [];
                list[date].push(item);
            }
        }
        return list;
    },
    // 分类后的待签单列表
    treatedIndentList: state => {
        // 根据日期进行区分
        let existingTimeList = [];
        let list = {};
        for (let item of state.indentList) {
            let date = item.time.split(' ')[0];
            let time = date.replace(new RegExp("-","gm"),"/");
            time = (new Date(time)).getTime();  // 得到毫秒数

            // 按照时间毫秒数进行任务分类
            if (existingTimeList.indexOf(time) > -1) {
                list[date].push(item);
            } else {
                existingTimeList.push(time);
                list[date] = [];
                list[date].push(item);
            }
        }
        return list;
    }
};

// actions
const actions = {
	// 获取每个大分类下的小分类列表（例如：文章下的小分类）
	[TIME_CHANGE] (context, payload) {
		return new Promise((resolve, reject) => {
			// 根据选择的起始日期过滤数据
			let date = payload.time.split(' ')[0];
			let time = date.replace(new RegExp("-","gm"),"/");
			time = (new Date(time)).getTime();  // 得到毫秒数

            let tmpGatherList = [];
            for (let item of context.state.allGatherList) {
                let dataTime = item.time.split(' ')[0].replace(new RegExp("-","gm"),"/");
				dataTime = (new Date(dataTime)).getTime();  // 得到毫秒数
                if (dataTime >= time) {
					tmpGatherList.push(item);
                }
            }

			let tmpDemandList = [];
			for (let item of context.state.allDemandList) {
				let dataTime = item.time.split(' ')[0].replace(new RegExp("-","gm"),"/");
				dataTime = (new Date(dataTime)).getTime();  // 得到毫秒数
				if (dataTime >= time) {
					tmpDemandList.push(item);
				}
			}

			let tmpIndentList = [];
			for (let item of context.state.allIndentList) {
				let dataTime = item.time.split(' ')[0].replace(new RegExp("-","gm"),"/");
				dataTime = (new Date(dataTime)).getTime();  // 得到毫秒数
				if (dataTime >= time) {
					tmpIndentList.push(item);
				}
			}

            // 将数据更新
			context.commit(SET_GATHERLIST, tmpGatherList);
			context.commit(SET_DEMANDLIST, tmpDemandList);
			context.commit(SET_INDENTLIST, tmpIndentList);

			resolve();
		})
	},
};

// mutations
// action会发送请求到此，在此对state的值做设置处理
const mutations = {
	[SET_GATHERLIST](state , gatherList){
        state.gatherList = gatherList;
    },
    [SET_DEMANDLIST](state , demandList){
        state.demandList = demandList;
    },
    [SET_INDENTLIST](state , indentList){
        state.indentList = indentList;
    }
};

export default {
	state,
	getters,
	actions,
	mutations
};
