<template>
  <div class="staff">
    <div class="staff-container">
      岗位编码<el-input
        class="staffItem"
        size="small"
        v-model="input"
        placeholder="请输入岗位编码"
      ></el-input>
      岗位名称<el-input
        class="staffItem"
        size="small"
        v-model="input"
        placeholder="请输入岗位名称"
      ></el-input>
      岗位薪水<el-input
        class="staffItem"
        size="small"
        v-model="input"
        placeholder="请输入岗位薪水"
      ></el-input>
      状态<el-select
        size="small"
        class="staffItem"
        v-model="value"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button @click="getPlus()" type="primary" size="small" icon="el-icon-plus"
        >新增</el-button
      >
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column label="岗位编号"  align="center" type="index">
      </el-table-column>
      <el-table-column prop="code" label="岗位编码" width="180" align="center">
      </el-table-column>
      <el-table-column prop="name" label="岗位名称" align="center">
      </el-table-column>
      <el-table-column prop="salary" label="薪水" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center" type="inde">
        <template slot-scope="scope">
        <el-tag
          :type="scope.row.status === '在岗' ? 'success' : 'warning'"
          disable-transitions>{{scope.row.status}}</el-tag>
      </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" align="center" width="180">
      </el-table-column>
      <el-table-column label="操作" align="center"> 
        <template slot-scope="scope">
        <el-button
          size="mini"
          class="butcolor"
          @click="getModify()">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="getDelete()">删除</el-button>
      </template>
      </el-table-column>
    </el-table>
    <el-pagination class="paging" background layout="prev, pager, next" :total="100">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "StaffManagement",
  data() {
    return {
      tableData: [
        {
          code: "manager",
          name: "经理",
          salary: "9300元",
          status: "在岗",
          name: "周富江",
          createTime: "2022-10-21 14:05:31",
        },
        {
          code: "buyer",
          name: "采购员",
          salary: "5000元",
          status: "在岗",
          name: "李双一",
          createTime: "2022-11-19 09:15:20",
        },
        {
          code: "cleaner",
          name: "清洁工",
          salary: "4200元",
          status: "离职",
          name: "刘渊",
          createTime: "2022-12-03 10:07:59",
        },
        {
          code: "propagandist",
          name: "宣传员",
          salary: "3800元",
          status: "在岗",
          name: "孙押切",
          createTime: "2022-12-23 15:52:11",
        },
        {
          code: "maintain",
          name: "系统维护员",
          salary: "7800元",
          status: "离职",
          name: "马奇玛",
          createTime: "2022-12-28 19:12:13",
        },
        {
          code: "cleaner",
          name: "清洁工",
          salary: "4300元",
          status: "在岗",
          name: "魏千鹤",
          createTime: "2023-01-12 12:54:52",
        },
        {
          code: "maintain",
          name: "系统维护员",
          salary: "7800元",
          status: "在岗",
          name: "赵川秋",
          createTime: "2023-02-18 18:56:56",
        },
        {
          code: "cleaner",
          name: "清洁工",
          salary: "4300元",
          status: "离职",
          name: "张桐绘",
          createTime: "2023-03-06 10:44:52",
        },
     
      ],
      options: [
        {
          value: "选项1",
          label: "在岗",
        },
        {
          value: "选项2",
          label: "离职",
        },
      ],
      value: "",
    };
  },
  methods:{
    getPlus(){

    },
    getModify(){

    },
    getDelete(){
      
    }
  }
};
</script>

<style scoped>
.staff-container {
  display: flex;
  line-height: 33px;
  font-size: 14px;
  color: #606266;
  font-weight: 700;
  margin-bottom: 20px;
}
.staffItem {
  box-sizing: border-box;
  width: 125px;
  margin: 0 50px 0 10px;
}
.el-table {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}
.paging {
  margin-top: 20px;
  text-align: center;
}
.butcolor{
  background-color: #0099CC;
  color:#fff;
}
</style>