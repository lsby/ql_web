<template>
  <div>
    <!-- <div :style="`overflow:auto;width:100%;height:100%;max-height:${表格高度}px`"> -->
    <!-- <table
      border="1"
      cellspacing="0"
      cellpadding="0"
      width="auto"
      height="auto"
      :style="`
          width: ${c_表格宽度}px;
          border-collapse: collapse;
          table-layout: fixed;
          word-break:break-all;
          word-wrap:break-word;
        `"
    >
      <th
        v-for="表头项 in 表头"
        v-show="m_是否显示(表头项.名称)"
        :key="表头项.名称"
        :style="`max-width:${列宽}px;text-align:center`"
      >{{表头项.名称}}</th>
      <tr class="ivu-table-row" v-for="(行数据,行号) in 数据" :key="行号">
        <td v-for="表头对象 in 表头" :key="行号+'_'+表头对象.名称" v-show="m_是否显示(表头对象.名称)">
          <div
            @click="点击事件({行号,列名:表头对象.名称,数据:行数据[表头对象.名称],行数据})"
            :style="样式预处理函数({行号,列名:表头对象.名称,数据:行数据[表头对象.名称]}).join(',')"
          >
            <span>{{ 数据预处理函数({行号,列名:表头对象.名称,数据:行数据[表头对象.名称],行数据}) }}</span>
          </div>
        </td>
      </tr>
    </table>-->
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";
// import * as JT from "@lib/json表";

export default 构造vue组件({
  name: "biaoge",
  //   延时构造() {
  //     this.要显示的列 = this.$深克隆(this.表头);
  //   },
  //   数据: {
  //     列宽: 100,
  //     表格高度: 200,
  //     表头: [{ 名称: "a" }, { 名称: "b" }, { 名称: "c" }],
  //     数据: [
  //       { a: 1, b: 2, c: 3 },
  //       { a: 1, b: 2, c: 3 },
  //       { a: 1, b: 2, c: 3 },
  //     ],
  //     要显示的列: [{ 名称: "a" }, { 名称: "c" }],
  //   },
  //   函数: {
  //     m_是否显示(列名) {
  //       return JT.存在("名称")(列名)(this.要显示的列);
  //     },
  //   },
  //   注入: {
  //     样式预处理函数: function ({ 行号, 列名, 数据, 行数据 }) {
  //       return [];
  //     },
  //     数据预处理函数: function ({ 行号, 列名, 数据, 行数据 }) {
  //       return 数据;
  //     },
  //     点击事件: function ({ 行号, 列名, 数据 }) {
  //       return;
  //     },
  //   },
  //   计算属性: {
  //     c_表格宽度() {
  //       return this.列宽 * this.表头.length;
  //     },
  //   },
});
</script>
