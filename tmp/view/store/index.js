import Vuex from 'vuex'
import 子模块 from './子模块'
import 日志模块 from './日志模块'

var store = {
    strict: process.env.NODE_ENV !== 'production',
    state: {
        全局变量: 0
    },
    getters: {
        全局计算属性(state) {
            return state.全局变量 + 1
        }
    },
    mutations: {
        修改全局变量(state) {
            state.全局变量++
        }
    },
    actions: {
        异步修改全局变量(context) {
            context.commit('修改全局变量')
        }
    },
    modules: {
        子模块,
        日志模块,
    }
}

export default _ => new Vuex.Store(store)
