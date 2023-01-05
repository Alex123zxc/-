<template>
  <div class="tem-card">
    <div class="cardsSvg" :class="bgcCar">
      <div :class="iconSum"></div>
    </div>
    <div class="card-panel-description">
      <div class="cards">{{ztext}}</div>
      <count-to
        :start-val="startVal"
        :end-val="toSum"
        :duration="continues"
        class="num"
      ></count-to>
    </div>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  name: "CardItem",
  props: ["iconSum","bgcCar","ztext","toSum","startVal","continues"],
  components: {
    CountTo,
  },
};
</script>

<style scoped>
/* 整个卡片样式 */
.tem-card {
  height: 108px;
  cursor: pointer;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  color: #666;
  background: #fff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
}
.tem-card:hover {
  box-shadow: 0 0 15px rgba(161, 156, 156, 0.45);
}
/* 包裹图标盒子的样式 */
.tem-card .cardsSvg {
  float: left;
  margin: 14px 0 0 14px;
  padding: 16px;
  transition: all 0.38s ease-out;
  border-radius: 6px;
}
/* 鼠标放上后卡片背景颜色 */
.bgc1:hover {
  background-color: #038d11;
}
.bgc2:hover {
  background-color: #b2022e;
}
.bgc3:hover {
  background-color: #002FA7;
}
.bgc4:hover {
  background-color: #f1893f;
}
/* 具体字体图标 */
.tem-card .cardsSvg .el-icon-s-custom,
.el-icon-money,
.el-icon-s-promotion,
.el-icon-table-lamp {
  margin-top:-8px ;
  float: left;
  font-size: 60px;
}

.el-icon-s-custom {
  background: linear-gradient(
    to bottom,
    #038d11,
    #ffff
  );
  -webkit-background-clip: text;
  color: transparent;
}
.el-icon-money {
  background: linear-gradient(
    to bottom,
    #b2022e,
    #ffff
  );
  -webkit-background-clip: text;
  color: transparent;
}
.el-icon-s-promotion{
  background: linear-gradient(
    to bottom,
    #002FA7,
    #ffff
  );
  -webkit-background-clip: text;
  color: transparent;
}
.el-icon-table-lamp{
  background: linear-gradient(
    to bottom,
    #f1893f,
    #ffff
  );
  -webkit-background-clip: text;
  color: transparent;
}


/* 包裹两处文字的盒子 */
.card-panel-description {
  float: right;
  font-weight: bold;
  margin: 26px;
  margin-left: 0px;
}
/* 标题 */
.cards {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}
/* 缓增数字 */
.num {
  font-size: 20px;
}
</style>