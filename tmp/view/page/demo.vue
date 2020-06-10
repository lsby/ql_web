<template>
  <rongqi into_主轴对齐方式="起点" into_交叉轴对齐方式="起点" into_多轴对齐方式="起点">
    <xiangmu into_宽度="100%" into_文字对齐方式="左">
      <anniuzu
        :into_描述="[{名称:'post测试'},{名称:'ws测试'},{名称:'后退'}]"
        @post测试="post测试()"
        @ws测试="ws测试()"
        @后退="$路由.后退()"
      ></anniuzu>
    </xiangmu>
    <div>--------------------------------------</div>
    <xiangmu into_宽度="100%" into_文字对齐方式="左" :into_放大比例="1">
      <rizhi :into_内容="日志"></rizhi>
    </xiangmu>
  </rongqi>
</template>

<script>
import 构造vue组件 from "@webLib/构造vue组件";
import { post } from "@webLib/index";
import 获取get参数 from "@webLib/获取get参数";

var get参数 = 获取get参数();
export default 构造vue组件({
  数据: {
    日志: ["欢迎使用 ql_web"]
  },
  延时构造() {
    this.$ws.监听("写日志")(data => this.日志.push(data));
  },
  函数: {
    async post测试() {
      var r = await post("/api/test")({});
      this.日志.push(r);
    },
    async ws测试() {
      this.$ws.提交("ws事件")("ws参数");
    }
  }
});
</script>
