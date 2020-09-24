<template>
  <div>
    <span>
      <button type="button" class="btn btn-secondary" @click="上一页()">上一页</button>
    </span>
    <span>
      <button
        type="button"
        :class="当前页==i?'btn btn-primary':'btn btn-secondary'"
        v-for="i in 可选页"
        :key="i"
        @click="点击事件(i)"
      >{{i}}</button>
    </span>
    <span>
      <button type="button" class="btn btn-secondary" @click="下一页()">下一页</button>
    </span>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "fenye",
  数据: {
    总行数: 100,
    每页项目数: 10,
    当前页: 1,
  },
  延时构造() {},
  函数: {
    上一页() {
      if (this.当前页 == 1) return;
      this.当前页--;
    },
    下一页() {
      if (this.当前页 == this.总页数) return;
      this.当前页++;
    },
    点击事件(i) {
      if (i != "...") {
        this.当前页 = i;
      }
    },
  },
  计算属性: {
    总页数() {
      return Math.ceil(this.总行数 / this.每页项目数);
    },
    可选页() {
      if (this.总页数 <= 6)
        return Array(this.总页数)
          .fill(null)
          .map((a, i) => i + 1);
      var r = Array(this.总页数)
        .fill(null)
        .map((a, i) => i + 1)
        .filter(
          (a, i, arr) =>
            a == 1 ||
            a == 2 ||
            a == 3 ||
            a == this.当前页 ||
            a == arr.length - 2 ||
            a == arr.length - 1 ||
            a == arr.length
        );
      if (this.当前页 == 4) {
        r.splice(4, 0, "...");
      } else if (this.当前页 == this.总页数 - 3) {
        r.splice(3, 0, "...");
      } else if (this.当前页 > 4 && this.当前页 < this.总页数 - 3) {
        r.splice(3, 0, "...");
        r.splice(5, 0, "...");
      } else if (this.当前页 <= 3 || this.当前页 >= this.总页数 - 3) {
        r.splice(3, 0, "...");
      }

      return r;
    },
  },
});
</script>
