import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
export const store = new Vuex.Store({
    state: {
        //设置属性
        itemMenu: {},
        islogin: false, //是否登录属性
        loginName: null //登录名

    },
    getters,
    actions,
    mutations

})