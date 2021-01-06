import Base from '../../base/BasePlugin'
import { Group, Path, Label } from 'spritejs'
import { getStyle } from '../../utils/getStyle'
import Point from '../../utils/Point'
class Legend extends Base {
  constructor(attrs) {
    super(attrs)
    this.arrLayout = null
    this.state = {
      page: 1,
      totalPage: 1,
      perPageWidthOrHeight: 0, // 每页长度（或宽度）
      paginationSize: [0, 0], // 分页控件大小
      groupSize: [0, 0] // legends 容器大小
    }
    this.twiceRender = false
    this.animationSwitch = false
    this.posFrom = [0, 0]
    this.currentPos = [0, 0]
    this.legendStateArray = []
    this.lineCounter = 0 //在scroll属性为false的情况下计算legend的行数(或列数)
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  defaultAttrs() {
    return {
      layer: 'legend',
      orient: 'horizontal', // 布局方式， vertical | horizontal
      align: ['center', 'bottom'], // 水平方向布局，left | center | right, 垂直方向布局，top | center | bottom
      iconSize: [12, 12], // 图标默认大小
      textSize: [40, 12], // 文字默认大小
      scroll: true, // 滚动方式，已废弃
      outGap: 10, // 两个legend之间的距离
      innerGap: 4,
      lineGap: 15, //换行后两行legend之间距离
      formatter: d => d.text || d,
      padding: 2 // legend与canvas整体之间的padding
    }
  }
  get pos() {
    const { clientRect, align, padding } = this.renderAttrs
    let groupSize = this.state.groupSize
    let { width, height, top, left, right, bottom } = clientRect
    let canvasWidth = width + left + right
    let canvasHeight = height + top + bottom
    this.state.paginationSize = this.isVertical ? [30, 60] : [70, 25]

    const isValidLayout = (value, type) => {
      if (type === 'horizontal') {
        // 水平布局
        return ['default', 'left', 'center', 'right'].indexOf(value) > -1
      } else {
        // 垂直布局
        return ['default', 'top', 'center', 'bottom'].indexOf(value) > -1
      }
    }

    const hLocation = {
      // 水平定位
      default: 0,
      left: padding,
      center: (canvasWidth - groupSize[0]) / 2,
      right: canvasWidth - groupSize[0] - padding,
      numberOrPercent(num) {
        // 输入 数字或百分比
        if (typeof num === 'number') {
          return num
        } else {
          let val = 0
          try {
            val = parseFloat(num) / 100
          } catch (e) {}
          return (canvasWidth - groupSize[0]) * val
        }
      }
    }

    const vLocation = {
      // 垂直定位
      default: 0,
      top: padding,
      center: canvasHeight / 2 - groupSize[1] / 2,
      bottom: canvasHeight - groupSize[1] - padding,
      numberOrPercent(num) {
        // 输入 数字或百分比
        if (typeof num === 'number') {
          return num
        } else {
          let val = 0

          try {
            val = parseFloat(num) / 100
          } catch (e) {}
          return (canvasHeight - groupSize[1]) * val
        }
      }
    }
    let pos = [
      isValidLayout(align[0], 'horizontal')
        ? hLocation[align[0]]
        : hLocation.numberOrPercent(align[0]),
      isValidLayout(align[1], 'vertical')
        ? vLocation[align[1]]
        : vLocation.numberOrPercent(align[1])
    ]
    let pagePos
    let totalPageX = Math.ceil(this.state.groupSize[0] / canvasWidth)
    let totalPageY = Math.ceil(this.state.groupSize[1] / canvasHeight)
    let paginationSize = this.state.paginationSize
    let pagePrev, pageText, pageNext
    if (totalPageX > 1) {
      this.state.totalPage = totalPageX
      let pagePosY =
        pos[1] + groupSize[1] + paginationSize[1] > canvasHeight
          ? pos[1] - paginationSize[1]
          : pos[1] + groupSize[1]
      pagePos = [canvasWidth - paginationSize[0], pagePosY]
      pagePrev = [0, 0]
      pageText = [15, 0]
      pageNext = [45, 0]
      pos[0] = -(this.state.page - 1) * canvasWidth
    } else if (totalPageY > 1) {
      this.state.totalPage = totalPageY
      let pagePosX =
        pos[0] + groupSize[0] + paginationSize[0] > canvasWidth
          ? pos[0] - paginationSize[0]
          : pos[0] + groupSize[0]
      pagePos = [pagePosX, canvasHeight - paginationSize[1]]
      pagePrev = [5, 0]
      pageText = [0, 20]
      pageNext = [5, 40]
      pos[1] = -(this.state.page - 1) * canvasHeight
    } else {
      this.state.page = 1
      this.state.totalPage = 1
    }
    return {
      pos: pos,
      pagePos: { pos: pagePos, pagePrev, pageText, pageNext }
    }
  }

  get isVertical() {
    return this.renderAttrs.orient === 'vertical'
  }
  beforeRender() {
    if (this.twiceRender) {
      this.reset()
    } else {
      this.arrLayout = this.getRenderData().arrLayout
    }
    return this.arrLayout
  }

  getRenderData() {
    let { layoutBy, innerGap } = this.renderAttrs
    let renderData = this.dataset[layoutBy].map((item, index) => {
      this.legendStateArray.push(item.state)
      return {
        name: item.name,
        state: item.state
      }
    })
    let arrLayout = renderData.map(item => {
      return {
        textAttrs: {
          text: item.name,
          paddingLeft: innerGap
        }
      }
    })
    this.arrLayout = arrLayout
    return { arrLayout }
  }
  itemClick(e, el) {
    const ind = el.attr('_index')
    let state = this.dataset[this.renderAttrs.layoutBy][ind].state
    state = state !== 'disabled' ? 'disabled' : 'default'
    this.dataset[this.renderAttrs.layoutBy][ind].state = state
  }
  itemLeave(e, el) {
    const ind = el.attr('_index')
    this.legendStateArray[ind] = 'default'
    this.update()
  }
  itemMove(e, el) {
    const ind = el.attr('_index')
    if (this.legendStateArray[ind] === 'default') {
      this.legendStateArray[ind] = 'hover'
      this.update()
    }
  }
  beforeUpdate(params) {
    if (params && params.type === 'source') {
      this.animationSwitch = true
      this.twiceRender = false
      return this.beforeRender()
    } else {
      if (params && params.type === 'resize') {
        this.animationSwitch = true
      }
      return this.arrLayout
    }
  }

  rendered() {
    // console.log("rendered");
  }

  afterrender(e, el) {
    if (this.twiceRender) {
      this.animationSwitch = false
      return
    }
    this.twiceRender = true
    this.reset()
    this.update()
  }
  reset() {
    let {
      outGap,
      innerGap,
      iconSize,
      textSize,
      clientRect,
      lineGap,
      padding
    } = this.renderAttrs
    let legendsSize = this.isVertical ? [[0, padding]] : [[padding, 0]]
    let maxTextWidth = 0
    let colors = this.theme.colors
    let { width, height, top, left, right, bottom } = clientRect
    let canvasWidth = width + left + right
    let canvasHeight = height + top + bottom
    this.lineCounter = 0
    this.arrLayout = this.arrLayout.map((item, index) => {
      item.iconAttrs = {}
      let iconEl = this.$refs['icon' + index].$sprite
      let iconRect = iconEl.getBoundingClientRect()
      iconSize = [
        iconEl.width ? iconEl.width : iconSize[0],
        iconEl.height ? iconEl.height : iconSize[1]
      ]
      let textEl = this.$refs['text' + index]
      let textRect = textEl.getBoundingClientRect()
      let heightSize =
        iconSize[1] > textRect.height ? iconSize[1] : textRect.height

      // 垂直布局下，已有的列数的width和
      let lineWidth =
        legendsSize.reduce((i, j) => {
          return i + j[0]
        }, 0) - legendsSize[this.lineCounter][0]

      // 单个legend的左上角坐标
      let iconPos = this.isVertical
        ? [lineWidth, legendsSize[this.lineCounter][1]]
        : [
            legendsSize[this.lineCounter][0],
            this.lineCounter * (heightSize + lineGap)
          ]
      // 超过单行长度后换行
      if (
        this.isVertical &&
        iconPos[1] + textRect.height > canvasHeight - 2 * padding
      ) {
        this.lineCounter++
        iconPos = [iconPos[0] + legendsSize[this.lineCounter - 1][0], padding]
        maxTextWidth = 0 // 换行后重置最宽legend
        legendsSize.push([0, padding])
      } else if (
        !this.isVertical &&
        iconPos[0] + iconSize[0] + textRect.width + outGap >
          canvasWidth - 2 * padding
      ) {
        this.lineCounter++
        iconPos = [padding, this.lineCounter * (heightSize + lineGap)]
        legendsSize.push([padding, 0])
      }
      let iconAttrs = {
        bgcolor: colors[index],
        size: iconSize,
        pos: [0, heightSize / 2],
        anchor: [0, 0.5]
      }
      if (this.dataset[this.renderAttrs.layoutBy][index].state === 'disabled') {
        iconAttrs.bgcolor = '#ccc'
        iconAttrs.fillColor = '#ccc'
      }
      let textAttrs = {
        ...item.textAttrs,
        pos: this.isVertical
          ? [iconSize[0], heightSize / 2]
          : [iconSize[0], heightSize / 2],
        text: item.textAttrs.text,
        anchor: [0, 0.5]
      }
      // 单个legend的宽高
      let size = [iconSize[0] + textRect.width, heightSize]
      if (size[0] + outGap > maxTextWidth) {
        maxTextWidth = size[0] + outGap
      }
      // 每个legend宽高累加
      legendsSize[this.lineCounter] = this.isVertical
        ? [maxTextWidth, legendsSize[this.lineCounter][1] + size[1] + outGap]
        : [
            legendsSize[this.lineCounter][0] + size[0] + outGap,
            size[1] + lineGap
          ]
      return {
        iconAttrs,
        textAttrs,
        groupAttrs: {
          size: size,
          pos: iconPos
        }
      }
    })
    // console.log(this.arrLayout)
    this.state.groupSize = this.isVertical
      ? [
          legendsSize.reduce((i, j) => {
            return i + j[0]
          }, 0),
          this.lineCounter === 0 ? legendsSize[0][1] : canvasHeight
        ]
      : [
          this.lineCounter === 0
            ? legendsSize[0][0]
            : Math.max(
                ...legendsSize.map(item => {
                  return item[0]
                })
              ),
          (this.lineCounter + 1) * legendsSize[0][1]
        ]
  }
  // changePage(e, el) {
  //   if (el.name === "prev" && this.state.page > 1) {
  //     this.state.page--
  //     this.animationSwitch = true
  //     this.update()
  //   } else if (el.name === "next" && this.state.page < this.state.totalPage) {
  //     this.state.page++
  //     this.animationSwitch = true
  //     this.update()
  //   }
  // }
  render(arr) {
    this.posFrom = this.currentPos
    const { pos, pagePos } = this.pos
    this.posFrom = this.twiceRender && this.animationSwitch ? this.posFrom : pos
    const { page, totalPage } = this.state
    this.currentPos = pos
    const styles = this.renderStyles
    const isVertical = this.isVertical
    if (this.twiceRender) {
      pos[0] = pos[0] - 1
    }
    const { formatter } = this.renderAttrs
    if (arr) {
      return (
        <Group size={[1, 1]} onAfterrender={this.afterrender}>
          <Group
            animation={{
              from: { pos: this.posFrom },
              to: { pos: pos },
              duration:
                this.twiceRender && this.animationSwitch
                  ? this.renderAttrs.animation.duration
                  : 0
            }}
            // pos={pos}
          >
            {arr.map((attrs, ind) => {
              let cell = this.dataset[this.renderAttrs.layoutBy][ind]
              let hover = this.legendStateArray[ind] === 'hover'
              let disabled = cell.state === 'disabled'
              let style = getStyle(
                this,
                'point',
                [{}, styles.point],
                [cell, ind]
              )

              let hoverStyle = hover
                ? getStyle(this, 'point:hover', [{}], [cell, ind])
                : {}

              if (disabled && attrs.iconAttrs && attrs.iconAttrs.bgcolor) {
                hoverStyle.bgcolor = '#ccc'
                hoverStyle.fillColor = '#ccc'
              }
              let textStyle = getStyle(
                this,
                'text',
                [{}, styles.text],
                [cell, ind]
              )
              let textHoverStyle = hover
                ? getStyle(this, 'text:hover', [{}], [cell, ind])
                : {}

              attrs.textAttrs.text = formatter(cell.name || '', cell.data, ind)
              return (
                <Group
                  onClick={this.itemClick}
                  onMouseleave={this.itemLeave}
                  onMouseenter={this.itemMove}
                  onMousemove={this.itemMove}
                  {...{ _index: ind }}
                  {...attrs.groupAttrs}
                >
                  <Point
                    {...{ ref: 'icon' + ind }}
                    {...attrs.iconAttrs}
                    {...style}
                    {...hoverStyle}
                  />
                  <Label
                    {...{ ref: 'text' + ind }}
                    {...attrs.textAttrs}
                    {...textStyle}
                    {...textHoverStyle}
                  />
                </Group>
              )
            })}
          </Group>

          {/* {totalPage<=1 ? null : (
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
                fontSize="14px"
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
          )} */}
        </Group>
      )
    }
  }
}

export default Legend

// reset() {
//   let legendsSize = [0, 0]
//   let { outGap, innerGap, iconSize, textSize } = this.renderAttrs
//   let maxTextWidth = 0
//   let colors = this.theme.colors
//   this.arrLayout = this.arrLayout.map((item, index) => {
//     item.iconAttrs = {}
//     let iconEl = this.$refs["icon" + index]
//     let iconRect = iconEl.getBoundingClientRect()
//     let textEl = this.$refs["text" + index]
//     let textRect = textEl.getBoundingClientRect()
//     let iconAttrs = {
//       bgcolor: colors[index],
//       size: iconSize,
//       pos: this.isVertical
//         ? [0, legendsSize[1] + (textRect.height - iconSize[1]) / 2]
//         : [legendsSize[0], (textRect.height - iconSize[1]) / 2],
//     }
//     if (this.dataset[this.renderAttrs.layoutBy][index].state === "disabled") {
//       iconAttrs.bgcolor = "#ccc"
//       iconAttrs.fillColor = "#ccc"
//     }
//     let textAttrs = {
//       ...item.textAttrs,
//       pos: this.isVertical
//         ? [iconSize[0], legendsSize[1]]
//         : [iconSize[0] + legendsSize[0], 0],
//       text: item.textAttrs.text,
//     }
//     let size = [iconSize[0] + textRect.width, iconSize[1]]
//     if (size[0] + outGap > maxTextWidth) {
//       maxTextWidth = size[0] + outGap
//     }
//     legendsSize = this.isVertical
//       ? [maxTextWidth, legendsSize[1] + textRect.height + outGap]
//       : [legendsSize[0] + size[0] + outGap, textRect.height]
//     return { iconAttrs, textAttrs }
//   })
//   this.state.groupSize = legendsSize
// }
