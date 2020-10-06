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

$('#app').append(<h1>hello world</h1>)
