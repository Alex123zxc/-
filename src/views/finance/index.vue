<template>
  <div class="finances">
    <el-row :gutter="20">
      <!-- 排行榜 -->
      <el-col :span="16"
        ><div class="rankingList">
          <el-table :data="tableData" stripe style="width: 100%" height="336">
            <el-table-column prop="address" label="分店地址"> </el-table-column>
            <el-table-column prop="proof" label="本月收入" align="center">
              <template slot-scope="{ row }">
                <span
                  :style="{ color: row.proof.includes('-') ? '#F37211' : '#00E4DC' }"
                  >{{ row.proof }}</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="expend" label="本月支出" align="center">
              <template slot-scope="{ row }">
                <span
                  :style="{ color: row.expend.includes('-') ? '#F37211' : '#00E4DC' }"
                  >{{ row.expend }}</span
                >
              </template>
            </el-table-column>
            <el-table-column prop="profit" label="本月利润" align="center" >
              <template slot-scope="{ row }">
                <span
                  style="color:#EB7674" :class="{ 'specialRow': row.specialRow }"
                  >{{ row.profit }}</span
                >
              </template>
            </el-table-column>
          </el-table></div
      ></el-col>
      <!-- 支出 -->
      <el-col :span="8"><div class="expend">456</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "finance",
  data() {
    return {
      tableData: [
        {
          address: "武汉汉口店",
          proof: "+7.85%",
          expend: "-4.69%",
          profit: "96,420",
        },
        {
          address: "湖南长沙店",
          proof: "-3.56%",
          expend: "+1.69%",
          profit: "89,589",
        },
        {
          address: "武汉武昌店",
          proof: "+8.13%",
          expend: "-3.89%",
          profit: "83,288",
        },
        {
          address: "荆州沙市店",
          proof: "+7.85%",
          expend: "+6.98%",
          profit: "80,420",
          specialRow: true,
        },
        {
          address: "荆州荆州店",
          proof: "-4.39%",
          expend: "-9.68%",
          profit: "71,960",
        },
        {
          address: "十堰郧阳店",
          proof: "+6.38%",
          expend: "-3.57%",
          profit: "65,489",
        },
        {
          address: "孝感孝昌店",
          proof: "-2.98%",
          expend: "+1.69%",
          profit: "62,239",
        },
        {
          address: "孝感云梦店",
          proof: "-19.68%",
          expend: "-9.32%",
          profit: "61,420",
        },
        {
          address: "十堰郧西店",
          proof: "+7.85%",
          expend: "-4.69%",
          profit: "59,420",
        },
        {
          address: "荆州松滋店",
          proof: "+6.57%",
          expend: "+6.10%",
          profit: "56,770",
        },
      ],
    };
  },
};
</script>

<style scoped>
.rankingList {
  height: 350px;
  background-color: #fff;
  font-weight: 900;
  border-radius: 10px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.expend {
  height: 350px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.specialRow::before {
  content: "";
  position: absolute;
  top: 0;
  left: -1px;
  height: 100%;
  width: 2px;
  background-color: #23c6c8;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.specialRow:hover::before {
  transform: scaleX(1);
}
</style>