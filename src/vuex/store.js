/**
 * Created by zhangyan on 17/2/20.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import middlewares from './middlewares';
import createLogger from 'vuex/dist/logger';
import * as state from './state';
import * as actions from './actions';
import * as getters from './getters';

import login from './modules/login';
import fremework from './modules/fremework';

// tabbar页面module
import home from './modules/tabbar/home';
import visit from './modules/tabbar/visit';
import task from './modules/tabbar/task';

// 单页面module
import applications from './modules/home/applications';


import '../../static/font-awesome-4.7.0/css/font-awesome.min.css';


const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
Vue.config.debug = debug;

export default new Vuex.Store({
    state,
    actions,
    getters,
    modules: {
        login,
        fremework,

		home,
		visit,
        task,

		applications
    },
    strict: debug,
    middlewares: middlewares,
    plugins: [createLogger()]
})
