import Base from '../../base/BasePlugin'
import { Group, Label, Polyline, Node } from 'spritejs'
import { emptyObject } from '@qcharts/utils'
import filterClone from 'filter-clone'
import layout from './layout'
import { getStyle } from '../../utils/getStyle'
class Axis extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderAxis = emptyObject()
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    let targetVisual = this.chart.visuals[0]
    if (attrs.axisGap === undefined && targetVisual && targetVisual.constructorName === 'Bar') {
      //如果axisGap没有赋值
      //如果是柱状图
      attrs.axisGap = true
    }
    if (targetVisual && targetVisual.attr('axisGap')) {
      attrs.axisGap = targetVisual.attr('axisGap')
    }
    if (targetVisual && targetVisual.constructorName === 'Scatter') {
      attrs.type = attrs.type || 'value'
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
      zIndex: -1,
      formatter: e => e
    }
  }
  //defaultStyles() {}
  getRenderData() {
    //根据axis的特性返回需要数据
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let axis = layout.call(this, renderData, renderAttrs)
    return { axis }
  }
  render(axis) {
    let oldAxis = this.renderAxis || emptyObject()
    this.renderAxis = axis
    let { clientRect, formatter, orient, name } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    let axisStyle = getStyle(this, 'axis', styles.axis)
    //当前主体颜色
    let arrOrient = this.chart.plugins
      .map(plugin => {
        if (plugin.constructorName === 'Axis') {
          return plugin.renderAttrs.orient
        }
      })
      .filter(Boolean)
    let nameStyle = getStyle(this, 'name', [styles.name || {}, filterClone(axis.nameAttr, [], ['pos'])])
    let oldPos = (oldAxis.nameAttr && oldAxis.nameAttr.pos) || axis.nameAttr.pos
    let nameAni = { from: { pos: oldPos }, to: { pos: axis.nameAttr.pos } }
    return (
      <Group ref="wrap" pos={[clientRect.left, clientRect.top]}>
        <Polyline
          {...axisStyle}
          animation={{
            from: { points: oldAxis.axisPoints },
            to: { points: axis.axisPoints }
          }}
        ></Polyline>
        <Group>
          {axis.grids.map((grid, ind) => {
            let fromPoints = (oldAxis.grids && oldAxis.grids[ind] && oldAxis.grids[ind].points) || grid.points
            let ani = {
              from: { points: fromPoints },
              to: { points: grid.points }
            }
            let style = getStyle(this, 'grid', styles.grid, [{ label: axis.labels[ind] && axis.labels[ind].text }, ind])
            if (orient === 'left' || orient === 'right') {
              if ((ind === 0 && arrOrient.includes('bottom')) || (ind === axis.grids.length - 1 && arrOrient.includes('top'))) {
                return <Node />
              }
            } else if (orient === 'top' || orient === 'bottom') {
              if ((ind === 0 && arrOrient.includes('left')) || (ind === axis.grids.length - 1 && arrOrient.includes('right'))) {
                return <Node />
              }
            }
            return style === false ? <Node /> : <Polyline {...style} points={ani.from.points} animation={ani} />
          })}
          {axis.scales.map((scale, ind) => {
            let fromPos = (oldAxis.scales && oldAxis.scales[ind] && oldAxis.scales[ind].pos) || scale.pos
            let ani = { from: { pos: fromPos }, to: { pos: scale.pos } }
            // 排除pos属性，pos属性用来处理动画，其它属性直接赋值
            let style = getStyle(this, 'scale', styles.scale, [scale, ind])
            return style === false ? <Node /> : <Group {...filterClone(scale, [], ['pos'])} {...style} animation={ani}></Group>
          })}
          {axis.labels.map((label, ind) => {
            let fromPos = (oldAxis.labels && oldAxis.labels[ind] && oldAxis.labels[ind].pos) || label.pos
            let style = getStyle(this, 'label', styles.label, [label, ind])
            let ani = { from: { pos: fromPos }, to: { pos: label.pos } }
            return style === false ? <Node /> : <Label {...filterClone(label, [], ['pos', 'text'])} {...style} text={formatter(label.text)} animation={ani}></Label>
          })}
        </Group>
        {nameStyle === false || name === undefined || name.length === 0 ? <Node /> : <Label {...nameStyle} text={name} animation={nameAni} />}
      </Group>
    )
  }
}
export default Axis
