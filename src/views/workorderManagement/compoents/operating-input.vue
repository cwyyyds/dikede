<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="工单编号">
      <el-input v-model="formInline.user" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="工单状态">
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: '',
        region: '',
      },
    }
  },

  created() {},

  methods: {
    onSubmit() {
      console.log('submit!')
    },
  },
}
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0;
}
</style>
