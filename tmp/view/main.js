import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import io from "socket.io-client/dist/socket.io.js"
import $ from 'jquery'
import app from './app.vue'
import getStore from './store/index'
import getRoute from './route/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// 常用函数
var post = url => data => new Promise((res, req) => $.post(url, data, data => res(data)))

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
            Vue.prototype.$socket = socket
            Vue.prototype.$ws提交 = 名称 => 参数 => socket.emit(名称, 参数)
            Vue.prototype.$ws监听 = 名称 => 函数 => socket.on(名称, 函数)
            Vue.prototype.$post = post
            Vue.prototype.$提交x修改 = 名称 => 参数 => store.commit(名称, 参数)
            Vue.prototype.$提交x异步修改 = 名称 => 参数 => store.dispatch(名称, 参数)
        }
    })
    new Vue({
        store,
        router,
        components: {
            app
        }
    }).$mount('#app')
}

main()
if (module.hot) module.hot.accept()
