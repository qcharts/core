export default [
  {
    title: '',
    path: '',
    redirect: 'legend'
  },

  {
    title: 'Legend',
    path: 'legend',
    component: () => import('./Legend.md')
  },
  {
    title: 'Axis',
    path: 'axis',
    component: () => import('./Axis.md')
  },
  {
    title: 'Tooltip',
    path: 'tooltip',
    component: () => import('./Tooltip.md')
  },
  {
    title: 'Symbol',
    path: 'Symbol',
    component: () => import('./Symbol.md')
  }
]
