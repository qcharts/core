import Base from "../../base/BaseVisual"
import { Group, Ring } from "spritejs"
import { deepObjectMerge } from "@qcharts/utils"
import layout from "./layout"
import { getStyle } from "../../utils/getStyle"
import filterClone from "filter-clone"
class PolarBar extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = "polarbar"
    this.pillars = []
    this.hoverIndex = -1
    this.timer = null
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    let { height, width, top, left } = attrs.clientRect
    attrs.pos = [left + width / 2, top + height / 2]
    return attrs
  }

  beforeRender() {
    //渲染前的处理函数，返回rings,继承base
    let { arrLayout } = this.getRenderData()
    this.pillars = arrLayout.barData
    let barData = arrLayout.barData.map((item) => {
      return {
        from: {
          endAngle: item.startAngle,
        },
        to: item,
      }
    })
    return { barData }
  }
  beforeUpdate() {
    const pillars = this.pillars
    let { pos } = this.renderAttrs
    let { arrLayout } = this.getRenderData()
    let barData = arrLayout.barData.map((nextPillar, i) => {
      let curPos = [
        pos[0] + nextPillar.offsetPos[0],
        pos[1] + nextPillar.offsetPos[1],
      ]
      nextPillar.pos = curPos
      return {
        from: { ...pillars[i] },
        to: { ...nextPillar },
      }
    })
    this.pillars = arrLayout.barData
    return { barData }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset["rows"]
    if (!renderData || renderData.length === 0) {
      return { barData: [] }
    }
    const dataLength = renderData.length
    this.legendArr = Array.from({ length: renderData.length }, () => {
      return 1
    })
    let arrLayout = layout.call(this, renderData, renderAttrs)
    let colors = this.theme.colors
    let styles = this.renderStyles

    arrLayout.barData.forEach((bar, i) => {
      let cell = renderData[i % dataLength][Math.floor(i / dataLength)]
      let style = this.style("pillar")(bar, cell.data, i)
      bar.fillColor = bar.fillColor || colors[cell.row]
      bar.strokeColor = renderAttrs.strokeColor || "#FFF"
      bar.pos = renderAttrs.pos
      if (
        !bar.hasOwnProperty("startAngle") ||
        !bar.hasOwnProperty("endAngle")
      ) {
        bar.lineWidth = 0
      } else {
        bar.lineWidth = 1
      }
      let barStyle = deepObjectMerge({}, styles.bar, style)
      bar = deepObjectMerge(bar, barStyle)
    })
    return { arrLayout }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: "bar",
      //选中偏移量基数
      activeOffset: 20,
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }

  mouseleave() {
    this.timer = setTimeout(() => {
      this.dataset.resetState()
      this.hoverIndex = -1
    }, 100)
  }

  mousemove(e, el) {
    clearTimeout(this.timer)
    // let fun = throttle(function(e, el) {
    let renderData = this.renderData()
    let ind = el.attr("_index")
    let groupInd = Math.floor(ind / renderData.length)
    if (groupInd !== this.hoverIndex) {
      this.dataset.resetState()
      this.dataset[this.renderAttrs.layoutBy === "rows" ? "cols" : "rows"][
        groupInd
      ].state = "hover"
      this.hoverIndex = groupInd
    }
    // }, 30).bind(this);
    // fun(e, el);
  }
  groupMousemove(e, el) {
    console.log(el)
  }
  renderData() {
    let renderAttrs = this.renderAttrs
    return this.dataset[renderAttrs.layoutBy]
  }
  render(data) {
    let { clientRect, innerRadiusPx, radiusPx } = this.renderAttrs
    let colors = this.theme.colors
    let styles = this.renderStyles
    return (
      <Group class="container" ref="wrap">
        <Group class="rings-group" onMouseleave={this.mouseleave}>
          {data.barData.map((ring, ind) => {
            let style = getStyle(
              this,
              "sector",
              [
                {
                  _index: ind,
                },
                styles.sector,
              ],
              [this.dataset.rows[ind], ind]
            )
            return ring.state === "disabled" || style === false ? (
              <Node />
            ) : (
              <Ring
                onMousemove={this.mousemove}
                {...style}
                animation={{ from: ring.from, to: ring.to }}
              />
            )
          })}
        </Group>
      </Group>
    )
  }
}
export default PolarBar
