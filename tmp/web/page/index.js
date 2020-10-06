import '@lib/前端/通用头'

var layer = layui.layer

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
