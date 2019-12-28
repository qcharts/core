export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础折线图',
    path: 'default',
    component: () => import('./line-default.md')
  },
  {
    title: '双折线图',
    path: 'double',
    component: () => import('./line-double.md')
  },
  {
    title: '曲线折线图',
    path: 'smooth',
    component: () => import('./line-smooth.md')
  },
  {
    title: '多折线图',
    path: 'multi',
    component: () => import('./line-multi.md')
  },
  {
    title: '其它',
    path: 'others',
    component: () => import('./line-others.md')
  },
  // {
  //   title: '个性化',
  //   path: 'style',
  //   component: () => import('./line-style.md')
  // },
  // {
  //   title: '数据更新',
  //   path: 'update',
  //   component: () => import('./line-update.md')
  // },
  // {
  //   title: '交换坐标轴',
  //   path: 'swapaxis',
  //   component: () => import('./line-swapaxis.md')
  // },
  // {
  //   title: '多图融合',
  //   path: 'axisgap',
  //   component: () => import('./line-gap.md')
  // }
]
