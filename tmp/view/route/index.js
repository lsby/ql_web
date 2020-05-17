import VueRouter from 'vue-router'
import { getDir, 副作用 } from '../../lib/index'

// TODO 绝对路径形式

// 读入页面
// 按页面生成路由
// TODO 按页面层级自动生成路由 动态路由
var 页面们 = getDir(require.context('../page', true, /.vue$/))
var routes = Object.keys(页面们).map(name => ({ path: `/${name}`, component: 页面们[name] }))

// 添加自定义路由
routes = [
    { path: '/', component: 页面们.index },
].reduce((s, a) => 副作用(s)(_ => s.push(a)), routes)

export default _ => new VueRouter({ routes })
