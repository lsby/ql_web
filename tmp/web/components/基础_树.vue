<template>
  <Tree :data="转换(描述, a=>a.上级=='')" @on-select-change="(组,项)=>$emit('点击项',{组,项})"></Tree>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";

export default 构造vue组件({
  name: "shu",
  数据: {
    描述: [
      { 名称: "1", 上级: "" },
      { 名称: "2", 上级: "" },
      { 名称: "1.1", 上级: "1" },
      { 名称: "1.2", 上级: "1" },
      { 名称: "2.1", 上级: "2" },
      { 名称: "2.1.1", 上级: "2.1" }
    ]
  },
  函数: {
    转换(数据, 筛选条件) {
      return 数据.filter(筛选条件).map(a => ({
        title: a.名称,
        expand: true,
        children: this.转换(数据, b => b.上级 == a.名称)
      }));
    }
  }
});
</script>
