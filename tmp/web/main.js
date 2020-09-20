import "core-js/stable"
import "regenerator-runtime/runtime"

import '@fortawesome/fontawesome-free/css/all.css'
import '@assets/css/Glyphicons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import lodash from 'lodash'
import post from '@lib/前端/post'
import getDir from "@lib/通用/getDir"
import 是调试模式 from "@lib/通用/是调试模式"
import 对象扩展 from "@lib/通用/对象扩展"

var main = async function () {
    if (module.hot) module.hot.accept()
}

main()
