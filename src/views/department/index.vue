<template>
  <div class="depart">
    <!-- 左侧 -->
    <div class="tree">
      <el-input
        v-model="department"
        placeholder="请输入部门名称"
        class="depart-input"
        prefix-icon="el-icon-search"
        autofocus="true"
        style="width: 145px"
      ></el-input>
      <el-tree
        :data="treeData"
        :props="defaultProps"
        node-key="id"
        :default-expanded-keys="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]"
      ></el-tree>
    </div>
    <!-- 右侧 -->
    <div class="search">
      <div class="search-item1">
        关键字<el-input
          v-model="keyWords"
          placeholder="请输入用户账号或姓名"
          style="width: 200px; margin-left: 10px"
        ></el-input>
      </div>
      <div class="search-item1">
        手机号码<el-input
          v-model="keyWords"
          placeholder="请输入手机号码"
          style="width: 200px; margin-left: 10px"
        ></el-input>
      </div>
      <div class="search-item1">
        状态<el-select
          v-model="value"
          placeholder="用户状态"
          style="margin-left: 26px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="search-item2">
        创建时间<el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="margin-left: 10px"
        >
        </el-date-picker>
      </div>
      <div class="button-group">
        <el-button type="primary" icon="el-icon-s-order">查询</el-button>
        <el-button icon="el-icon-s-release">重置</el-button>
        <el-button type="success" icon="el-icon-plus">新增</el-button>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 96%; margin: 0 0 10px 15px"
        @selection-change=""
      >
        <el-table-column type="selection" width="55" align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="账户名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="nickName"
          label="用户昵称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="department"
          label="部门"
          align="center"
          width="100"
        ></el-table-column>
        <el-table-column
          prop="telephone"
          label="手机号"
          align="center"
        ></el-table-column>
        <el-table-column prop="status" label="状态" align="center">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.status === '在岗' ? 'success' : 'warning'"
              disable-transitions
              >{{ scope.row.status }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="创建时间"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="dialogVisible = true"
              >修改</el-button
            >
            <el-button type="text" size="small" @click="getDelete(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="50"
          style="text-align: center; margin: 20px 20px"
        >
        </el-pagination>
      </div>
    </div>
    <!-- 遮罩层 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="form.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Department",
  data() {
    return {
      // 左侧数据
      department: "",
      treeData: [
        {
          label: "知光自习室",
          children: [
            {
              label: "成都总公司",
              id: 1,
              children: [
                {
                  label: "研发部门",
                  id: 2,
                },
                {
                  label: "市场部门",
                  id: 3,
                },
                {
                  label: "测试部门",
                  id: 4,
                },
                {
                  label: "财务部门",
                  id: 5,
                },
                {
                  label: "运维部门",
                  id: 6,
                },
              ],
            },
            {
              label: "武汉分公司",
              id: 7,
              children: [
                {
                  label: "市场部门",
                  id: 8,
                },
                {
                  label: "财务部门",
                  id: 9,
                },
              ],
            },
            {
              label: "长沙分公司",
              id: 10,
              children: [
                {
                  label: "研发部门",
                  id: 11,
                },
                {
                  label: "市场部门",
                  id: 12,
                },
                {
                  label: "财务部门",
                  id: 13,
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      // 右侧数据
      keyWords: "",
      options: [
        {
          value: "选项1",
          label: "启用",
        },
        {
          value: "选项2",
          label: "禁用",
        },
      ],
      value: "",
      value1: "",
      value2: "",
      tableData: [
        {
          name: "charGTP",
          nickName: "小李",
          department: "深圳总公司研发部门",
          telephone: "180...",
          status: "请假",
          createTime: "2021...",
        },
        {
          name: "scss",
          nickName: "天天",
          department: "深圳总公司运维部门",
          telephone: "137...",
          status: "在岗",
          createTime: "2022...",
        },
        {
          name: "nsdd",
          nickName: "宁次",
          department: "武汉分公司市场部门",
          telephone: "135...",
          status: "在岗",
          createTime: "2023...",
        },
        {
          name: "Boomer",
          nickName: "山椒鱼",
          department: "深圳总公司财务部门",
          telephone: "130...",
          status: "在岗",
          createTime: "2023...",
        },
        {
          name: "Firm",
          nickName: "扦插",
          department: "长沙分公司财务部门",
          telephone: "173...",
          status: "在岗",
          createTime: "2023...",
        },
        {
          name: "NOcap",
          nickName: "花火",
          department: "长沙分公司研发部门",
          telephone: "172...",
          status: "在岗",
          createTime: "2022...",
        },
        {
          name: "basic",
          nickName: "鹿丸",
          department: "深圳总公司测试部门",
          telephone: "155...",
          status: "请假",
          createTime: "2021...",
        },
        {
          name: "Retweet",
          nickName: "蛤蟆广",
          department: "深圳总公司市场部门",
          telephone: "169...",
          status: "在岗",
          createTime: "2022...",
        },
        {
          name: "cuteFit",
          nickName: "井野",
          department: "武汉分公司市场部门",
          telephone: "196...",
          status: "在岗",
          createTime: "2021...",
        },
        {
          name: "ForReal",
          nickName: "赤丸",
          department: "长沙分公司财务部门",
          telephone: "168...",
          status: "在岗",
          createTime: "2020...",
        },
        {
          name: "red",
          nickName: "雏田",
          department: "深圳总公司研发部门",
          telephone: "177...",
          status: "请假",
          createTime: "2022...",
        },
      ],
      multipleSelection: [],
      // 遮罩层
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    // 删除
    getDelete(index) {
      this.tableData.splice(index, 1);
    },
    // 点击弹出表单
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.depart {
  display: flex;
}
/* 左侧 */
.tree {
  flex: 1;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.05);
}
.tree:hover {
  box-shadow: 0px 5px 20px rgba(131, 126, 126, 0.45);
}
.depart-input {
  font-weight: 700;
  width: 160px;
  margin: 25px 0 0 10px;
}
.el-tree {
  margin: 5px 0 0 18px;
}
/* 右侧 */
.search {
  flex: 5;
  margin-left: 10px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.05);
}
.search:hover {
  box-shadow: 0px 5px 20px rgba(131, 126, 126, 0.45);
}
.search-item1 {
  width: 290px;
  float: left;
  margin: 24px 0 10px 40px;
}
.search-item2 {
  width: 450px;
  float: left;
  margin: 24px 0 10px 40px;
}
.button-group {
  float: left;
  margin: 30px 0 30px 96px;
}
/* 右侧表格 */
</style>