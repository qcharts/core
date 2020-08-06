import Base from "../../base/BaseVisual"
import { Group, Polyline, Label } from "spritejs"
import { deepObjectMerge, throttle } from "@qcharts/utils"
import layout from "./layout"
import { withGuide } from "./guide"
import { getStyle } from "@/utils/getStyle"
import filterClone from "filter-clone"
class Funnel extends Base {
  constructor(attrs) {
    super(attrs)
    this.type = "funnel"
    this.polygons = null
    this.hoverIndex = -1
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base---------before
    let { polygons } = this.getRenderData()
    polygons = polygons.map((plg) => {
      return {
        attrs: { ...plg },
        from: {
          points:
            plg.points.length === 8
              ? [
                  plg.points[6],
                  plg.points[7],
                  plg.points[4],
                  plg.points[5],
                  plg.points[4],
                  plg.points[5],
                  plg.points[6],
                  plg.points[7],
                ]
              : [
                  plg.points[4],
                  plg.points[5],
                  plg.points[4],
                  plg.points[5],
                  plg.points[4],
                  plg.points[5],
                ],
        },
        to: {
          // pos: [0, 0],
          points: plg.points,
        },
      }
    })
    this.polygons = polygons
    return { polygons }
  }
  beforeUpdate() {
    let oldPolygons = this.polygons
    let { polygons } = this.getRenderData()
    polygons = polygons.map((polygon, i) => {
      return {
        attrs: { ...polygon },
        from: {
          points: oldPolygons[i].to.points,
        },
        to: {
          points: polygon.points,
        },
      }
    })
    this.polygons = polygons
    return { polygons }
  }
  getRenderData() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let polygons = layout(renderData, renderAttrs)
    let colors = this.theme.colors
    let styles = this.renderStyles
    polygons = polygons.map((plg, i) => {
      // let style = this.style("polygon")(plg.attrs, this.dataset.rows[i], i)
      // let plgStyle = deepObjectMerge(
      //   { fillColor: plg.bgcolor || colors[i] },
      //   styles.funnel,
      //   style
      // )
      // plg = deepObjectMerge(plg, plgStyle)
      return plg
    })
    return { polygons }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    let renderData = this.dataset["rows"]
    let stateArray = Array.from(
      { length: renderData[0].length },
      () => "defalut"
    )
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: "bar",
      formatter: (d) => (d.value ? d.value : d),
      bgpillarState: stateArray,
      states: {
        bgpillar: {
          animation: { duration: 20 },
          default: { opacity: 0.01 },
          hover: { opacity: 0.1 },
        },
      },
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }
  onMousemove(event, el) {
    let ind = el.attr("_ind")
    this.dataset.resetState()
    this.dataset[this.renderAttrs.layoutBy][ind][0].state = "hover"
  }
  1
  onMouseleave(e, el) {
    this.dataset.resetState()
  }
  myClick = function() {
    console.log("myclick")
  }

  withText(attrs, cell) {
    let { labelAttrs } = attrs
    if (cell.state === "disabled") {
      return
    }
    const textStyle = getStyle(this, "text", [{}], [cell.data, cell.row])
    if (textStyle === false) {
      return
    }
    // let { textFrom, textTo } = this.fromTos[index]
    return <Label {...labelAttrs} {...textStyle} />
  }

  render(data) {
    let { clientRect, bgpillarState, states } = this.renderAttrs
    const styles = this.renderStyles
    const colors = this.theme.colors
    return (
      <Group
        class="container"
        ref="wrap"
        pos={[clientRect.left, clientRect.top]}
        size={[clientRect.width, clientRect.height]}
      >
        <Group ref="pillars" class="pillars-group">
          {data.polygons.map((pillar, ind) => {
            const cell = this.dataset[this.renderAttrs.layoutBy][ind][0]
            let style = getStyle(
              this,
              "polygon",
              [{ _ind: ind, fillColor: colors[ind] }, styles.polygon],
              [cell, ind]
            )
            let styleHover = getStyle(
              this,
              "polygon:hover",
              [{ _ind: ind, opacity: 0.8 }, styles.polygon],
              [cell, ind]
            )
            if (cell.state === "hover") {
              deepObjectMerge(style, styleHover)
            }
            return (
              <Group>
                <Polyline
                  onMousemove={this.onMousemove}
                  onMouseleave={this.onMouseleave}
                  {...pillar.attrs}
                  {...pillar.from}
                  {...style}
                  animation={{ from: pillar.from, to: pillar.to }}
                />
                {this.withText(
                  pillar.attrs,
                  this.dataset[this.renderAttrs.layoutBy][ind][0],
                  ind
                )}
                {withGuide(
                  this,
                  pillar.attrs,
                  this.dataset[this.renderAttrs.layoutBy][ind][0],
                  this.renderAttrs.formatter
                )}
              </Group>
            )
          })}
        </Group>
        {/* <Group class="label-group">
        </Group>
        <Group class="line-group">
        </Group> */}
      </Group>
    )
  }
}
export default Funnel
