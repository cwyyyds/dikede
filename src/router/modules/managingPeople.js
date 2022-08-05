import Layout from '@/layout'
export default {
  path: '/managingPeople',
  name: 'ManagingPeople',
  component: Layout,
  meta: { title: '人员管理', icon: 'renyuan' },
  children: [
    {
      path: 'peopleList',
      name: 'PeopleList',
      component: () =>
        import('@/views/managingPeople/compoents/peopleList.vue'),
      meta: { title: '人员列表' },
    },
    {
      path: 'peopelStatistical',
      name: 'PeopelStatistical',
      component: () =>
        import('@/views/managingPeople/compoents/peopelStatistical.vue'),
      meta: { title: '人员统计' },
    },
    {
      path: 'workloadList',
      name: 'WorkloadList',
      component: () =>
        import('@/views/managingPeople/compoents/workloadList.vue'),
      meta: { title: '工作量列表' },
    },
  ],
}
