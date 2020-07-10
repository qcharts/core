import Base from '../../base/BasePlugin'
import { Group, Label, Polyline } from 'spritejs'
import { emptyObject, deepObjectMerge } from '@qcharts/utils'
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
    let targetVisual = this.chart.visuals[0]
    if (attrs.axisGap === undefined && targetVisual && targetVisual.constructor.name === 'Bar') {
      //如果axisGap没有赋值
      //如果是柱状图
      attrs.axisGap = true
    }
    if (targetVisual && targetVisual.constructor.name === 'Scatter') {
      attrs.type = 'value'
    }
    if (attrs.transpose === undefined && targetVisual) {
      //坐标轴转换
      attrs.transpose = targetVisual.renderAttrs.transpose
    }
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
      layer: 'axis',
      formatter: e => e
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
    let oldAxis = this.renderAxis || emptyObject()
    this.renderAxis = axis
    let { clientRect, formatter } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    let scaleStyle = styles.scale
    let labelStyle = styles.label
    let axisStyle = styles.axis
    let renderStyle = this.style('axis')(axisStyle)
    renderStyle = deepObjectMerge({}, axisStyle, renderStyle)
    //console.log('axis', renderStyle, axis)
    //当前主体颜色
    return (
      <Group ref="wrap" pos={[clientRect.left, clientRect.top]}>
        <Polyline {...renderStyle} animation={{ from: { points: oldAxis.axisPoints }, to: { points: axis.axisPoints } }}></Polyline>
        <Group>
          {axis.scales.map((scale, ind) => {
            let fromPos = (oldAxis.scales && oldAxis.scales[ind] && oldAxis.scales[ind].pos) || scale.pos
            let ani = { from: { pos: fromPos }, to: { pos: scale.pos } }
            // 排除pos属性，pos属性用来处理动画，其它属性直接赋值
            let style = this.style('scale')(scaleStyle, scale, ind)
            let renderStyle = deepObjectMerge({}, scaleStyle, style)
            return <Group {...filterClone(scale, [], ['pos'])} {...renderStyle} animation={ani}></Group>
          })}
          {axis.labels.map((label, ind) => {
            let fromPos = (oldAxis.labels && oldAxis.labels[ind] && oldAxis.labels[ind].pos) || label.pos
            let style = this.style('label')(labelStyle, label, ind)
            let renderStyle = deepObjectMerge({}, labelStyle, style)
            let ani = { from: { pos: fromPos }, to: { pos: label.pos } }
            return <Label {...filterClone(label, [], ['pos', 'text'])} text={formatter(label.text)} {...renderStyle} animation={ani}></Label>
          })}
        </Group>
      </Group>
    )
  }
}
export default Axis
