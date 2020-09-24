<template>
  <div style="position: relative; left: 0px; top: 0px; display: inline-block;">
    <span>{{名称}}</span>
    <input :id="输入框id" :value="选项.filter(a=>值.includes(a.值)).map(a=>a.名称).join(', ')" />
    <div
      style="display: none; position: absolute; left: 0px; top: 0px; border-style: solid; border-width: 1px; background-color: #FFFFFF;"
      :id="弹框id"
    >
      <div
        style="position: relative; z-index:100; left: 0px; top: 0px;"
        onmouseover="this.style.backgroundColor = 'rgb(29,144,255)'"
        onmouseout="this.style.backgroundColor = '#FFFFFF'"
        v-for="item in 选项"
        :key="item.值"
        @click="选择(item.值)"
      >
        <span>
          <input type="checkbox" :name="item.名称" :value="item.值" :checked="值.includes(item.值)" />
          {{item.名称}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";
import cuid from "cuid";

export default 构造vue组件({
  name: "duoxuanxialakuang",
  数据: {
    名称: "多选下拉框",
    输入框id: "",
    弹框id: "",
    选项: [
      { 名称: "一", 值: "a" },
      { 名称: "二", 值: "b" },
    ],
    值: ["a"],
  },
  async 延时构造() {
    this.输入框id = cuid();
    this.弹框id = cuid();

    setTimeout(() => {
      var 输入框 = document.getElementById(this.输入框id);
      var 弹框 = document.getElementById(this.弹框id);

      document.addEventListener("click", function (e) {
        if (e.target == 输入框 || e.target.parentNode == 弹框) {
          var 输入框模型 = 输入框.getBoundingClientRect();
          var 输入框父级模型 = 输入框.parentNode.getBoundingClientRect();
          var 输入框宽度 = 输入框模型.width;
          var 输入框高度 = 输入框模型.height;
          var 输入框x = 输入框模型.x || 输入框模型.left;
          var 输入框y = 输入框模型.y || 输入框模型.top;
          var 输入框父级x = 输入框父级模型.x || 输入框父级模型.left;
          var 输入框父级y = 输入框父级模型.y || 输入框父级模型.top;

          if (弹框 == null) return;

          弹框.style.width = 输入框宽度 + "px";
          弹框.style.left =
            输入框x + document.documentElement.scrollLeft - 输入框父级x + "px";
          弹框.style.top =
            输入框y +
            document.documentElement.scrollTop -
            输入框父级y +
            输入框高度 +
            "px";
          弹框.style.display = "block";
        } else {
          弹框.style.display = "none";
        }
      });
    }, 0);
  },
  函数: {
    选择(值) {
      if (this.值.includes(值)) {
        this.值 = this.值.filter((a) => a != 值);
      } else {
        this.值.push(值);
      }
    },
  },
});
</script>


