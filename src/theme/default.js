import { deepObjectMerge } from "@qcharts/utils";
const theme = {
  colors: [
    "#47A1FF",
    "#6CD3FF",
    "#A2E5FF",
    "#4DCCCB",
    "#3FDDC7",
    "#84E0BE",
    "#59CB74",
    "#ADDF84",
    "#FBD54A",
    "#FFB952",
    "#F79452",
    "#E37474",
    "#FC6980",
    "#ED8CCE",
    "#DA65CC",
    "#9861E5",
    "#9F8CF1",
    "#6367EC",
    "#5982F6",
    "#659AEC",
  ],
};
theme.visuals = {
  Line: {
    colors: theme.colors,
    styles: {
      line: { lineWidth: 1 },
      guideline: { strokeColor: "#ddd" },
      point: {
        pointType: "ellipse",
        radiusX: 4,
        radiusY: 4,
        strokeColor: "#fff",
        borderWidth: 1,
      },
    },
    attrs: {
      statck: false,
    },
  },
  Pie: {
    colors: theme.colors,
    styles: {
      sector: { lineWidth: 1, strokeColor: "#fff" },
    },
    attrs: {},
  },
  Area: {
    colors: theme.colors,
    styles: {
      area: { opacity: 0.5 },
      guideline: { strokeColor: "#ddd" },
    },
    attrs: {},
  },
  Radar: {
    colors: theme.colors,
    styles: {
      area: { opacity: 0.5 },
    },
    attrs: {},
  },
  Bar: {
    colors: theme.colors,
    styles: {
      bar: {},
      groupBar: { opacity: 0.1 },
    },
    attrs: {
      statck: false,
    },
  },
  PolarBar: {
    colors: theme.colors,
    styles: {
      bar: {},
    },
    attrs: {
      statck: false,
    },
  },
  Funnel: {
    colors: theme.colors,
    styles: {
      funnel: {},
    },
    attrs: {
      statck: false,
    },
  },
  Scatter: {
    colors: theme.colors,
    styles: {
      point: {},
    },
    attrs: {
      showGuideLine: false,
    },
  },
  Wave: {
    colors: theme.colors,
    styles: {
      wave: { fillColor: "#37c", strokeColor: "#37c", lineWidth: 0 },
      text: { fillColor: "#333", fontSize: 24 },
      shape: { fillColor: "#e6f3ff", lineWidth: 3, strokeColor: "#156cbd" },
    },
    attrs: {},
  },
  Gauge: {
    colors: theme.colors,
    attrs: {},
  },
  RadialBar: {
    colors: theme.colors,
    attrs: {},
  },
};
theme.plugins = {
  Tooltip: {
    colors: theme.colors,
    styles: {},
    attrs: {},
  },
  Legend: {
    colors: theme.colors,
    styles: {
      point: {
        pointType: "sprite",
        iconSize: [12, 12],
      },
      text: {
        fontSize: "12px",
        fillColor: "#666",
      },
    },
    attrs: {},
  },
  Axis: {
    colors: theme.colors,
    styles: {
      axis: {
        strokeColor: "#ccc",
        lineWidth: 1,
      },
      scale: {
        bgcolor: "#ccc",
      },
      label: {
        fontSize: 12,
        fillColor: "#666",
      },
      grid: {
        strokeColor: "#ddd",
        lineDash: [3, 3],
      },
      name: {
        fontSize: 12,
        fillColor: "#666",
      },
    },
    attrs: {
      orient: "bottom",
    },
  },
};
theme.set = function(obj) {
  //合并样式
  deepObjectMerge(theme, obj);
};
export default theme;
