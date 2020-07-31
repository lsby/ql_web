<template>
  <shangxia 数据_上放大比例="0" 数据_下放大比例="1">
    <template #上>
      <anniuzu
        :数据_描述="[
          {名称:'post测试'},
          {名称:'ws测试'},
          {名称:'后退'},
        ]"
        @post测试="post测试()"
        @ws测试="ws测试()"
        @后退="$路由.后退()"
      ></anniuzu>
    </template>
    <template #下>
      <zuoyou 数据_高度="100%" 数据_容器高度="100%" 数据_左宽度="50%" 数据_右宽度="50%">
        <template #左>
          <rizhi :数据_内容="日志" style="height:100%;"></rizhi>
        </template>
        <template #右>
          <rizhi :数据_内容="日志" style="height:100%;"></rizhi>
        </template>
      </zuoyou>
    </template>
  </shangxia>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";
import { post } from "@lib/post";
import 获取get参数 from "@lib/获取get参数";

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
