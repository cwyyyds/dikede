import Layout from '@/layout'
export default {
  path: '/strategicManagement',
  component: Layout,

  children: [
    {
      path: '',
      component: () => import('@/views/strategicManagement'),
      meta: { title: '策略管理', icon: 'celue' },
    },
  ],
}
