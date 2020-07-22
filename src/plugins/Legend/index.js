import Base from "../../base/BasePlugin";
import { Group, Sprite, Path, Label } from "spritejs";
import layout from "./layout";
import { getStyle } from "@/utils/getStyle";
//import { debounce } from '@qcharts/utils'
class Legend extends Base {
  constructor(attrs) {
    super(attrs);
    this.arrLayout = null;
    this.state = {
      page: 1,
      totalPage: 1,
      perPageWidthOrHeight: 0, // 每页长度（或宽度）
      paginationSize: [0, 0], // 分页控件大小
      groupSize: [0, 0], // legends 容器大小 $group.contentSize
    };
    this.legendNum = 1;
    this.renderedCounter = 0;
    this.twiceRender = false;
    this.posFrom = [0, 0];
    this.currentPos = [0, 0];
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
    const { clientRect, align } = this.renderAttrs;
    let groupSize = this.state.groupSize;
    let { width, height, top, left, right, bottom } = clientRect;
    let canvasWidth = width + left + right;
    let canvasHeight = height + top + bottom;
    this.state.paginationSize = this.isVertical ? [30, 60] : [70, 25];

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
    let pos = [
      isValidLayout(align[0], "horizontal")
        ? hLocation[align[0]]
        : hLocation.numberOrPercent(align[0]),
      isValidLayout(align[1], "vertical")
        ? vLocation[align[1]]
        : vLocation.numberOrPercent(align[1]),
    ];
    let pagePos;
    let totalPageX = Math.ceil(this.state.groupSize[0] / canvasWidth);
    let totalPageY = Math.ceil(this.state.groupSize[1] / canvasHeight);
    let paginationSize = this.state.paginationSize;
    let pagePrev, pageText, pageNext;
    if (totalPageX > 1) {
      this.state.totalPage = totalPageX;
      let pagePosY =
        pos[1] + groupSize[1] + paginationSize[1] > canvasHeight
          ? pos[1] - paginationSize[1]
          : pos[1] + groupSize[1];
      pagePos = [canvasWidth - paginationSize[0], pagePosY];
      pagePrev = [0, 0];
      pageText = [15, 0];
      pageNext = [45, 0];
      pos[0] = -(this.state.page - 1) * canvasWidth;
    } else if (totalPageY > 1) {
      this.state.totalPage = totalPageY;
      let pagePosX =
        pos[0] + groupSize[0] + paginationSize[0] > canvasWidth
          ? pos[0] - paginationSize[0]
          : pos[0] + groupSize[0];
      pagePos = [pagePosX, canvasHeight - paginationSize[1]];
      pagePrev = [5, 0];
      pageText = [0, 20];
      pageNext = [5, 40];
      pos[1] = -(this.state.page - 1) * canvasHeight;
    } else {
      this.state.page = 1;
      this.state.totalPage = 1;
    }
    return {
      pos: pos,
      pagePos: { pos: pagePos, pagePrev, pageText, pageNext },
    };
  }

  get isVertical() {
    return this.renderAttrs.orient === "vertical";
  }
  beforeRender() {
    // 可能有问题。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
    // this.renderedCounter = 0;
    if (this.twiceRender) {
      this.reset();
    } else {
      this.arrLayout = this.getRenderData().arrLayout;
    }

    return this.arrLayout;
  }

  getRenderData() {
    let renderAttrs = this.renderAttrs;
    let renderData = this.dataset[renderAttrs.layoutBy].map((item, index) => {
      return {
        name: item.name,
        state: item.state,
      };
    });
    this.legendNum = renderData.length;
    let arrLayout = layout.call(this, renderData, renderAttrs);
    this.arrLayout = arrLayout;
    return { arrLayout };
  }
  itemClick(e, el) {
    const ind = el.attr("_index");
    let state = this.dataset[this.renderAttrs.layoutBy][ind].state;
    state = state !== "disabled" ? "disabled" : "default";
    this.dataset[this.renderAttrs.layoutBy][ind].state = state;
  }
  beforeUpdate() {
    return this.beforeRender();
  }

  rendered() {
    // console.log("rendered");
  }

  afterrender(e, el) {
    if (this.twiceRender) {
      return;
    }
    this.renderedCounter++;
    if (this.legendNum === this.renderedCounter) {
      this.twiceRender = true;
      this.reset();
      this.update();
    }
  }
  reset() {
    let legendsSize = [0, 0];
    let { gap, iconSize, textSize } = this.renderAttrs;
    let maxTextWidth = 0;
    this.arrLayout = this.arrLayout.map((item, index) => {
      let textEl = this.$refs["text" + index];
      let textRect = textEl.getBoundingClientRect();
      let iconAttrs = {
        size: iconSize,
        pos: this.isVertical ? [0, legendsSize[1]] : [legendsSize[0], 0],
      };
      if (this.dataset[this.renderAttrs.layoutBy][index].state === "disabled") {
        iconAttrs.bgcolor = "#ccc";
      }
      let textAttrs = {
        pos: this.isVertical
          ? [iconSize[0], legendsSize[1]]
          : [iconSize[0] + legendsSize[0], 0],
        font: '10px "宋体"',
        text: item.textAttrs.text,
        lineHeight: textSize[1],
      };
      let size = [iconSize[0] + textRect.width, iconSize[1]];
      if (size[0] + gap > maxTextWidth) {
        maxTextWidth = size[0] + gap;
      }
      legendsSize = this.isVertical
        ? [maxTextWidth, legendsSize[1] + iconSize[1] + gap]
        : [legendsSize[0] + size[0] + gap, iconSize[1]];
      return { iconAttrs, textAttrs };
    });
    this.state.groupSize = legendsSize;
  }
  changePage(e, el) {
    if (el.name === "prev" && this.state.page > 1) {
      this.state.page--;
      this.update();
    } else if (el.name === "next" && this.state.page < this.state.totalPage) {
      this.state.page++;
      this.update();
    }
  }
  render(arr) {
    let colors = this.theme.colors;
    this.posFrom = this.currentPos;
    const { pos, pagePos } = this.pos;
    const { page, totalPage } = this.state;
    this.currentPos = pos;
    const isVertical = this.isVertical;
    if (arr) {
      return (
        <Group>
          <Group animation={{ from: { pos: this.posFrom }, to: { pos: pos } }}>
            {arr.map((attrs, ind) => {
              let style = getStyle(
                this,
                "legend",
                [{ bgcolor: colors[ind] }],
                [this.dataset[this.renderAttrs.layoutBy][ind], ind]
              );
              return (
                <Group onClick={this.itemClick} {...{ _index: ind }}>
                  <Sprite
                    {...{ ref: "icon" + ind }}
                    {...style}
                    {...attrs.iconAttrs}
                  />
                  <Label
                    {...{ ref: "text" + ind }}
                    {...attrs.textAttrs}
                    onAfterrender={this.afterrender}
                  />
                </Group>
              );
            })}
          </Group>

          {totalPage <= 1 ? null : (
            <Group pos={pagePos.pos}>
              <Path
                pos={pagePos.pagePrev}
                {...(isVertical ? { marginLeft: 5 } : {})}
                name={"prev"}
                padding={[isVertical ? 2 : 1, 0, 0, 0]}
                d={
                  isVertical
                    ? "M 0 15 L 15 15 L7.5 0 Z"
                    : "M 0 7.5 L 13 0 L13 15 Z"
                }
                fillColor={page <= 1 ? "#ccc" : "#324556"}
                onClick={this.changePage}
              />
              <Label
                pos={pagePos.pageText}
                ref="paginationText"
                font="14px '宋体'"
                text={page + "/" + totalPage + ""}
                lineBreak="normal"
                padding={isVertical ? [0, 2] : [0, 2]}
              />

              <Path
                pos={pagePos.pageNext}
                {...(isVertical ? { marginLeft: 5 } : {})}
                name={"next"}
                padding={[isVertical ? 2 : 1, 0, 0, 0]}
                d={
                  isVertical
                    ? "M 0 0 L 15 0 L7.5 13 Z"
                    : "M 13 7.5 L 0 0 L0 15 Z"
                }
                fillColor={page >= totalPage ? "#ccc" : "#324556"}
                onClick={this.changePage}
              />
            </Group>
          )}
        </Group>
      );
    }
  }
}

export default Legend;
