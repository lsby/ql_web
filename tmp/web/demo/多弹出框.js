import '@lib/前端/通用头'
import jq2html from '@lib/前端/jq2html'

var layer = layui.layer

function 弹框() {
    layer.open({
        type: 1,
        shade: 0,
        title: '在线调试',
        content: jq2html(<h1>你好世界</h1>),
        zIndex: layer.zIndex,
        success: function (layero) {
            layer.setTop(layero)
        },
        offset: [
            Math.random() * ($(window).height() - 300),
            Math.random() * ($(window).width() - 390)
        ]
    })
}

弹框()
弹框()
