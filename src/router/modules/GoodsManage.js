import Layout from '@/layout'
export default {
  path: '/goodsManage',
  name: 'GoodsManage',
  component: Layout,
  meta: { title: '商品管理', icon: 'shangpin' },
  children: [
    {
      path: 'goodsState',
      name: 'GoodsState',
      component: () => import('@/views/attendances/compoents/goodsState.vue'),
      meta: { title: '商品类型' },
    },
    {
      path: 'goodsManage',
      name: 'GoodsManage',
      component: () => import('@/views/attendances/compoents/goodsManage.vue'),
      meta: { title: '商品管理' },
    },
  ],
}
