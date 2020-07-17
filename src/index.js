import { h, easing } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import Line from './visuals/Line/index'
import Pie from './visuals/Pie/index'
import Area from './visuals/Area/index'
import Radar from './visuals/Radar/index'
import Bar from './visuals/Bar/index'
import PolarBar from './visuals/PolarBar/index'
import Scatter from './visuals/Scatter/index'
import Wave from './visuals/Wave/index'
import Gauge from './visuals/Gauge'
import RadialBar from './visuals/RadialBar'
import Axis from './plugins/Axis/index'
import Legend from './plugins/Legend/index'
import Tooltip from './plugins/Tooltip/index'
import platform from './base/platform'
import Chart from './Chart'
import theme from './theme/default'
const version = require('../package.json').version
const qcharts = {
  version,
  Line,
  Pie,
  Area,
  Radar,
  Bar,
  PolarBar,
  Scatter,
  Gauge,
  RadialBar,
  Legend,
  Axis,
  Wave,
  Tooltip,
  h,
  theme,
  Chart,
  easing
}
if (process.env.NODE_ENV === 'development') {
  platform.qcharts = qcharts
}

export { version, Dataset, Line, Pie, Area, Wave, Radar, Tooltip, Bar, PolarBar, Scatter,Gauge, RadialBar,Axis, Legend, Chart, h, theme, easing }

export default qcharts
