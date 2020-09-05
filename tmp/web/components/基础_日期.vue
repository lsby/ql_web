<template>
  <span>
    {{名称}}
    <input type="text" id="datepicker" :value="值" />
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

import Pikaday from "pikaday";
import "pikaday/css/pikaday.css";

export default 构造vue组件({
  name: "riqi",
  数据: {
    名称: "日期选择",
    值: "",
  },
  延时构造() {
    var self = this;
    var picker = new Pikaday({
      field: document.getElementById("datepicker"),
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
        weekdaysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      },
      onSelect(date) {
        self.值 = self.格式化(date);
      },
    });
    this.值 = this.格式化(this.值);
  },
  函数: {
    格式化(date) {
      if (date == "" || date == null) date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return `${year}-${month}-${day}`;
    },
  },
});
</script>
