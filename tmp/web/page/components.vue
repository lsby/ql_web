<template>
  <div>
    <table width="100%" height="100%" border="1">
      <tr>
        <td width="20%" rowspan="3" valign="top">
          <shu></shu>
        </td>
        <td width="80%" valign="top" align="center">
          <biaodanzu :数据_数据.sync="表单组数据"></biaodanzu>
          <anniuzu :数据_数据="按钮数据" @按钮1="按钮事件($event)" @按钮2="按钮事件($event)"></anniuzu>
        </td>
      </tr>
      <tr>
        <td valign="top" align="center">
          <biaoge></biaoge>
        </td>
      </tr>
      <tr>
        <td align="center">
          <fenye></fenye>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  数据: {
    按钮数据: [{ 名称: "按钮1" }, { 名称: "按钮2" }],
    表单组数据: [
      { 名称: "输入框", 类型: "输入框", 提示字: "请输入一些文本", 值: "" },
      { 名称: "下拉框", 类型: "下拉框", 值: "" },
      { 名称: "日期选择", 类型: "日期选择", 值: "" },
      { 名称: "多选下拉框", 类型: "多选下拉框", 值: [] },
    ],
  },
  构造函数() {},
  函数: {
    按钮事件(a) {
      console.log(a);
    },
  },
});
</script>
