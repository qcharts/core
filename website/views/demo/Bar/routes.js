export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础条形图',
    path: 'default',
    component: () => import('./default-bar.md')
  },
  {
    title: '分组条形图',
    path: 'group',
    component: () => import('./group-bar.md')
  },
  {
    title: '堆叠条形图',
    path: 'stack',
    component: () => import('./stack-bar.md')
  }
  // {
  //   title: '数据更新',
  //   path: 'update',
  //   component: () => import('./update-bar.md')
  // }
]
