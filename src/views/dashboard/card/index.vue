<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <CardItem iconSum="el-icon-s-custom" bgcCar="bgc1" ztext="自习人数" :toSum="126" :startVal="99" :continues="1600"/>
      </el-col>
      <el-col :span="6">
        <CardItem iconSum="el-icon-money" bgcCar="bgc2" ztext="今日收益" :toSum="2465" :startVal="1699" :continues="2000"/>
      </el-col>
      <el-col :span="6">
        <CardItem iconSum="el-icon-s-promotion" bgcCar="bgc3" ztext="当日访问" :toSum="4651" :startVal="2451" :continues="2100"/>
      </el-col>
      <el-col :span="6">
        <CardItem iconSum="el-icon-table-lamp" bgcCar="bgc4" ztext="剩余座位" :toSum="67" :startVal="106" :continues="1300"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CardItem from "./cardItem";
export default {
  name: "Card",
  components: {
    CardItem,
  },
};
</script>

<style lang='less' scoped>
</style>