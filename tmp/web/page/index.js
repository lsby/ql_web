import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

var layer = layui.layer

$('#app').html(html`
<div>
    <h1>hello world</h1>
    <p>{{message}}</p>
    <input type="text" name="date" id="date" />
    <div>
        <input v-model="message" />
    </div>
</div>
`)

setTimeout(() => {
    $("#date").datepicker();
}, 1000);


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

数据绑定(全局数据)
