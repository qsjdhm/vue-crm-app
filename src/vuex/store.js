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


import fremework from './modules/fremework';


const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
Vue.config.debug = debug;

export default new Vuex.Store({
    state,
    actions,
    getters,
    modules: {
        fremework,
    },
    strict: debug,
    middlewares: middlewares,
    plugins: [createLogger()]
})
