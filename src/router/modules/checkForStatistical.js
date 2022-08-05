import Layout from '@/layout'
export default {
  path: '/checkForStatistical',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/checkForStatistical'),
      meta: { title: '对账统计', icon: 'duizhang' },
    },
  ],
}
