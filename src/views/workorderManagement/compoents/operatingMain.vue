<template>
  <div>
    <div class="buttons">
      <buttons :backgroundS="backgroundAdd" :text="textAdd" :iconS="iconAdd" />
      <buttons :backgroundS="backgroundF" :text="textF" :colorS="colorF" />
    </div>
    <div>
      <table cellspacing="0">
        <thead>
          <th>序号</th>
          <th>工单编号</th>
          <th>设备编号</th>
          <th>工单类型</th>
          <th>工单方式</th>
          <th>工单状态</th>
          <th>运营人员</th>
          <th>创建日期</th>
          <th>操作</th>
        </thead>
        <tr v-for="(item, index) in getWorkOrderList" :key="item.taskId">
          <td>{{ index }}</td>
          <td>{{ item.taskCode }}</td>
          <td>{{ item.innerCode }}</td>
          <td>{{ item.taskType.typeName }}</td>
          <td>手动</td>
          <td>{{ item.taskStatusTypeEntity.statusName }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.createTime }}</td>
          <td><a href="">查看详情</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import buttons from '@/components/button'
export default {
  props: {
    getWorkOrderList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      backgroundAdd: 'orange',
      iconAdd: 'el-icon-circle-plus-outline',
      textAdd: '新建',
      backgroundF: '#FBF4F0',
      textF: '工单配置',
      colorF: '#000',
    }
  },

  components: {
    buttons,
  },
  created() {},

  methods: {},
}
</script>

<style scoped lang="scss">
.buttons {
  margin-bottom: 20px;
}
table {
  width: 100%;
  thead {
    background-color: #f3f6fb;
    th {
      color: #9d9ea0;
      font-weight: normal;
      text-align: left;
      height: 48px;
    }
  }
  td {
    color: #666;
    height: 48px;
  }
}
</style>
