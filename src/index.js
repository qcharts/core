import { h } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import Line from './visuals/Line/index'
import LineTest from './visuals/Line/index_test'
import Area from './visuals/Area/index'
import Bar from './visuals/Bar/index'
import PolarBar from './visuals/PolarBar/index'
import Axis from './plugins/Axis/index'
import Tooltip from './plugins/Tooltip/index'
import platform from './base/platform'
import Chart from './Chart'
import theme from './theme/default'
const qcharts = {
  version: 3.1,
  Line,
  Area,
  Bar,
  PolarBar,
  Axis,
  LineTest,
  Tooltip,
  h,
  theme,
  Chart
}
if (process.env.NODE_ENV === 'development') {
  platform.qcharts = qcharts
}

export { qcharts, Dataset, Line, Area, LineTest, Tooltip,Bar, PolarBar, Axis, Chart, h, theme }


export default qcharts
