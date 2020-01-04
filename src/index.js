import { render, h } from '@qcharts/vnode'
import Dataset from '@qcharts/dataset'
import Line from './visuals/Line'
import platform from './base/platform'
import Chart from './Chart'
const qcharts = {
  version: 3.1,
  Line,
  h,
  Chart
}
if (process.env.NODE_ENV === 'development') {
  platform.qcharts = qcharts
}
export { qcharts, render, Dataset, Line, Chart, h }
export default qcharts
