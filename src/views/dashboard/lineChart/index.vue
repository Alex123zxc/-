<template>
  <div class="line" ref="lines"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "LineChart",
  data() {
    return {};
  },
  mounted() {
    // 初始化折线图
    let lineCharts = echarts.init(this.$refs.lines);
    lineCharts.setOption({
      xAxis: {
        type: "category",
        data: [
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
        boundaryGap: false,
        axisTick: {
          show: false,
        },
        axisLine:{
          lineStyle:{
            color:"#0099CC"
          }
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle:{
            color:"#0099CC"
          }
        },
      },
      series: [
        {
          data: [
            8000, 8596, 9564, 9262, 10562, 9200, 8900, 6958, 7698, 9862, 9059,
            7029,
          ],
          name: "实际收益",
          itemStyle: {
            normal: {
              color: "#FF9966",
              lineStyle: {
                color: "#FF9966",
                width: 2,
              },
              areaStyle: {
                color: "#FFFFCC",
              },
              borderWidth: 0,
            },
          },
          type: "line",
          smooth: true,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
          symbol: "none",
        },
        {
          data: [
            6852, 7300, 6256, 7802, 8552, 8265, 8100, 7569, 8632, 8752, 10087,
            8952,
          ],
          name: "预期收益",
          itemStyle: {
            normal: {
              color: "#0099CC",
              lineStyle: {
                color: "#0099CC",
                width: 2,
              },
              areaStyle: {
                color: "#99CCFF",
              },
            },
          },
          type: "line",
          smooth: true,
          animationDuration: 2800,
          animationEasing: "cubicInOut",
          symbol: "none",
        },
        {
          name: "维持成本",
          data: [
            2610, 1529, 2842, 3012, 1459, 2987, 1298, 2598, 1988, 2369, 2411,
            3856,
          ],
          type: "line",
          smooth: true,
          itemStyle: {
            normal: {
              color: "#FF6666",
              lineStyle: {
                color: "#FF6666",
                width: 2,
              },
              areaStyle: {
                color: "#FFCCCC",
              },
            },
          },
          animationDuration: 2800,
          animationEasing: "cubicInOut",
          symbol: "none",
        },
      ],
      legend: {
        data: ["实际收益", "预期收益", "维持成本"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
        padding: [5, 10],
      },
    });
  },
};
</script>

<style scoped>
.line {
  height: 430px;
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
}
.line:hover {
  box-shadow: 0 0 10px rgba(179, 177, 177, 0.45);
}
</style>