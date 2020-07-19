import Base from "../../base/BasePlugin";
import { Group, Sprite, Path, Label } from "spritejs";
import layout from "./layout";
import { getStyle } from "@/utils/getStyle";
//import { debounce } from '@qcharts/utils'
class Legend extends Base {
  constructor(attrs) {
    super(attrs);
    this.state = {
      page: 1,
      totalPage: 1,
      perPageWidthOrHeight: 0, // 每页长度（或宽度）
      paginationSize: [0, 0], // 分页控件大小
      groupSize: [0, 0], // legends 容器大小 $group.contentSize
    };
    this.disableds = {};
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs;
    return attrs;
  }
  defaultAttrs() {
    return {
      orient: "horizontal", // 布局方式， vertical | horizontal
      align: ["center", "bottom"], // 水平方向布局，left | center | right, 垂直方向布局，top | center | bottom
      formatter: (d) => d.value || d,
      iconSize: [10, 12],
      textSize: [40, 12],
      gap: 10,
    };
  }
  get pos() {
    const length = this.dataset[this.renderAttrs.layoutBy].length;
    const { clientRect, align, iconSize, textSize, gap } = this.renderAttrs;
    let legendSize = [
      iconSize[0] + textSize[0],
      Math.max(iconSize[1], textSize[1]),
    ];
    let groupSize = this.isVertical
      ? [legendSize[0], length * legendSize[1] + gap * (length - 1)]
      : [length * legendSize[0] + gap * (length - 1), legendSize[1]];
    let { width, height, top, left, right, bottom } = clientRect;
    let canvasWidth = width + left + right;
    let canvasHeight = height + top + bottom;
    // this.state.groupSize = [width, height] // 保存当前 group 的内容大小

    const isValidLayout = (value, type) => {
      if (type === "horizontal") {
        // 水平布局
        return ["default", "left", "center", "right"].indexOf(value) > -1;
      } else {
        // 垂直布局
        return ["default", "top", "center", "bottom"].indexOf(value) > -1;
      }
    };

    const hLocation = {
      // 水平定位
      default: 0,
      left: 0,
      center: (canvasWidth - groupSize[0]) / 2,
      right: canvasWidth - groupSize[0],
      numberOrPercent(num) {
        // 输入 数字或百分比
        if (typeof num === "number") {
          return num;
        } else {
          let val = 0;

          try {
            val = parseFloat(num) / 100;
          } catch (e) {}

          return (canvasWidth - groupSize[0]) * val;
        }
      },
    };

    const vLocation = {
      // 垂直定位
      default: 0,
      top: 0,
      center: canvasHeight / 2 - groupSize[1] / 2,
      bottom: canvasHeight - groupSize[1],
      numberOrPercent(num) {
        // 输入 数字或百分比
        if (typeof num === "number") {
          return num;
        } else {
          let val = 0;

          try {
            val = parseFloat(num) / 100;
          } catch (e) {}

          return (canvasHeight - groupSize[1]) * val;
        }
      },
    };

    return {
      x: isValidLayout(align[0], "horizontal")
        ? hLocation[align[0]]
        : hLocation.numberOrPercent(align[0]),
      y: isValidLayout(align[1], "vertical")
        ? vLocation[align[1]]
        : vLocation.numberOrPercent(align[1]),
    };
  }
  get isVertical() {
    return this.renderAttrs.orient === "vertical";
  }
  beforeRender() {
    let { arrLayout } = this.getRenderData();
    // let arr = arrLayout.map((item) => {
    //   return item;
    // });
    return arrLayout;
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs;
    let renderData = this.dataset[renderAttrs.layoutBy].map((item) => {
      return {
        name: item.name,
        state: item.state,
      };
    });
    let arrLayout = layout.call(this, renderData, renderAttrs);
    return { arrLayout };
  }
  itemClick(e, el) {
    const ind = el["_ind"];
    let state = this.dataset[this.renderAttrs.layoutBy][ind].state;
    state = state !== "disabled" ? "disabled" : "default";
    this.dataset[this.renderAttrs.layoutBy][ind].state = state;
  }
  beforeUpdate() {
    return this.beforeRender();
  }

  rendered() {}
  render(arr) {
    //当前主体颜色
    let colors = this.theme.colors;
    let pos = this.pos;
    let { clientRect } = this.renderAttrs;
    let { left, top } = clientRect;
    if (arr) {
      return (
        <Group pos={[pos.x, pos.y]}>
          {arr.map((attrs, ind) => {
            let style = getStyle(
              this,
              "legend",
              [{ bgcolor: colors[ind] }],
              [this.dataset[this.renderAttrs.layoutBy][ind], ind]
            );
            return (
              <Group onClick={this.itemClick}>
                <Sprite {...style} {...attrs.iconAttrs} />
                <Label {...attrs.textAttrs} />
              </Group>
            );
          })}
        </Group>
      );
    }
  }
}
function getParent(wrap, dom, selector) {
  let arr = wrap.querySelectorAll(selector);
  if (dom === wrap) {
    return;
  } else if ([].indexOf.call(arr, dom) !== -1) {
    return dom;
  } else {
    return getParent(wrap, dom.parentNode, selector);
  }
}
export default Legend;
