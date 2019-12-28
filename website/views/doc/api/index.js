export default [
  {
    title: '',
    path: '',
    redirect: 'pie'
  },
  {
    title: 'Line(折线图)',
    path: 'line',
    component: () => import('./line-api.md')
  },
  {
    title: 'Area(面积图)',
    path: 'area',
    component: () => import('./area-api.md')
  },
  {
    title: 'Bar(柱状图、条形图)',
    path: 'bar',
    component: () => import('./bar-api.md')
  },
  {
    title: 'Pie(饼图)',
    path: 'pie',
    component: () => import('./Pie.md')
  },

  {
    title: 'Radar(雷达图)',
    path: 'radar',
    component: () => import('./radar.md')
  },
  {
    title: 'Scatter(散点图)',
    path: 'scatter',
    component: () => import('./scatter.md')
  },
  {
    title: 'Progress(进度图)',
    path: 'progress',
    component: () => import('./progress.md')
  },
  {
    title: 'Funnel(漏斗图)',
    path: 'funnel',
    component: () => import('./funnel-api.md')
  },

  {
    title: 'Gauge(仪表盘)',
    path: 'gauge',
    component: () => import('./Gauge.md')
  },

  {
    title: 'RadialBar(玉块图)',
    path: 'radialBar',
    component: () => import('./RadialBar.md')
  },

  {
    title: 'PolarBar(极坐标柱状图)',
    path: 'polarBar',
    component: () => import('./polarBar.md')
  }
]
