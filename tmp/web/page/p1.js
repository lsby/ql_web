import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

$('#app').html(html`
    <div>
        <h1 id="aaa">页面1</h1>
        <input type="text" name="date" id="date" />
        <p>{{全局数据.message}}</p>
        <div>
            <input v-model="全局数据.message" />
        </div>
    </div>
`)

数据绑定({ 全局数据 })

全局事件.监听('测试', a => {
    $('#aaa').html(a)
    全局数据.message = a
})
$("#date").datepicker();
