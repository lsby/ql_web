import "core-js/stable"
import "regenerator-runtime/runtime"

import '@fortawesome/fontawesome-free/css/all.css'
import '@assets/css/Glyphicons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'layui-src/dist/css/layui.css'
import 'layui-src/dist/layui.all.js'

import "@lib/前端/热重载"
import $ from 'jquery'
import React from "aurantium"
import jq2html from "@lib/前端/jq2html"

var layer = layui.layer

function 弹框() {
    layer.open({
        type: 1,
        shade: 0,
        title: '在线调试',
        content: jq2html(<h1>你好世界</h1>),
        zIndex: layer.zIndex,
        success: function (layero) {
            layer.setTop(layero)
        },
        offset: [
            Math.random() * ($(window).height() - 300),
            Math.random() * ($(window).width() - 390)
        ]
    })
}

弹框()
弹框()
