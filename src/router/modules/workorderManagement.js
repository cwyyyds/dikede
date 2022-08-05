import Layout from '@/layout'
export default {
  path: '/workorderManagement',
  component: Layout,
  name: 'Approvals',
  meta: { title: '工单管理', icon: 'gongdan' },
  children: [
    {
      path: 'operating',
      name: 'Operating',
      component: () =>
        import('@/views/workorderManagement/compoents/operating.vue'),
      meta: { title: '运营工单' },
    },
    {
      path: 'operations',
      name: 'Operations',
      component: () =>
        import('@/views/workorderManagement/compoents/operations.vue'),
      meta: { title: '运维工单' },
    },
  ],
}
