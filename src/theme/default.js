import { deepObjectMerge } from '@qcharts/utils'
const theme = { colors: ['#47A1FF', '#6CD3FF', '#A2E5FF', '#4DCCCB', '#3FDDC7', '#84E0BE', '#59CB74', '#ADDF84', '#FBD54A', '#FFB952', '#F79452', '#E37474', '#FC6980', '#ED8CCE', '#DA65CC', '#9861E5', '#9F8CF1', '#6367EC', '#5982F6', '#659AEC'] }
theme.visuals = {
  Line: {
    colors: theme.colors,
    styles: {
      line: { lineWidth: 1 },
      guideline: { strokeColor: '#ddd' }
    },
    attrs: {
      statck: false
    }
  },
  LineTest: {
    colors: theme.colors,
    styles: {
      line: { lineWidth: 1 }
    },
    attrs: {
      statck: false
    }
  },
  Area: {
    colors: theme.colors,
    styles: {
      area: { opacity: 0.5 },
      guideline: { strokeColor: '#ddd' }
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
      bar: {},
      groupBar: { opacity: 0.1 }
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
  Wave: {
    colors: theme.colors,
    styles: {
      wave: { fillColor: '#37c', strokeColor: '#37c', lineWidth: 0 },
      shape: { fillColor: '#e6f3ff', lineWidth: 3, strokeColor: '#156cbd' }
    },
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
    styles: {},
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
