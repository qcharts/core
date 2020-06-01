export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基本使用',
    path: 'default',
    component: () => import('./basic.md')
  },
  {
    title: '自定义',
    path: 'shape',
    component: () => import('./shape.md')
  }
]
