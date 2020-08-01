<template>
  <zuoyou 数据_左宽度="80%" 数据_右宽度="20%">
    <template #左>
      <Select v-model="值" multiple :max-tag-count="1">
        <Option v-for="item in 选项" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </template>
    <template #右>
      <button @click="按钮事件()">{{c_按钮文字}}</button>
    </template>
  </zuoyou>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "duoxuanxialakuang",
  数据: {
    选项: [
      {
        value: "纽约",
        label: "纽约",
      },
      {
        value: "伦敦",
        label: "伦敦",
      },
    ],
    值: [],
  },
  函数: {
    按钮事件() {
      if (this.c_按钮文字 == "全选")
        return (this.值 = this.选项.map((a) => a.value));
      if (this.c_按钮文字 == "清空") return (this.值 = []);
    },
  },
  计算属性: {
    c_按钮文字() {
      if (this.选项.length != this.值.length) return "全选";
      return "清空";
    },
  },
});
</script>
