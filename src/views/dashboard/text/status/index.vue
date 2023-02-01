<template>
  <el-table
    :data="list"
    style="border-radius: 5px"
    :row-class-name="tableRowClassName"
  >
    <el-table-column label="订单" min-width="200" prop="Order_No">
    </el-table-column>
    <el-table-column label="价格" width="195" align="center" prop="Price">
    </el-table-column>
    <el-table-column label="状态" width="100" align="center" prop="Status">
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Status",
  mounted() {
    this.$store.dispatch("getStatus");
  },
  methods: {
    tableRowClassName({row, rowIndex}) {
        if (rowIndex === 5) {
          return 'warning-row';
        } else if (rowIndex === 7) {
          return 'success-row';
        }
      }
  },
  computed: {
    ...mapState({
      list: (state) => state.home.list,
    }),
  },
};
</script>

<style scoped>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>