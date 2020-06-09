import Vuex from 'vuex'
import { getDir } from '../../lib/index'

var 子模块们 = (_ => {
    var c = getDir(require.context('./', true, /.js$/))
    delete c.index
    return c
})()

var store = {
    strict: process.env.NODE_ENV !== 'production',
    state: {},
    mutations: {
        设置值(state, obj) {
            Object.keys(obj).forEach(name => state[name] = obj[name])
        },
    },
    actions: {},
    modules: 子模块们
}

export default _ => new Vuex.Store(store)
