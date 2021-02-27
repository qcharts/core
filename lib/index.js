import { h, easing } from '@qcharts/vnode';
import Dataset from '@qcharts/dataset';
import Line from './visuals/Line/index';
import Pie from './visuals/Pie/index';
import Area from './visuals/Area/index';
import Radar from './visuals/Radar/index';
import Bar from './visuals/Bar/index';
import PolarBar from './visuals/PolarBar/index';
import Funnel from './visuals/Funnel/index';
import Scatter from './visuals/Scatter/index';
import Wave from './visuals/Wave/index';
import Gauge from './visuals/Gauge';
import RadialBar from './visuals/RadialBar';
import Axis from './plugins/Axis/index';
import Legend from './plugins/Legend/index';
import Tooltip from './plugins/Tooltip/index';
import { getGlobal } from './base/platform';
import Chart from './Chart';
import theme from './theme/default';
var version = '1.0.37';
var qcharts = {
  version: version,
  Line: Line,
  Pie: Pie,
  Area: Area,
  Radar: Radar,
  Bar: Bar,
  PolarBar: PolarBar,
  Funnel: Funnel,
  Scatter: Scatter,
  Gauge: Gauge,
  RadialBar: RadialBar,
  Legend: Legend,
  Axis: Axis,
  Wave: Wave,
  Tooltip: Tooltip,
  h: h,
  theme: theme,
  Chart: Chart,
  easing: easing
};
var global = getGlobal();
global.qcharts = qcharts;
export { Dataset, Line, Pie, Area, Wave, Radar, Tooltip, Bar, PolarBar, Funnel, Scatter, Gauge, RadialBar, Axis, Legend, Chart, h, theme, easing, version };
export default qcharts;