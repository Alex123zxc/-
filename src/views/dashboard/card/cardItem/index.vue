<template>
  <div class="tem-card">
    <div class="cardsSvg">
      <div class="cardSvg" icon="el-icon-s-order">
      </div>
    </div>
    <div class="cards"></div>
    <count-to :start-val="0" :end-val="5000" :duration="2100"></count-to>
  </div>
</template>

<script>
import CountTo from "vue-count-to";
export default {
  name: "CardItem",
  components: {
    CountTo,
  },
  props: [],
};
</script>

<style scoped>
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
}
</style>