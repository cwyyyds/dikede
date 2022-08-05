import Layout from '@/layout'
export default {
  path: '/dianwei',
  component: Layout,
  name: 'Departments',
  meta: { title: '点位管理', icon: 'dianwei' },
  children: [
    {
      path: 'areaManage',
      name: 'AreaManage',
      component: () => import('@/views/departments/compoents/areaManage.vue'),
      meta: { title: '区域管理' },
    },
    {
      path: 'pointManage',
      name: 'PointManage',
      component: () => import('@/views/departments/compoents/pointManage.vue'),
      meta: { title: '点位管理' },
    },
    {
      path: 'partnersManage',
      name: 'PartnersManage',
      component: () =>
        import('@/views/departments/compoents/partnersManage.vue'),
      meta: { title: '合作商管理' },
    },
  ],
}
