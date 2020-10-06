import "core-js/stable"
import "regenerator-runtime/runtime"

import '@fortawesome/fontawesome-free/css/all.css'
import '@assets/css/Glyphicons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'layui-src/dist/css/layui.css'
import 'layui-src/dist/layui.all.js'

import "@lib/前端/热重载"
import 数据绑定 from "@lib/前端/数据绑定"

import _$ from 'jquery'
import _React from "aurantium"
import data from '@web/data'

数据绑定(window.top.全局数据 || data)

window.$ = _$
window.React = _React
