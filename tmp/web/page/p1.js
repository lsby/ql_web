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
import $ from 'jquery'
import React from "aurantium"
import jq2html from "@lib/前端/jq2html"

var 全局数据 = 全局数据 || window.parent.全局数据

var layer = layui.layer

$('#app').append(
    <div>
        <h1>hello world</h1>
        <p>||message||</p>
        <a href="/demo/多弹出框.html">多弹出框</a>
        <div>
            <input v-model="message" />
        </div>
    </div>
)

var 数据 = 数据绑定(全局数据)
