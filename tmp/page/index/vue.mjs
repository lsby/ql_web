import vue from 'vue/dist/vue.js'

var app = { el: '#app' }

var data = app.data = {}
var methods = app.methods = {}
var computed = app.computed = {}

data.mes = '你好, 世界!'
methods.fun = _ => alert(data.mes)

new vue(app)

export default vue
