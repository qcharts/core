import Base from '../../base/BasePlugin'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge, emptyObject } from '@qcharts/utils'
import filterClone from 'filter-clone'
import layout from './layout'
class Axis extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderAxis = emptyObject()
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    let { axis } = this.getRenderData()
    return axis
  }
  beforeUpdate() {
    let { axis } = this.getRenderData()
    return axis
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    return {
      layer: 'axis'
    }
  }
  //defaultStyles() {}
  getRenderData() {
    //根据axis的特性返回需要数据
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let axis = layout(renderData, renderAttrs)
    return { axis }
  }
  render(axis) {
    let oldAxis = this.renderAxis
    this.renderAxis = axis
    let { clientRect } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    let scaleStyle = styles.scale
    let labelStyle = styles.label
    //当前主体颜色
    return (
      <Group ref="wrap" pos={[clientRect.left, clientRect.top]}>
        <Polyline {...styles.axis} animation={{ from: { points: oldAxis.axisPoints }, to: { points: axis.axisPoints } }}></Polyline>
      </Group>
    )
  }
}
export default Tooltip
