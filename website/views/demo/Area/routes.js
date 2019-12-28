export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础面积图',
    path: 'default',
    component: () => import('./area-default.md')
  },
  {
    title: '堆叠面积图',
    path: 'stack',
    component: () => import('./area-stack.md')
  },
  {
    title: '区间面积图',
    path: 'range',
    component: () => import('./area-range.md')
  },
  {
    title: '其它',
    path: 'others',
    component: () => import('./area-others.md')
  }
]
