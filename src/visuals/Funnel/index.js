import Base from "../../base/BaseVisual"
import { Group, Polyline, Label } from "spritejs"
import { deepObjectMerge, throttle } from "@qcharts/utils"
import layout from "./layout"
import { withGuide } from "./guide"
import { getStyle } from "@/utils/getStyle"
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
          pos: [0, 0],
          ...plg,
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
        from: {
          points: oldPolygons[i].to.points,
        },
        to: {
          ...polygon,
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
      let style = this.style("polygon")(plg.attrs, this.dataset.rows[i], i)
      let plgStyle = deepObjectMerge(
        { fillColor: plg.bgcolor || colors[i] },
        styles.funnel,
        style
      )
      plg = deepObjectMerge(plg, plgStyle)
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
  onMousemove = throttle(
    (event, el) => {
      if (this.groups.length && !isNaN(event.x) && !isNaN(event.y)) {
        let curInd = 0
        let [x, y] = el.getOffsetPosition(event.x, event.y)
        if (!this.renderAttrs.transpose) {
          //获取 x轴坐标的刻度
          let width = this.groups[0].size[0]
          //转换canvas坐标到当前group的相对坐标
          curInd = Math.floor(x / width)
        } else {
          let width = this.groups[0].size[1]
          //转换canvas坐标到当前group的相对坐标
          curInd = Math.floor(y / width)
        }
        if (curInd < 1) {
          curInd = 0
        } else if (curInd > this.groups.length - 1) {
          curInd = this.groups.length - 1
        }
        if (this.hoverIndex !== curInd) {
          let { bgpillarState } = this.renderAttrs
          bgpillarState[curInd] = "hover"
          bgpillarState[this.hoverIndex] = "defualt"
          this.attr("bgpillarState", bgpillarState)
          this.dataset.resetState()
          this.dataset.cols[curInd].state = "hover"
          this.hoverIndex = curInd
        }
      }
    },
    16,
    true
  )
  onMouseleave(e, el) {
    this.dataset.resetState()
    let { bgpillarState } = this.renderAttrs
    bgpillarState[this.hoverIndex] = "defualt"
    this.attr("bgpillarState", bgpillarState)
    this.hoverIndex = -1
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

    return (
      <Group
        class="container"
        ref="wrap"
        pos={[clientRect.left, clientRect.top]}
        size={[clientRect.width, clientRect.height]}
      >
        <Group ref="pillars" class="pillars-group" bgcolor={"#FF0"}>
          {data.polygons.map((pillar, ind) => {
            return (
              <Group>
                <Polyline
                  {...pillar.from}
                  animation={{ from: pillar.from, to: pillar.to }}
                />
                {this.withText(
                  pillar.to,
                  this.dataset[this.renderAttrs.layoutBy][ind][0]
                )}
                {withGuide(
                  this,
                  pillar.to,
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
