import Layout from '@/layout'
export default {
  path: '/orderManagement',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/orderManagement'),
      meta: { title: '订单管理', icon: 'dingdan' },
    },
  ],
}
