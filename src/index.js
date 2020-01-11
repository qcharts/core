import { h } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import Line from './visuals/Line'
import platform from './base/platform'
import Chart from './Chart'
import * as utils from './util'
const qcharts = {
  version: 3.1,
  Line,
  h,
  Chart,
  utils
}
if (process.env.NODE_ENV === 'development') {
  platform.qcharts = qcharts
}
export { qcharts, Dataset, Line, Chart, h, utils }
export default qcharts
