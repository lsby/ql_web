<template>
  <div>
    <table width="100%" height="100%" border="1">
      <tr>
        <td width="20%" rowspan="3" valign="top">
          <shu></shu>
        </td>
        <td width="80%" valign="top" align="center">
          <shurukuang></shurukuang>
          <xialakuang></xialakuang>
          <riqi></riqi>
          <duoxuanxialakuang></duoxuanxialakuang>
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
  },
  构造函数() {},
  函数: {
    按钮事件(a) {
      console.log(a);
    },
  },
});
</script>
