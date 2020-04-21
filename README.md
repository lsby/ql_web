# ql_web

## 是什么

- 是 web 项目模板生成器

## 注意事项

- 需要 node 13 以上

## 特点

- 结构
  - 前后端全部使用 mjs 文件
  - 后端基于 express
  - 集成 webpack, 多页面前后端分离模式, 一键打包为静态文件
  - 集成 docker 一键部署
  - 集成 gulp
- 后端
  - morgan
  - urlencoded
  - cookieParser
  - session
  - socketio 服务端, socketio 可访问 session, post 请求也可使用 socketio
  - 中文 url 路径支持
- 前端
  - jquery
  - vue
  - bootstrap
  - socketio 客户端
- webpack
  - HtmlWebpackPlugin
  - CleanWebpackPlugin
  - babel
  - scss
  - sourceMap
  - 资源文件使用 url-loader 打包
  - 生产环境使用 UglifyJSPlugin

## 使用

- `npm i -g @lsby/ql_web`
- `cd` 到空目录
- `lsby_ql_web`

或

- `cd` 到空目录
- `npx @lsby/ql_web`
