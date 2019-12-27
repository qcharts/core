import generateCommonPage from '../../utils/generateCommonPage'

import PieRoutes from './Pie/routes'
import ProgressRoutes from './Progress/routes'
import BarRoutes from './Bar/routes'
import PolarBarRoutes from './PolarBar/routes'
import ColumnRoutes from './Column/routes'
import RadialBarRoutes from './radialBar/routes'
import LineRoutes from './line/routes'
import AreaRoutes from './Area/routes'
import FunnelRoutes from './Funnel/routes'
import radarRoutes from './radar'
import MapRoutes from './map/routes'
import WordCloudRoutes from './WordCloud/routes'
import scatterRoutes from './scatter'
import gaugeRoutes from './Gauge/routes'
import VisualLinksRoutes from './VisualLink/routes'

export default [
  {
    title: '',
    path: '',
    redirect: 'line'
  },
  {
    title: '折线图',
    path: 'line',
    component: generateCommonPage('/demo/line/', LineRoutes),
    children: LineRoutes
  },
  {
    title: '面积图',
    path: 'area',
    component: generateCommonPage('/demo/area/', AreaRoutes),
    children: AreaRoutes
  },

  {
    title: '柱状图',
    path: 'column',
    component: generateCommonPage('/demo/column/', ColumnRoutes),
    children: ColumnRoutes
  },
  {
    title: '条形图',
    path: 'bar',
    component: generateCommonPage('/demo/bar/', BarRoutes),
    children: BarRoutes
  },
  {
    title: '饼图',
    path: 'pie',
    component: generateCommonPage('/demo/pie/', PieRoutes),
    children: PieRoutes
  },

  {
    title: '雷达图',
    path: 'radar',
    component: generateCommonPage('/demo/radar/', radarRoutes),
    children: radarRoutes
  },
  {
    title: '散点图',
    path: 'scatter',
    component: generateCommonPage('/demo/scatter/', scatterRoutes),
    children: scatterRoutes
  },

  {
    title: '进度图',
    path: 'progress',
    component: generateCommonPage('/demo/progress/', ProgressRoutes),
    children: ProgressRoutes
  },

  {
    title: '漏斗图',
    path: 'funnel',
    component: generateCommonPage('/demo/funnel/', FunnelRoutes),
    children: FunnelRoutes
  },

  {
    title: '仪表盘',
    path: 'gauge',
    component: generateCommonPage('/demo/gauge/', gaugeRoutes),
    children: gaugeRoutes
  },

  {
    title: '玉玦图',
    path: 'radialBar',
    component: generateCommonPage('/demo/radialBar/', RadialBarRoutes),
    children: RadialBarRoutes
  },

  {
    title: '极坐标柱状图',
    path: 'polarBar',
    component: generateCommonPage('/demo/polarBar/', PolarBarRoutes),
    children: PolarBarRoutes
  }

  // {
  //   title: '图表联动',
  //   path: 'visualLink',
  //   component: generateCommonPage('/demo/visualLink/', VisualLinksRoutes),
  //   children: VisualLinksRoutes
  // }

  // {
  //   title: '地图',
  //   path: 'map',
  //   component: generateCommonPage('/demo/map/', MapRoutes),
  //   children: MapRoutes
  // },

  // {
  //   title: '词云',
  //   path: 'wordcloud',
  //   component: generateCommonPage('/demo/wordcloud/', WordCloudRoutes),
  //   children: WordCloudRoutes
  // }
]
