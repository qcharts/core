import Base from '../../base/BaseVisual'
import { Group, Node, Ring } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Pie extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderRings = []
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
    let arr = rings.map((item, ind) => {
      if (ind === 0) {
        return {
          from: { startAngle: 0, endAngle: 0 },
          to: { ...item }
        }
      }
      let pervAngle = rings[ind - 1].endAngle
      return {
        from: { startAngle: pervAngle, endAngle: pervAngle },
        to: { ...item }
      }
    })
    return arr
  }
  beforeUpdate() {
    //更新前的处理函数，返回lines,继承base
    let { rings } = this.getRenderData()
    let oldRings = this.renderRings
    let arr = rings.map((item, ind) => {
      return {
        from: { ...oldRings[ind].to },
        to: { ...item }
      }
    })
    return arr
  }
  getRenderData() {
    //根据line的特性返回需要数据
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
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
      lineWidth: 1
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
  }
  render(rings) {
    let { clientRect, radius, center, innerRadius } = this.renderAttrs
    radius = (Math.min(clientRect.width, clientRect.height) * radius) / 2
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderRings = rings
    return (
      <Group zIndex={1} class="container" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group class="rings-group">
          {rings.map((ring, ind) => {
            let sectorStyle = deepObjectMerge({ strokeColor: colors[ind] }, styles.sector)
            let style = this.style('sector')(sectorStyle, this.dataset.rows[ind], ind)
            let renderStyle = deepObjectMerge(sectorStyle, style)
            let attrs = { fillColor: colors[ind], pos: center, innerRadius, outerRadius: radius }
            return ring.state === 'disabled' || style === false ? <Node /> : <Ring {...attrs} {...renderStyle} animation={{ from: ring.from, to: ring.to }} />
          })}
        </Group>
      </Group>
    )
  }
}
export default Pie
