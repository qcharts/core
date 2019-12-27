import generateCommonPage from '../../utils/generateCommonPage'
import AxisRoutes from './axis/routes'
import LegendRoutes from './legend/routes'
import TooltipRoutes from './tooltip/routes'

export default [
  {
    title: '',
    path: '',
    redirect: 'axis'
  },

  {
    title: '坐标轴',
    path: 'axis',
    component: generateCommonPage('/plugin/axis/', AxisRoutes),
    children: AxisRoutes
  },

  {
    title: 'Legend',
    path: 'legend',
    component: generateCommonPage('/plugin/legend/', LegendRoutes),
    children: LegendRoutes
  },

  {
    title: 'Tooltip',
    path: 'tooltip',
    component: generateCommonPage('/plugin/tooltip/', TooltipRoutes),
    children: TooltipRoutes
  }
]
