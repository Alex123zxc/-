<template>
  <div class="pies" ref="bin"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Pie",
  mounted() {
    let pieChart = echarts.init(this.$refs.bin);
    pieChart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周天"],
      },
      title: {
        text: "本周学习人数占比",
        left:100,
        top:260,
        textStyle:{
          color:"#009966"
        }
      },
      series: [
        {
          name: "学习人数",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { value: 150, name: "周一" },
            { value: 89, name: "周二" },
            { value: 85, name: "周三" },
            { value: 120, name: "周四" },
            { value: 130, name: "周五" },
            { value: 43, name: "周六" },
            { value: 89, name: "周日" },
          ],
          animationEasing: "cubicInOut",
          animationDuration: 2600,
        },
      ],
    });
  },
};
</script>

<style scoped>
.pies {
  height: 360px;
}
</style>