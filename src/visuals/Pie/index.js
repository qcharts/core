import Base from '../../base/BaseVisual'
import { Group, Node, Ring, Polyline, Label } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import filterClone from 'filter-clone'
import layout from './layout'
import { computeLinePos } from './layout'
class Pie extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderRings = []
    this.hoverIndex = -1
    this.activeIndex = -1
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    let { radius, innerRadius } = attrs
    let { width, height } = attrs.clientRect
    attrs.center = [width / 2, height / 2]
    attrs.radiusPx = (Math.min(width, height) * radius) / 2
    attrs.innerRadiusPx = (Math.min(width, height) * innerRadius) / 2
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base
    let { rings } = this.getRenderData()
    let { center } = this.renderAttrs
    let arr = rings.map((item, ind) => {
      if (ind === 0) {
        return {
          from: { startAngle: 0, endAngle: 0, pos: center },
          to: { ...item, pos: center }
        }
      }
      let pervAngle = rings[ind - 1].endAngle
      return {
        from: { startAngle: pervAngle, endAngle: pervAngle, pos: center },
        to: { ...item, pos: center }
      }
    })
    this.computeLine(arr)
    return arr
  }
  beforeUpdate() {
    //更新前的处理函数，返回lines,继承base
    let { rings } = this.getRenderData()
    let { center } = this.renderAttrs
    let oldRings = this.renderRings
    let arr = rings.map((item, ind) => {
      let curPos = [center[0] + item.offsetPos[0], center[1] + item.offsetPos[1]]
      let attrs = filterClone(item, ['startAngle', 'endAngle'])
      if (ind === this.hoverIndex) {
        return {
          from: { ...oldRings[ind].to },
          to: { ...attrs, pos: curPos }
        }
      } else {
        return {
          from: { ...oldRings[ind].to },
          to: { ...attrs, pos: curPos }
        }
      }
    })
    this.computeLine(arr)
    return arr
  }
  computeLine(arr) {
    let { radiusPx } = this.renderAttrs
    console.log(arr)
    arr.forEach(item => {
      let { points: fromPoints, labelAnchor: fromAnchor } = computeLinePos(item.from.startAngle, item.from.endAngle, item.from.pos, radiusPx + 1, 15)
      let { points: toPoints, labelAnchor: toAnchor } = computeLinePos(item.to.startAngle, item.to.endAngle, item.to.pos, radiusPx + 1, 15)
      console.log(fromPoints[1], toPoints[1])
      item.line = {
        from: {
          points: fromPoints
        },
        to: {
          points: toPoints
        }
      }
      item.label = {
        from: {
          pos: fromPoints[1],
          anchor: fromAnchor
        },
        to: {
          pos: toPoints[1],
          anchor: toAnchor
        }
      }
    })
    //计算guideline位置
  }
  getRenderData() {
    //根据line的特性返回需要数据
    let renderAttrs = this.renderAttrs
    //let { radiusPx, center } = renderAttrs
    let renderData = this.renderData()
    let rings = layout.call(this, renderData, renderAttrs)
    return { rings }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'pie',
      radius: 1,
      innerRadius: 0,
      startAngle: 0,
      endAngle: 360,
      lineWidth: 1,
      //选中偏移量基数
      activeOffset: 10,
      //饼图上文字偏移量
      labelOffset: 20
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
  }
  mousemove(event, el) {
    let renderData = this.renderData()
    let ind = el.attr('_index')
    if (ind !== this.hoverIndex) {
      let curData = renderData[ind]
      renderData.forEach(row => {
        row.state = 'default'
      })
      curData.state = 'hover'
      this.hoverIndex = ind
    }
  }
  mouseleave() {
    let renderData = this.renderData()
    renderData.forEach(row => {
      row.state = 'default'
    })
    this.hoverIndex = -1
  }
  renderData() {
    let renderAttrs = this.renderAttrs
    return this.dataset[renderAttrs.layoutBy]
  }
  render(rings) {
    //console.log(rings)
    let { clientRect, innerRadiusPx, radiusPx } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderRings = rings
    return (
      <Group zIndex={1} class="container" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group class="rings-group" onMouseleave={this.mouseleave}>
          {rings.map((ring, ind) => {
            let sectorStyle = deepObjectMerge({ strokeColor: colors[ind] }, styles.sector)
            let style = this.style('sector')(sectorStyle, this.dataset.rows[ind], ind)
            let renderStyle = deepObjectMerge(sectorStyle, style)
            let attrs = { fillColor: colors[ind], innerRadius: innerRadiusPx, outerRadius: radiusPx, _index: ind }
            return ring.state === 'disabled' || style === false ? <Node /> : <Ring onMousemove={this.mousemove} {...attrs} {...renderStyle} animation={{ from: ring.from, to: ring.to }} />
          })}
        </Group>
        <Group class="line-group">
          {rings.map((ring, ind) => {
            let defaultStyle = deepObjectMerge({ strokeColor: colors[ind] }, styles.guideline)
            let style = this.style('guideline')(defaultStyle, this.dataset.rows[ind], ind)
            let renderStyle = deepObjectMerge(defaultStyle, style)
            let hide = false
            if (ring.to.startAngle === ring.to.endAngle) {
              hide = true
            }
            return hide || style === false ? <Node /> : <Polyline {...renderStyle} animation={{ from: ring.line.from, to: ring.line.to }} />
          })}
        </Group>
        <Group class="label-group">
          {rings.map((ring, ind) => {
            let name = this.dataset.rows[ind].name
            let defaultStyle = deepObjectMerge({ fillColor: '#666', fontSize: 12, padding: [4, 4] }, styles.guideline)
            let style = this.style('guideText')(defaultStyle, this.dataset.rows[ind], ind)
            let renderStyle = deepObjectMerge(defaultStyle, style)
            let hide = false
            if (ring.to.startAngle === ring.to.endAngle) {
              hide = true
            }
            return hide || style === false ? <Node /> : <Label text={name} {...renderStyle} pos={ring.label.from.pos} animation={{ from: ring.label.from, to: ring.label.to }} />
          })}
        </Group>
      </Group>
    )
  }
}

export default Pie
