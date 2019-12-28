export default [
  {
    title: '',
    path: '',
    redirect: 'default'
  },
  {
    title: '基础雷达图',
    path: 'default',
    component: () => import('./radar.md')
  },
  {
    title: '双色雷达图',
    path: 'radarPoint',
    component: () => import('./radar_point_style.md')
  }
  // {
  //   title: '边样式',
  //   path: 'radarBorder',
  //   component: () => import('./radar_border_style.md')
  // },
  // {
  //   title: '面样式',
  //   path: 'radarArea',
  //   component: () => import('./radar_area_style.md')
  // },
  // {
  //   title: '坐标轴线样式',
  //   path: 'radarAxis',
  //   component: () => import('./radar_axis_style.md')
  // },
  // {
  //   title: '网格样式',
  //   path: 'radarGrid',
  //   component: () => import('./radar_grid_style.md')
  // },
  // {
  //   title: 'x轴文字样式',
  //   path: 'radarXLabel',
  //   component: () => import('./radar_label_style.md')
  // },
  // {
  //   title: 'y轴文字样式',
  //   path: 'radarYLabel',
  //   component: () => import('./radar_label_y_style.md')
  // },
  // {
  //   title: '数据更新',
  //   path: 'radar_update',
  //   component: () => import('./radar_update.md')
  // }
]
