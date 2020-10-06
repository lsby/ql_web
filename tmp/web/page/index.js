import '@lib/前端/通用头'

var layer = layui.layer

$('#app').append(
    <div>
        <h1>hello world</h1>
        <p>||message||</p>
        <a href="/demo/多弹出框.html">多弹出框</a>
        <div>
            <input v-model="message" />
        </div>
    </div>
)

layer.open({
    type: 2,
    shade: 0,
    title: '在线调试',
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
    title: '在线调试',
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
