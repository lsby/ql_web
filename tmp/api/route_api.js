import { 安全同步运行 } from '../lib/index'
import express from 'express'
import path from "path"
import { getDir } from '../lib/index'
var requireContext = require('require-context')
var 路由们 = getDir(requireContext(path.resolve(__dirname, './route/'), true, /.js$/))

var router = express.Router()
路由们.forEach(obj => router.post(`/${obj.name}`, 安全同步运行(obj.obj, (req, res, next) => err => {
    console.error(err)
    return next(err.toString())
})))

export default router
