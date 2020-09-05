<template>
  <span>
    <span v-for="obj in 数据" :key="obj.名称">
      <shurukuang v-if="obj.类型=='输入框'" :数据_名称="obj.名称" :数据_提示字="obj.提示字" :数据_值.sync="obj.值"></shurukuang>
      <xialakuang v-if="obj.类型=='下拉框'" :数据_名称="obj.名称" :数据_值.sync="obj.值"></xialakuang>
      <riqi v-if="obj.类型=='日期选择'" :数据_名称="obj.名称" :数据_值.sync="obj.值"></riqi>
      <duoxuanxialakuang v-if="obj.类型=='多选下拉框'" :数据_名称="obj.名称" :数据_值.sync="obj.值"></duoxuanxialakuang>
    </span>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "biaodanzu",
  数据: {
    数据: [
      { 名称: "输入框", 类型: "输入框", 提示字: "请输入一些文本", 值: "" },
      { 名称: "下拉框", 类型: "下拉框", 值: "" },
      { 名称: "日期选择", 类型: "日期选择", 值: "" },
      { 名称: "多选下拉框", 类型: "多选下拉框", 值: [] },
    ],
  },
  延时构造() {},
  函数: {},
});
</script>
