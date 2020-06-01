import { h } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import Line from './visuals/Line/index'
import LineTest from './visuals/Line/index_test'
import Area from './visuals/Area/index'
import Radar from './visuals/Radar/index'
import Bar from './visuals/Bar/index'
import PolarBar from './visuals/PolarBar/index'
import Wave from './visuals/Wave/index'
import Axis from './plugins/Axis/index'
import Legend from './plugins/Legend/index'
import Tooltip from './plugins/Tooltip/index'
import platform from './base/platform'
import Chart from './Chart'
import theme from './theme/default'
const qcharts = {
  version: 3.1,
  Line,
  Area,
  Radar,
  Bar,
  PolarBar,
  Legend,
  Axis,
  Wave,
  LineTest,
  Tooltip,
  h,
  theme,
  Chart
}
if (process.env.NODE_ENV === 'development') {
  platform.qcharts = qcharts
}

export { qcharts, Dataset, Line, Area, Wave, Radar, LineTest, Tooltip, Bar, PolarBar, Axis, Legend, Chart, h, theme }

export default qcharts
