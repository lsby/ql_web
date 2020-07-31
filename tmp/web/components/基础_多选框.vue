<template>
  <span>
    <Checkbox
      v-for="item in 描述"
      :key="item.名称"
      :label="item.名称"
      :value="item.值"
      @input="更新(item.名称, $event)"
      border
    >{{item.名称}}</Checkbox>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";

export default 构造vue组件({
  name: "duoxuankuang",
  数据: {
    描述: [
      { 名称: "1", 值: true },
      { 名称: "2", 值: false },
      { 名称: "3", 值: false }
    ]
  },
  函数: {
    更新(名称, 数据) {
      this.描述 = this.描述.map((a, i) => ({
        名称: a.名称,
        值: a.名称 == 名称 ? 数据 : a.值
      }));
    }
  }
});
</script>
