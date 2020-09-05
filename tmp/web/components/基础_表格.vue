<template>
  <table
    border="1"
    cellspacing="0"
    cellpadding="0"
    width="auto"
    height="auto"
    :style="`
          border-collapse: collapse;
          word-break:break-all;
          word-wrap:break-word;
        `"
  >
    <th
      v-for="表头项 in 表头"
      v-show="是否显示(表头项.名称)"
      :key="表头项.名称"
      :style="`text-align:center;`"
    >{{表头项.名称}}</th>
    <tr class="ivu-table-row" v-for="(行数据,行号) in 数据" :key="行号">
      <td v-for="表头对象 in 表头" :key="行号+'_'+表头对象.名称" v-show="是否显示(表头对象.名称)">
        <div
          @click="点击事件({行号,列名:表头对象.名称,数据:行数据[表头对象.名称],行数据})"
          :style="样式预处理函数({行号,列名:表头对象.名称,数据:行数据[表头对象.名称],行数据}).join(';')"
        >
          <span>{{ 数据预处理函数({行号,列名:表头对象.名称,数据:行数据[表头对象.名称],行数据}) }}</span>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "biaoge",
  数据: {
    表头: [{ 名称: "a" }, { 名称: "b" }, { 名称: "c" }],
    数据: [
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 2, c: 3 },
    ],
    要显示的列: [{ 名称: "a" }, { 名称: "c" }],
    样式预处理函数: function ({ 行号, 列名, 数据, 行数据 }) {
      return [];
    },
    数据预处理函数: function ({ 行号, 列名, 数据, 行数据 }) {
      return 数据;
    },
    点击事件: function ({ 行号, 列名, 数据 }) {
      return;
    },
  },
  延时构造() {},
  函数: {
    是否显示(列名) {
      return this.要显示的列.filter((a) => a.名称 == 列名).length != 0;
    },
  },
  计算属性: {},
});
</script>
