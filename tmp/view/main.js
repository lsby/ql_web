import React from "react"
import ReactDOM from "react-dom"
import 'antd/dist/antd.css'

import io from "socket.io-client/dist/socket.io.js"
import 'bootstrap/dist/css/bootstrap.css'
import { post } from './lib/index'

import index from "./page/index"

var socket
var main = async _ => {
    await post('/api/初始化session')({})
    if (!socket)
        socket = io()
    ReactDOM.render(index, document.getElementById("root"))
}
main()

if (module.hot)
    module.hot.accept()

export { socket }
