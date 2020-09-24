<template>
  <span>
    {{名称}}
    <input type="text" :id="对象id" :value="值" />
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";
import { 时间格式化 } from "@lib/通用/时间工具";
import lodash from "lodash";
import cuid from "cuid";

import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

export default 构造vue组件({
  name: "riqi",
  数据: {
    对象id: "",
    名称: "日期选择",
    值: "",
  },
  延时构造() {
    this.$watch(
      (_) => this.值,
      (_) => {
        var 格式化时间 = this.格式化(this.值);
        if (!lodash.isEqual(this.值, 格式化时间)) {
          this.值 = 格式化时间;
        }
      }
    );

    this.对象id = cuid();
    var self = this;

    setTimeout(() => {
      var picker = new Pikaday({
        field: document.getElementById(this.对象id),
        firstDay: 1,
        enableSelectionDaysInNextAndPreviousMonths: true,
        keyboardInput: false,
        i18n: {
          previousMonth: "上个月",
          nextMonth: "下个月",
          months: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          weekdaysShort: [
            "周日",
            "周一",
            "周二",
            "周三",
            "周四",
            "周五",
            "周六",
          ],
        },
        onSelect(date) {
          self.值 = date;
        },
      });
      this.值 = new Date();
    }, 0);
  },
  函数: {
    格式化(date) {
      date = new Date(date);
      return 时间格式化(date);
    },
  },
});
</script>
