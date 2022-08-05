import Layout from '@/layout'
export default {
  path: '/employees',
  name: 'Employees',
  component: Layout,
  meta: { title: '设备管理', icon: 'shebei' },
  children: [
    {
      path: 'employeesManage',
      name: 'EmployeesManage',
      component: () =>
        import('@/views/employees/compoents/employeesManage.vue'),
      meta: { title: '设备管理' },
    },
    {
      path: 'employeesState',
      name: 'EmployeesState',
      component: () => import('@/views/employees/compoents/employeesState.vue'),
      meta: { title: '设备状态' },
    },
    {
      path: 'employeesStateManage',
      name: 'EmployeesStateManage',
      component: () =>
        import('@/views/employees/compoents/employeesStateManage.vue'),
      meta: { title: '设备状态管理' },
    },
  ],
}
