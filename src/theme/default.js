import { deepObjectMerge } from '@qcharts/utils'
const colors = ['#47A1FF', '#59CB74', '#FFB952', '#FC6980', '#6367EC', '#DA65CC', '#FBD54A', '#ADDF84', '#6CD3FF', '#659AEC', '#9F8CF1', '#ED8CCE', '#A2E5FF', '#4DCCCB', '#F79452', '#84E0BE', '#5982F6', '#E37474', '#3FDDC7', '#9861E5']
for (let i = 0; i < 1004; i++) {
  //生成1024种颜色
  colors.push('#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).substr(-6))
}
const theme = {
  colors
}
theme.visuals = {
  Line: {
    colors: theme.colors,
    styles: {
      line: { lineWidth: 1 },
      guideline: { strokeColor: '#ddd' },
      point: {
        pointType: 'ellipse',
        radiusX: 4,
        radiusY: 4,
        strokeColor: '#fff',
        borderWidth: 1
      }
    },
    attrs: {
      statck: false
    }
  },
  Pie: {
    colors: theme.colors,
    styles: {
      sector: { lineWidth: 1, strokeColor: '#fff' },
      guideText: { bgcolor: 'rgba(255,255,255,0.7)', borderRadius: 2 },
      guideline: {}
    },
    attrs: {}
  },
  Area: {
    colors: theme.colors,
    styles: {
      area: { opacity: 0.5 },
      guideline: { strokeColor: '#ddd' },
      point: {
        pointType: 'ellipse',
        radiusX: 4,
        radiusY: 4,
        strokeColor: '#fff',
        borderWidth: 1
      }
    },
    attrs: {}
  },
  Radar: {
    colors: theme.colors,
    styles: {
      area: { opacity: 0.5 }
    },
    attrs: {}
  },
  Bar: {
    colors: theme.colors,
    styles: {
      bar: { textureRepeat: true, close: true },
      groupBar: { bgcolor: '#000', fillColor: '#000', opacity: 0.0001 },
      text: false
    },
    attrs: {
      statck: false
    }
  },
  PolarBar: {
    colors: theme.colors,
    styles: {
      bar: {}
    },
    attrs: {
      statck: false
    }
  },
  Funnel: {
    colors: theme.colors,
    styles: {
      polygon: {}
    },
    attrs: {
      statck: false
    }
  },
  Scatter: {
    colors: theme.colors,
    styles: {
      point: {},
      label: { strokeColor: 'transparent', zIndex: 10, anchor: [0.5, 0.5] }
    },
    attrs: {
      showGuideLine: false
    }
  },
  Wave: {
    colors: theme.colors,
    styles: {
      wave: { fillColor: '#37c', strokeColor: '#37c', lineWidth: 0 },
      text: { fillColor: '#333', fontSize: 24 },
      shape: { fillColor: '#e6f3ff', lineWidth: 3, strokeColor: '#156cbd' }
    },
    attrs: {}
  },
  Gauge: {
    colors: theme.colors,
    attrs: {}
  },
  RadialBar: {
    colors: theme.colors,
    attrs: {}
  }
}
theme.plugins = {
  Tooltip: {
    colors: theme.colors,
    styles: {},
    attrs: {}
  },
  Legend: {
    colors: theme.colors,
    styles: {
      point: {
        pointType: 'sprite',
        iconSize: [12, 12],
        borderRadius: 12
      },
      text: {
        fontSize: '12px',
        fillColor: '#666'
      }
    },
    attrs: {}
  },
  Axis: {
    colors: theme.colors,
    styles: {
      axis: {
        strokeColor: '#ccc',
        lineWidth: 1
      },
      scale: {
        bgcolor: '#ccc'
      },
      label: {
        fontSize: 12,
        fillColor: '#666'
      },
      grid: {
        strokeColor: '#ddd',
        lineDash: [3, 3]
      },
      name: {
        fontSize: 12,
        fillColor: '#666'
      }
    },
    attrs: {
      orient: 'bottom'
    }
  }
}
theme.set = function(obj) {
  //合并样式
  deepObjectMerge(theme, obj)
}
export default theme
