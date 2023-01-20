<template>
  <el-table style="border-radius:5px">
    <el-table-column label="订单" min-width="200">
      <template slot-scope="">
        {{ 123 }}
      </template>
    </el-table-column>
    <el-table-column label="价格" width="195" align="center">
      <template slot-scope="">
        {{ 456 }}
      </template>
    </el-table-column>
    <el-table-column label="状态" width="100" align="center">
      <template slot-scope="">
        {{ 789 }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "Status",
  mounted(){
    this.$store.dispatch("getStatus",{})
  }
};
</script>

<style scoped>
</style>