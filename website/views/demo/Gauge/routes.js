export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '仪表盘',
    path: 'default',
    component: () => import('./default.md')
  },

  {
    title: '刻度调整',
    path: 'tick',
    component: () => import('./tick.md')
  },

  // // {
  // //   title: '文字调整',
  // //   path: 'label',
  // //   component: () => import('./label.md')
  // // },

  {
    title: '其他',
    path: 'other',
    component: () => import('./pointer.md')
  }
]
