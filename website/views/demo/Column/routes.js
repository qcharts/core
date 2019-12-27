export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },

  {
    title: '基础柱状图',
    path: 'default',
    component: () => import('./default-column.md')
  },
  {
    title: '分组柱状图',
    path: 'group',
    component: () => import('./group-column.md')
  },
  {
    title: '堆叠柱状图',
    path: 'stack',
    component: () => import('./stack-column.md')
  },
  {
    title: '其他',
    path: 'others',
    component: () => import('./others-column.md')
  }
]
