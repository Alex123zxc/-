<template>
  <div class="tuji">
    <el-row>
      <el-col :span="8"><Radar/></el-col>
      <el-col :span="8"><Pie/></el-col>
      <el-col :span="8"><Lines/></el-col>
    </el-row>
  </div>
</template>

<script>
import Radar from "./radar/index.vue";
import Pie from "./pie/index.vue";
import Lines from "./lines/index.vue";
export default {
  name: "Atlas",
  components: {
    Radar,
    Pie,
    Lines,
  },
};
</script>

<style scoped>
.tuji {
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
}
.tuji:hover {
  box-shadow: 0 0 10px rgba(179, 177, 177, 0.45);
}

</style>