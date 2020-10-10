import '@lib/前端/通用头'
import { post_json } from '@lib/前端/http'
import 数据绑定 from "@lib/前端/数据绑定"

var layer = layui.layer

$('#app').html(html`
    <h1>post测试</h1>
    <div>
        <textarea style="width:100%; height:500px;">{{日志}}</textarea>
    </div>
    <div>
        <button type="button" class="btn btn-primary" @click="发送请求()">发送请求</button>
    </div>
`)

var 数据 = 数据绑定({
    全局数据,
    日志: ''
}, {
    async 发送请求() {
        var data = await post_json('/api/test', {})
        数据.日志 += data + '\n'
    }
})


layer.open({
    type: 2,
    shade: 0,
    title: '在线调试1',
    content: '/page/p1.html',
    zIndex: layer.zIndex,
    success: function (layero) {
        layer.setTop(layero)
    },
    offset: [
        Math.random() * ($(window).height() - 300),
        Math.random() * ($(window).width() - 390)
    ]
})

layer.open({
    type: 2,
    shade: 0,
    title: '在线调试2',
    content: '/page/p2.html',
    zIndex: layer.zIndex,
    success: function (layero) {
        layer.setTop(layero)
    },
    offset: [
        Math.random() * ($(window).height() - 300),
        Math.random() * ($(window).width() - 390)
    ]
})
