export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础坐标轴',
    path: 'default',
    component: () => import('./axis-default.md')
  },
  {
    title: '坐标轴样式',
    path: 'style',
    component: () => import('./axis-style.md')
  },
  {
    title: '单独使用',
    path: 'alone',
    component: () => import('./axis-alone.md')
  },
]
