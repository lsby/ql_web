# ql_web

## 是什么

- 是 web 项目模板生成器

## 特点

- 结构
  - webpack 项目.
  - 前后端分离, 可以分别单独运行前端和后端.
  - 多页面模式, 自动读取页面结构, 一键打包为静态文件.
  - 一键部署.
  - 后端基于 express
  - 全部使用 mjs 文件
- webpack 已配置
  - HtmlWebpackPlugin
  - CleanWebpackPlugin
  - babel
  - scss
  - sourceMap
  - 资源文件使用 url-loader 打包
  - 生产环境使用 UglifyJSPlugin
- 前端已配置
  - jquery
  - vue
  - bootstrap
  - socketio 客户端
- 后端已配置
  - morgan
  - urlencoded
  - cookieParser
  - session
  - socketio 服务端, 可访问 session
  - 中文 url 路径支持

## 使用

- `npm i -g @lsby/ql_web`
- `cd` 到空目录
- `lsby_ql_web`
