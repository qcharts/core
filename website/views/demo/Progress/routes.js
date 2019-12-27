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

  // {
  //   title: '水波进度',
  //   path: 'wave',
  //   component: () => import('./wave.md')
  // },

  {
    title: '自定义',
    path: 'symbol',
    component: () => import('./symbol.md')
  }

  // {
  //   title: '文字',
  //   path: 'label',
  //   component: () => import('./label.md')
  // }
]
