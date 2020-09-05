<template>
  <span>
    {{名称}}
    <v-selectpage
      :data="list"
      key-field="id"
      show-field="name"
      :multiple="true"
      style="display: inline-table;"
      @values="值=$event.map(a=>a.name)"
    ></v-selectpage>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "duoxuanxialakuang",
  数据: {
    list: [
      { id: 1, name: "The People's Republic of China", desc: "中华人民共和国" },
      { id: 2, name: "United States of America", desc: "美利坚合众国" },
      {
        id: 3,
        name: "United Kingdom of Great Britain and Northern Ireland",
        desc: "大不列颠及北爱尔兰联合王国",
      },
      { id: 4, name: "Japan", desc: "日本" },
      { id: 5, name: "Russian Federation", desc: "俄罗斯联邦" },
      {
        id: 6,
        name: "The Federal Republic of Germany",
        desc: "德意志联邦共和国",
      },
      { id: 7, name: "French Republic", desc: "法兰西共和国" },
      { id: 8, name: "The Kingdom of Spain", desc: "西班牙王国" },
      { id: 9, name: "Republic of India", desc: "印度共和国" },
      { id: 10, name: "Repubblica Italiana", desc: "意大利共和国" },
      { id: 11, name: "Canada", desc: "加拿大" },
      { id: 12, name: "The Republic of Argentina", desc: "阿根廷共和国" },
      { id: 13, name: "The Kingdom of Sweden", desc: "瑞典王国" },
      { id: 14, name: "The Kingdom of Norway", desc: "挪威王国" },
      { id: 15, name: "The Czech Republic", desc: "捷克共和国" },
    ],
    名称: "多选下拉框",
    值: [],
  },
  延时构造() {},
  函数: {},
});
</script>


