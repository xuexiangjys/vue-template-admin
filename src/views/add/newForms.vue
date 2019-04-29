<template>
  <div class="app-container">
    <el-row style="margin-top: 20px;">
      <el-col :span="14" :offset="4">
        <header class="form_header">添加表单</header>
        <el-form :model="dataForm" :rules="formrules" ref="dataForm" label-width="110px" class="form data_form">
          <el-form-item label="表单名" prop="name">
            <el-input v-model="dataForm.name" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addForm()">添加</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataForm: {},
        formrules: {}
      };
    },
    created() {},
    methods: {
      addForm() {
        this.$refs['dataForm'].validate(valid => {
          if (valid) {
            this.$notify({
              title: '成功',
              message: '成功添加！',
              type: 'success'
            });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm() {
        this.$refs['dataForm'].resetFields();
      }
    }
  };

</script>

<style lang="scss">
  @import "../../styles/mixin";

  .form_header {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
  }

  .data_form {
    border: 1px solid #eaeefb;
    padding: 15px 15px 0;
  }

</style>
