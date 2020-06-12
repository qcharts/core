import Base from '../../base/BaseVisual'
import { Group, Node, Ring } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
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
    let { width, height } = attrs.clientRect
    attrs.center = [width / 2, height / 2]
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
    return arr
  }
  beforeUpdate() {
    //更新前的处理函数，返回lines,继承base
    let { rings } = this.getRenderData()
    let { center } = this.renderAttrs
    let oldRings = this.renderRings
    let arr = rings.map((item, ind) => {
      let curPos = [center[0] + item.offsetPos[0], center[1] + item.offsetPos[1]]
      delete item.offsetPos
      if (ind === this.hoverIndex) {
        return {
          from: { ...oldRings[ind].to },
          to: { ...item, pos: curPos }
        }
      } else {
        return {
          from: { ...oldRings[ind].to },
          to: { ...item, pos: curPos }
        }
      }
    })
    return arr
  }
  getRenderData() {
    //根据line的特性返回需要数据
    let renderAttrs = this.renderAttrs
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
      activeOffset: 10
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
  }
  mousemove(event, el) {
    let renderData = this.renderData()
    console.log(renderData)
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
    let { clientRect, radius, innerRadius } = this.renderAttrs
    radius = (Math.min(clientRect.width, clientRect.height) * radius) / 2
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
            let attrs = { fillColor: colors[ind], innerRadius, outerRadius: radius, _index: ind }
            return ring.state === 'disabled' || style === false ? <Node /> : <Ring onMousemove={this.mousemove} {...attrs} {...renderStyle} animation={{ from: ring.from, to: ring.to }} />
          })}
        </Group>
      </Group>
    )
  }
}
export default Pie
