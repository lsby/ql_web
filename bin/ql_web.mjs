#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

var 命令所在目录 = process.cwd()
var 模板目录 = path.join(__dirname, '../tmp')

var 复制文件夹 = function (src, dst) {
    // https://blog.csdn.net/coooliang/article/details/89711471
    function mkdirsSync(dirname) {
        if (fs.existsSync(dirname)) {
            return true
        } else {
            if (mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname)
                return true
            }
        }
    }
    function _copy(src, dist) {
        var paths = fs.readdirSync(src)
        paths.forEach(function (p) {
            var _src = src + '/' + p
            var _dist = dist + '/' + p
            var stat = fs.statSync(_src)
            if (stat.isFile()) {
                fs.writeFileSync(_dist, fs.readFileSync(_src))
            } else if (stat.isDirectory()) {
                copyDir(_src, _dist)
            }
        })
    }
    function copyDir(src, dist) {
        var b = fs.existsSync(dist)
        if (!b) {
            mkdirsSync(dist)
        }
        _copy(src, dist)
    }
    function createDocs(src, dist) {
        copyDir(src, dist)
    }
    createDocs(src, dst)
}
var 复制文件 = 源 => 目的 => fs.copyFileSync(源, 目的)

复制文件夹(模板目录, 命令所在目录)
复制文件(path.join(__dirname, '../tmp/.npmignore'))(`${命令所在目录}/.gitignore`)

console.log('安装依赖', 'npm i')
console.log('开发:')
console.log('1.启动后端', 'npm run dev')
console.log('2.启动前端', 'npm run web')
console.log('3.访问', 'http://127.0.0.1:8080')
console.log('')
console.log('运行:')
console.log('1.编译前端', 'npm run build')
console.log('2.运行后端', 'npm run dev')
console.log('3.访问', 'http://127.0.0.1:3000')
