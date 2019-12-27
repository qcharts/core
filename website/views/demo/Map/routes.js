export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '地图',
    path: 'default',
    component: () => import('./map.md')
  },
  {
    title: '交互组件-散点',
    path: 'component-scatter',
    component: () => import('./component-scatter.md')
  },

  {
    title: '交互组件-文字',
    path: 'component-label',
    component: () => import('./component-label.md')
  },

  {
    title: '交互组件-飞线',
    path: 'component-flyline',
    component: () => import('./component-flyline.md')
  },

  {
    title: '投影类型',
    path: 'projection',
    component: () => import('./projection.md')
  }
]
