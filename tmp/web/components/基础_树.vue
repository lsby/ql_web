<template>
  <div>
    <ul v-for="(对象,索引) in 数据.filter(a=>a.父级==层级)" :key="索引" style="margin: 0px;">
      <li class="btn" @click="数据.filter(a=>a.父级==对象.名称).length!=0?'':被选中=对象.名称">
        <i v-if="数据.filter(a=>a.父级==对象.名称).length!=0" class="fa fa-angle-down"></i>
        <i v-else class="fa fa-file-alt"></i>
        <span :class="被选中==对象.名称?'btn btn-info':'btn btn-link'">{{对象.名称}}</span>
      </li>
      <shu :数据_数据="数据" :数据_层级="对象.名称" :数据_被选中.sync="被选中"></shu>
    </ul>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "shu",
  数据: {
    层级: "",
    被选中: "",
    数据: [
      { 名称: "节点1", 父级: "" },
      { 名称: "节点2", 父级: "节点1" },
      { 名称: "节点3", 父级: "节点1" },
      { 名称: "节点4", 父级: "节点3" },
      { 名称: "节点5", 父级: "" },
    ],
  },
  延时构造() {},
  函数: {},
});
</script>
