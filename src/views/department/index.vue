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
          v-model="telephone"
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
        <el-button type="primary" icon="el-icon-s-order" @click="getFind()"
          >查询</el-button
        >
        <el-button icon="el-icon-s-release" @click="getReset()">重置</el-button>
        <el-button type="success" icon="el-icon-plus" @click="getPlus()"
          >新增</el-button
        >
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
            <el-button type="text" size="small" @click="getModify(scope.$index)"
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
    <!-- 修改遮罩层 -->
    <el-dialog
      title="修改用户"
      :visible.sync="dialogVisible"
      width="55%"
      top="10vh"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item
          label="用户名称"
          style="display: inline-block"
          prop="name"
        >
          <el-input v-model="form.name" placeholder="请输入用户名称"></el-input>
        </el-form-item>

        <el-form-item
          label="用户昵称"
          style="display: inline-block; margin-left: 120px"
          prop="nickName"
        >
          <el-input
            v-model="form.nickName"
            placeholder="请输入用户昵称"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="手机号码"
          style="display: inline-block"
          prop="telephone"
        >
          <el-input
            v-model="form.telephone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="部门名称"
          style="display: inline-block; margin-left: 104px"
          prop="department"
        >
          <el-select v-model="form.department" placeholder="请选择部门名称">
            <el-option
              label="成都总公司研发部门"
              value="成都总公司研发部门"
            ></el-option>
            <el-option
              label="成都总公司市场部门"
              value="成都总公司市场部门"
            ></el-option>
            <el-option
              label="成都总公司测试部门"
              value="成都总公司测试部门"
            ></el-option>
            <el-option
              label="成都总公司财务部门"
              value="成都总公司财务部门"
            ></el-option>
            <el-option
              label="成都总公司运维部门"
              value="成都总公司运维部门"
            ></el-option>
            <el-option
              label="武汉分公司市场部门"
              value="武汉分公司市场部门"
            ></el-option>
            <el-option
              label="武汉分公司财务部门"
              value="武汉分公司财务部门"
            ></el-option>
            <el-option
              label="长沙分公司研发部门"
              value="长沙分公司研发部门"
            ></el-option>
            <el-option
              label="长沙分公司市场部门"
              value="长沙分公司市场部门"
            ></el-option>
            <el-option
              label="长沙分公司财务部门"
              value="长沙分公司财务部门"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户状态" style="display: inline-block">
          <el-select v-model="form.status" placeholder="请选择状态">
            <el-option label="在岗" value="在岗"></el-option>
            <el-option label="请假" value="请假"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="性别"
          style="display: inline-block; margin-left: 88px"
        >
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男性" value="男性"></el-option>
            <el-option label="女性" value="女性"></el-option>
            <el-option label="保密" value="保密"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户类型" style="display: inline-block">
          <el-radio-group v-model="form.type">
            <el-radio label="后台用户"></el-radio>
            <el-radio label="后台管理员"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="用户描述">
          <el-input type="textarea" v-model="form.textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getSummit()">立即修改</el-button>
          <el-button @click="getClose()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 新增遮罩层 -->
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible2"
      width="55%"
      top="10vh"
      :before-close="handleClose"
    >
      <el-form ref="newForm" :model="newForm" :rules="rules" label-width="80px">
        <el-form-item
          label="用户名称"
          style="display: inline-block"
          prop="name"
        >
          <el-input
            v-model="newForm.name"
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="用户昵称"
          style="display: inline-block; margin-left: 120px"
          prop="nickName"
        >
          <el-input
            v-model="newForm.nickName"
            placeholder="请输入用户昵称"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="手机号码"
          style="display: inline-block"
          prop="telephone"
        >
          <el-input
            v-model="newForm.telephone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="部门名称"
          style="display: inline-block; margin-left: 104px"
          prop="department"
        >
          <el-select v-model="newForm.department" placeholder="请选择部门名称">
            <el-option
              label="成都总公司研发部门"
              value="成都总公司研发部门"
            ></el-option>
            <el-option
              label="成都总公司市场部门"
              value="成都总公司市场部门"
            ></el-option>
            <el-option
              label="成都总公司测试部门"
              value="成都总公司测试部门"
            ></el-option>
            <el-option
              label="成都总公司财务部门"
              value="成都总公司财务部门"
            ></el-option>
            <el-option
              label="成都总公司运维部门"
              value="成都总公司运维部门"
            ></el-option>
            <el-option
              label="武汉分公司市场部门"
              value="武汉分公司市场部门"
            ></el-option>
            <el-option
              label="武汉分公司财务部门"
              value="武汉分公司财务部门"
            ></el-option>
            <el-option
              label="长沙分公司研发部门"
              value="长沙分公司研发部门"
            ></el-option>
            <el-option
              label="长沙分公司市场部门"
              value="长沙分公司市场部门"
            ></el-option>
            <el-option
              label="长沙分公司财务部门"
              value="长沙分公司财务部门"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户状态" style="display: inline-block">
          <el-select v-model="newForm.status" placeholder="请选择状态">
            <el-option label="在岗" value="在岗"></el-option>
            <el-option label="请假" value="请假"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="创建时间"
          style="display: inline-block; margin-left: 88px"
        >
          <el-select v-model="newForm.createTime" placeholder="请选择创建时间">
            <el-option label="2020..." value="2020..."></el-option>
            <el-option label="2021..." value="2021..."></el-option>
            <el-option label="2022..." value="2022..."></el-option>
            <el-option label="2023..." value="2023..."></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户类型" style="display: inline-block">
          <el-radio-group v-model="newForm.type">
            <el-radio label="后台用户"></el-radio>
            <el-radio label="后台管理员"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="用户描述">
          <el-input type="textarea" v-model="newForm.textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getSummit2()">立即创建</el-button>
          <el-button @click="getClose2()">取消</el-button>
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
      options: [
        {
          value: "选项1",
          label: "请假",
        },
        {
          value: "选项2",
          label: "在岗",
        },
      ],
      keyWords: "",
      telephone: "",
      value: "",
      value1: "",

      value2: "",
      tableData: [
        {
          name: "chatGPT",
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
      dialogVisible2: false,
      dialogVisible3: false,
      form: {
        name: "",
        nickName: "",
        telephone: "",
        department: "",
        sex: "",
        status: "",
        type: "",
        textarea: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6个字符", trigger: "blur" },
        ],
        nickName: [
          { required: true, message: "请输入用户昵称", trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8个字符", trigger: "blur" },
        ],
        telephone: [
          { required: true, message: "电话号码不能为空" },
          { type: "number", message: "电话号码必须为数字值" },
        ],
        department: [
          { required: true, message: "请选择部门名称", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      newForm: {
        name: "",
        nickName: "",
        telephone: "",
        department: "",
        createTime: "",
        status: "",
        type: "",
        textarea: "",
      },
      tableIndex: "",
      // 筛选后的数据
      newit: "",
      // 保存的第二份
      tableData2: "",
    };
  },
  methods: {
    // 删除
    getDelete(index) {
      this.tableData.splice(index, 1);
    },
    // 修改
    getModify(index) {
      this.dialogVisible = true;
      this.tableIndex = index;
    },
    // 新增
    getPlus() {
      this.dialogVisible2 = true;
    },
    // 点击x关闭表单
    handleClose(done) {
      done();
    },
    // 点击取消关闭遮罩层
    getClose() {
      this.dialogVisible = false;
    },
    getClose2() {
      this.dialogVisible2 = false;
    },
    // 点击提交按钮将收集到的信息赋给对应的修改
    getSummit() {
        this.dialogVisible = false;
        this.tableData[this.tableIndex].name = this.form.name;
        this.tableData[this.tableIndex].nickName = this.form.nickName;
        this.tableData[this.tableIndex].department = this.form.department;
        this.tableData[this.tableIndex].telephone = this.form.telephone;
        this.tableData[this.tableIndex].status = this.form.status;
      
    },
    getSummit2() {
      this.dialogVisible2 = false;
      this.tableData.push(this.newForm);
    },
    // 设置筛选
    getFind() {
      this.newit = this.tableData.filter((item) => {
        return item.name === this.keyWords || item.nickName === this.keyWords;
      });
      this.tableData2 = this.tableData.slice();
      this.tableData.splice(0, 11);
      this.tableData.push(this.newit[0]);
    },
    // 清除筛选信息
    getReset() {
      this.tableData.splice(0, 1);
      this.tableData.push(
        this.tableData2[0],
        this.tableData2[1],
        this.tableData2[2],
        this.tableData2[3],
        this.tableData2[4],
        this.tableData2[5],
        this.tableData2[6],
        this.tableData2[7],
        this.tableData2[8],
        this.tableData2[9],
        this.tableData2[10]
      );
    },
  },
};
</script>

<style>
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
.el-dialog__title {
  font-size: 25px !important;
  color: rgb(80, 149, 240);
}
</style>