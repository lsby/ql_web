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
import _jq2html from "@lib/前端/jq2html"

var 全局数据 = 全局数据 || window.parent.全局数据
数据绑定(全局数据)

window.$ = _$
window.React = _React
window.jq2html = _jq2html
