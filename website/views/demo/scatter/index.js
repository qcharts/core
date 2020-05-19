export default [
  {
    title: '',
    path: '',
    redirect: 'scatter'
  },
  {
    title: '基础散点图',
    path: 'scatter',
    component: () => import('./scatter.md')
  },
  {
    title: '散点图数据更新',
    path: 'scatter_update',
    component: () => import('./scatter_update.md')
  },
  {
    title: '气泡图',
    path: 'bubble',
    component: () => import('./bubble2.md')
  },
  {
    title: '文本气泡图',
    path: 'bubble2',
    component: () => import('./bubble.md')
  }
]
