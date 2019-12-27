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
    title: '图片遮罩',
    path: 'imageMask',
    component: () => import('./imageMask.md')
  }
]
