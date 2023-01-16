<template>
  <div ref="leida" class="lei"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "Radar",
  mounted() {
    let radarCharts = echarts.init(this.$refs.leida);
    radarCharts.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      title:{
        text:"支出费用占比",
        left:182,
        top:30,
        textStyle:{
          color:"#0099CC",
        },
      },
      legend: {
        data: ["第一季度", "第二季度", "第三季度", "第四季度"],
      },
      radar: {
        radius: '66%',
          center: ['50%', '60%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
        indicator: [
          { name: "清洁费", max: 3000 },
          { name: "水电费", max: 800 },
          { name: "房租", max: 6000 },
          { name: "管理费用", max: 8000 },
          { name: "维修费用", max: 1000 },
          { name: "宣传费用", max: 500 },
        ],
      },
      series: [
        {
          type: "radar",
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: "rgba(0,0,0,.2)",
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1,
            },
          },
          data: [
            {
              value: [1400, 652, 5500, 7000, 900, 456],
              name: "第一季度",
            },
            {
              value: [3000, 592, 5500, 3500, 700, 420],
              name: "第二季度",
            },
            {
              value: [1800, 702, 5800, 7400, 600, 385],
              name: "第三季度",
            },
            {
              value: [2100, 450, 5100, 7000, 680, 396],
              name: "第四季度",
            },
          ],
        },
      ],
    });
  },
};
</script>

<style scoped>
.lei {
  height: 360px;
}
</style>