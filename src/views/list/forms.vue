<template>
  <div class="fillcontain">
    <div class="table_container">
      <el-table :data="tableData" v-loading="loading" highlight-current-row style="width: 100%" border>
        <el-table-column type="index" width="80"></el-table-column>
        <el-table-column property="name" label="用户名" width="120"></el-table-column>
        <el-table-column property="password" label="密码" width="120"></el-table-column>
        <el-table-column property="nick" label="别名" width="120"></el-table-column>

        <el-table-column label="操作" min-width="180">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" circle @click="handleEdit(scope.$index, scope.row)">
            </el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="handleDelete(scope.$index, scope.row)">
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.pageNum" :limit.sync="listQuery.pageSize"
        @pagination="fetchData" />

    </div>
  </div>
</template>

<script>
  import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  export default {
    components: {
      Pagination
    },
    data() {
      return {
        tableData: [],
        loading: true,
        total: 0,
        listQuery: {
          pageNum: 1,
          pageSize: 10,
        }
      };
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.tableData = [{
          id: 1,
          name: "zhangshan",
          password: '123',
          nick: '张三'
        }, {
          id: 2,
          name: "lisi",
          password: '123',
          nick: '李四'
        }];
        this.total = 2;
        this.loading = false;
      },
      handleEdit(index, row) {},
      handleDelete(index, row) {},
      updateInfo() {

      }
    }
  };

</script>

<style lang="scss">
  @import "../../styles/mixin";

  .table_container {
    padding: 20px;
  }

</style>
