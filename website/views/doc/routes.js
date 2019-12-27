import generateCommonPage from '../../utils/generateCommonPage'
import apiRoutes from './api'
import pluginsRoutes from './plugins'

export default [
  {
    title: '',
    path: '',
    redirect: 'apiinfo'
  },
  {
    title: 'Chart 图表主体',
    path: 'chart',
    component: () => import('./chart.md')
  },
  {
    title: 'Dataset 数据集',
    path: 'dataset',
    component: () => import('./dataset.md')
  },
  {
    title: 'API简述',
    path: 'apiinfo',
    component: () => import('./apiinfo.md')
  },
  {
    title: 'Visual(图形)',
    path: 'api',
    component: generateCommonPage('/doc/api/', apiRoutes),
    children: apiRoutes
  },

  {
    title: 'Plugin(插件)',
    path: 'plugin',
    component: generateCommonPage('/doc/plugin/', pluginsRoutes),
    children: pluginsRoutes
  }

  // {
  //   title: '自定义样式',
  //   path: 'style',
  //   component: () => import('./style.md')
  // },
]
