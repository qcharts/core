export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },

  {
    title: '饼图',
    path: 'default',
    component: () => import('./pie.md')
  },

  {
    title: '嵌套饼图',
    path: 'nest',
    component: () => import('./nest.md')
  },

  {
    title: '环图',
    path: 'dounght',
    component: () => import('./dounght.md')
  },

  {
    title: '南丁格尔玫瑰图',
    path: 'rose',
    hidden: true,
    component: () => import('./rose.md')
  },

  {
    title: '弧饼图',
    path: 'arcPie',
    component: () => import('./arcPie.md')
  }
  // {
  //   title: '其他',
  //   path: 'other',
  //   component: () => import('./rose_layoutScale.md')
  // }

  // {
  //   title: '图表组合',
  //   path: 'compose',
  //   component: () => import('./compose.md')
  // },

  // {
  //   title: '日历饼图',
  //   path: 'calendar',
  //   component: () => import('./calendar.md')
  // }

  // {
  //   title: '图表联动',
  //   path: 'link',
  //   component: () => import('./link.md')
  // },

  // {
  //   title: '主题切换',
  //   path: 'theme',
  //   component: () => import('./theme.md')
  // },

  // {
  //   title: '个性化',
  //   path: 'personalise',
  //   component: () => import('./personalise.md')
  // },

  // {
  //   title: 'TODO',
  //   path: 'todo',
  //   component: () => import('./todo.md')
  // }
]
