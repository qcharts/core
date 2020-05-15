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
    path: 'symbol',
    component: () => import('./symbol.md')
  }
]
