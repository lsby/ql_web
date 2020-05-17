var store = {
    namespaced: true,
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
    }
}

export default store
