import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import 'view-design/dist/styles/fonts/ionicons.woff2'

import * as R from 'ramda'
import lodash from 'lodash'
import io from "socket.io-client/dist/socket.io.js"
import post from '@lib/前端/post'
import getDir from "@lib/通用/getDir"
import 是调试模式 from "@lib/通用/是调试模式"
import log from "@lib/通用/log"
import 对象扩展 from "@lib/通用/对象扩展"

import app from './app.vue'
import state from './state'

var 组件们 = getDir(require.context('./components', true, /.vue$/))
var 布局们 = getDir(require.context('./layout', true, /.vue$/))
var 页面们 = getDir(require.context('./page', true, /.vue$/))

var main = async _ => {
    await post('/api/initSession')({})

    Vue.use(Vuex)
    Vue.use(VueRouter)
    Vue.use(ViewUI)

    var store = new Vuex.Store({
        strict: 是调试模式(),
        state,
        mutations: {
            设置值(state, { 路径, 值 }) {
                if (对象扩展.判断路径值相等(路径, 值, state))
                    return
                对象扩展.IO_设置对象路径值(路径, 值, state, (对象, 键, 值) => Vue.set(对象, 键, 值))
                log('发出', '通用数据更新', { 路径, 值 })
                socket.emit('通用数据更新', { 路径, 值 })
            }
        },
        actions: {},
    })
    var router = new VueRouter({
        routes: [
            { path: '/', component: 页面们.filter(a => a.name == 'index')[0].obj },
            ...页面们.map(a => ({ path: '/' + a.name, component: a.obj }))
        ]
    })

    var socket = io()
    await socket.emit('socket初始化', {})
    socket.on('通用数据更新', (({ 路径, 值 }) => {
        log('收到', '通用数据更新', { 路径, 值 })
        store.commit('设置值', { 路径, 值 })
    }))

    Vue.use({
        install: function (Vue, options) {
            Vue.prototype.$post = post
            Vue.prototype.$socket = socket

            Vue.prototype.$Vuex = {}
            Vue.prototype.$Vuex.数据 = store.state
            Vue.prototype.$Vuex.突变 = (路径, 值) => store.commit('设置值', { 路径, 值 })

            Vue.prototype.$深克隆 = 值 => lodash.cloneDeep(值)

            Vue.prototype.$路由 = {}
            Vue.prototype.$路由.跳转 = 页面 => router.push(页面)
            Vue.prototype.$路由.后退 = _ => window.history.length > 1 ? router.go(-1) : router.push('/')

            Vue.prototype.$ws = {}
            Vue.prototype.$ws.提交 = 名称 => 参数 => socket.emit(名称, 参数)
            Vue.prototype.$ws.发送 = Vue.prototype.$ws.提交
            Vue.prototype.$ws.监听 = 名称 => 函数 => socket.on(名称, 函数)
            Vue.prototype.$ws.停止监听 = 名称 => socket.off(名称)
        }
    })

    Array.from([...组件们, ...布局们]).forEach(a => Vue.component(a.obj.name, a.obj))
    new Vue({
        store,
        router,
        components: { app },
    }).$mount('#app')

    if (module.hot) module.hot.accept()
}

main()
