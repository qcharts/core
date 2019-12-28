export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础图',
    path: 'default',
    component: () => import('./funnel-default.md')
  },
  {
    title: '其他',
    path: 'others',
    component: () => import('./funnel-others.md')
  }
]
