<template>
  <rongqi into_主轴对齐方式="起点" into_交叉轴对齐方式="起点" into_多轴对齐方式="起点">
    <xiangmu into_宽度="100%" into_文字对齐方式="左">
      <anniuzu :into_描述="[{名称:'测试'}]" @测试="测试()"></anniuzu>
    </xiangmu>
    <div>--------------------------------------</div>
    <xiangmu into_宽度="100%" into_文字对齐方式="左" :into_放大比例="1">
      <rizhi></rizhi>
    </xiangmu>
  </rongqi>
</template>

<script>
import 构造vue组件 from "@webLib/构造vue组件";
import { post } from "@webLib/index";

export default 构造vue组件({
  函数: {
    async 测试() {
      var r = await post("/api/test")({});
      console.log(r);
    }
  }
});
</script>
