import Vuex from 'vuex'
import { getDir } from '../../lib/index'

var 模块们 = (_ => {
    var c = getDir(require.context('./', true, /.js$/))
    delete c.index
    return c
})()
// TODO vuex热重载
var store = {
    strict: process.env.NODE_ENV !== 'production',
    state: {
        标题: ''
    },
    mutations: {
        更新数据(state, obj) {
            Object.keys(obj).forEach(name => state[name] = obj[name])
        }
    },
    modules: 模块们
}

export default _ => new Vuex.Store(store)
