<template>
  <div align="center">
    <div v-for="(name,index) in 数据" :key="index" style="display: inline-block;">
      <span :id="id们[index]" style="width: 400px; height: 400px; display: inline;"></span>
    </div>
  </div>
</template>

<script>
// 需要: npm i echarts
// https://echarts.apache.org/examples/zh/index.html
import 构造vue组件 from "@lib/前端/构造vue组件";
import * as echarts from "echarts";
import cuid from "cuid";

export default 构造vue组件({
  name: "tubiaozu",
  数据: {
    id们: [],
    数据: [
      {
        title: {
          text: "图2",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "30%"],
        },
        visualMap: {
          type: "piecewise",
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [
            {
              gt: 1,
              lt: 3,
              color: "rgba(0, 180, 0, 0.5)",
            },
            {
              gt: 5,
              lt: 7,
              color: "rgba(0, 180, 0, 0.5)",
            },
          ],
        },
        series: [
          {
            type: "line",
            smooth: 0.6,
            symbol: "none",
            lineStyle: {
              color: "green",
              width: 5,
            },
            markLine: {
              symbol: ["none", "none"],
              label: { show: false },
              data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
            },
            areaStyle: {},
            data: [
              ["2019-10-10", 200],
              ["2019-10-11", 400],
              ["2019-10-12", 650],
              ["2019-10-13", 500],
              ["2019-10-14", 250],
              ["2019-10-15", 300],
              ["2019-10-16", 450],
              ["2019-10-17", 300],
              ["2019-10-18", 100],
            ],
          },
        ],
      },
      {
        title: {
          text: "图1",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
          },
        ],
      },
      (function () {
        var data = [];

        for (var i = 0; i <= 100; i++) {
          var theta = (i / 100) * 360;
          var r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
          data.push([r, theta]);
        }

        return {
          title: {
            text: "图3",
          },
          legend: {
            data: ["line"],
          },
          polar: {},
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          angleAxis: {
            type: "value",
            startAngle: 0,
          },
          radiusAxis: {},
          series: [
            {
              coordinateSystem: "polar",
              name: "line",
              type: "line",
              data: data,
            },
          ],
        };
      })(),
    ],
  },
  延时构造() {
    this.$watch(
      (_) => this.数据,
      (_) => this.初始化()
    );
    this.初始化();
  },
  函数: {
    初始化() {
      this.id们 =
        this.id们.length == 0
          ? Array(this.数据.length)
              .fill(null)
              .map((a) => cuid())
          : this.id们;

      setTimeout(() => this.更新(), 0);
    },
    更新() {
      this.数据.forEach((a, i) => {
        var ctx = document.getElementById(this.id们[i]);
        echarts.init(ctx).clear();
        echarts.init(ctx).setOption(a);
      });
    },
  },
});
</script>
