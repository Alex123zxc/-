<template>
  <div class="depart">
    <!-- 左侧 -->
    <div class="tree">
      <el-input
        v-model="department"
        placeholder="请输入部门名称"
        class="depart-input"
        prefix-icon="el-icon-search"
        autofocus=true
      ></el-input>
      <el-tree :data="treeData" :props="defaultProps" node-key="id" :default-expanded-keys="[1,2,3,4,5,6,7,8,9,10,11,12,13]"></el-tree>
    </div>
    <!-- 右侧 -->
    <div class="search">
      关键字<el-input v-model="keyWords" placeholder="请输入用户账号或姓名"></el-input>
    </div>
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
              id:1,
              children: [
                {
                  label: "研发部门",
                  id:2,
                },
                {
                  label: "市场部门",
                  id:3,
                },
                {
                  label: "测试部门",
                  id:4,
                },
                {
                  label: "财务部门",
                  id:5,
                },
                {
                  label: "运维部门",
                  id:6,
                },
              ],
            },
            {
              label: "武汉分公司",
              id:7,
              children: [
                {
                  label: "市场部门",
                  id:8,
                },
                {
                  label: "财务部门",
                  id:9,
                },
              ],
            },
            {
              label: "长沙分公司",
              id:10,
              children: [
                {
                  label: "研发部门",
                  id:11,
                },
                {
                  label: "市场部门",
                  id:12,
                },
                {
                  label: "财务部门",
                  id:13,
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
      keyWords:'',
    };
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
  width: 180px;
  margin: 25px 0 0 10px;
}
.el-tree {
  margin: 5px 0 0 18px;
}
.search {
  flex: 4;
  margin-left: 10px;
}
/* 右侧 */
.search {
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.05);
}
.search:hover {
  box-shadow: 0px 5px 20px rgba(131, 126, 126, 0.45);
}
</style>