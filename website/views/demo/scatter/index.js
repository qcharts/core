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
