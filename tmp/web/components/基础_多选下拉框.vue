<template>
  <span>
    {{名称}}
    <v-selectpage
      :data="list"
      key-field="id"
      show-field="name"
      :multiple="true"
      style="display: inline-table;"
      @values="值=$event.map(a=>a.value)"
    ></v-selectpage>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "duoxuanxialakuang",
  数据: {
    list: [
      {
        id: 1,
        value: "The People's Republic of China",
        name: "中华人民共和国",
      },
      { id: 2, value: "United States of America", name: "美利坚合众国" },
      {
        id: 3,
        value: "United Kingdom of Great Britain and Northern Ireland",
        name: "大不列颠及北爱尔兰联合王国",
      },
      { id: 4, value: "Japan", name: "日本" },
      { id: 5, value: "Russian Federation", name: "俄罗斯联邦" },
      {
        id: 6,
        value: "The Federal Republic of Germany",
        name: "德意志联邦共和国",
      },
      { id: 7, value: "French Republic", name: "法兰西共和国" },
      { id: 8, value: "The Kingdom of Spain", name: "西班牙王国" },
      { id: 9, value: "Republic of India", name: "印度共和国" },
      { id: 10, value: "Repubblica Italiana", name: "意大利共和国" },
      { id: 11, value: "Canada", name: "加拿大" },
      { id: 12, value: "The Republic of Argentina", name: "阿根廷共和国" },
      { id: 13, value: "The Kingdom of Sweden", name: "瑞典王国" },
      { id: 14, value: "The Kingdom of Norway", name: "挪威王国" },
      { id: 15, value: "The Czech Republic", name: "捷克共和国" },
    ],
    名称: "多选下拉框",
    值: [],
  },
  延时构造() {},
  函数: {},
});
</script>


