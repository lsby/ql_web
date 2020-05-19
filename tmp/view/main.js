import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import io from "socket.io-client/dist/socket.io.js"
import app from './app.vue'
import getStore from './store/index'
import getRoute from './route/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { post } from './lib/index'

var main = async _ => {
    await post('/api/初始化session')({})
    var socket = io()

    Vue.use(Vuex)
    Vue.use(VueRouter)
    Vue.use(BootstrapVue)
    Vue.use(IconsPlugin)

    var store = getStore()
    var router = getRoute()

    Vue.use({
        install: function (Vue, options) {
            Vue.prototype.$post = post
            Vue.prototype.$数据 = store.state
            Vue.prototype.$socket = socket

            Vue.prototype.$ws = {}
            Vue.prototype.$ws.提交 = 名称 => 参数 => socket.emit(名称, 参数)
            Vue.prototype.$ws.发送 = Vue.prototype.$ws.提交
            Vue.prototype.$ws.监听 = 名称 => 函数 => socket.on(名称, 函数)
            Vue.prototype.$ws.停止监听 = 名称 => socket.off(名称)

            Vue.prototype.$x = {}
            Vue.prototype.$x.提交更新 = 名称 => 参数 => store.commit(名称, 参数)
            Vue.prototype.$x.提交异步更新 = 名称 => 参数 => store.dispatch(名称, 参数)
            Vue.prototype.$x.更新数据 = 模块 => {
                if (模块 == '' || 模块 == '/')
                    return Vue.prototype.$x.提交更新(`更新数据`)
                return Vue.prototype.$x.提交更新(`${模块}/更新数据`)
            }
        }
    })
    new Vue({
        store,
        router,
        components: { app }
    }).$mount('#app')
}

main()
if (module.hot) module.hot.accept()
