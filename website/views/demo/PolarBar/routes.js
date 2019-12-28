export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },

  {
    title: '基础柱状图',
    path: 'default',
    component: () => import('./default-polarBar.md')
  },
  {
    title: '分组柱状图',
    path: 'group',
    component: () => import('./group-polarBar.md')
  },
  {
    title: '堆叠柱状图',
    path: 'stack',
    component: () => import('./stack-polarBar.md')
  },
  {
    title: '其他',
    path: 'others',
    component: () => import('./others-polarBar.md')
  }
]
