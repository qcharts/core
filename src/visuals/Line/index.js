import Base from '../../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Line extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderLines = []
    this.type = 'line'
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let arrLayout = layout(renderData, renderAttrs)
    let { height, width } = renderAttrs.clientRect
    //对角线长度的1.5保证会大于曲线的长度
    let maxLen = Math.sqrt(height ** 2, width ** 2) * 1.5
    let lines = arrLayout.map(item => {
      return {
        axisPoints: item.axisPoints,
        from: { points: item.points, lineDash: [1, maxLen] },
        to: { points: item.points, lineDash: [maxLen, maxLen] }
      }
    })
    return lines
  }
  beforeUpdate() {
    let renderAttrs = this.renderAttrs
    let renderData = this.dataset[renderAttrs.layoutBy]
    let arrLayout = layout(renderData, renderAttrs)
    let renderLines = this.renderLines
    let { height, width } = renderAttrs.clientRect
    //对角线长度的1.5保证会大于曲线的长度
    let maxLen = Math.sqrt(height ** 2, width ** 2) * 1.5
    let lines = arrLayout.map((item, i) => {
      let from = { points: item.points }
      if (renderLines[i]) {
        from = { points: renderLines[i].to.points }
      }
      if (!renderLines[i] || renderLines[i].state === 'disabled') {
        from.lineDash = [4, maxLen]
      }
      return {
        state: item.state,
        axisPoints: item.axisPoints,
        from,
        to: {
          points: item.points,
          lineDash: [maxLen, maxLen]
        }
      }
    })
    return lines
  }
  rendered() {
    console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    return {
      stack: false,
      layer: 'line'
    }
  }
  defaultStyles() {
    return {
      line: { lineWidth: 1 }
    }
  }
  render(lines) {
    let { clientRect } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderLines = lines
    return (
      <Group class="container" ref="wrap">
        <Group ref="lines" class="lines-group" pos={[clientRect.left, clientRect.top]}>
          {lines.map((line, ind) => {
            let style = this.style('line')(this.dataset.rows[ind], ind)
            let lineStyle = deepObjectMerge({ strokeColor: colors[ind] }, styles.line, style)
            return line.state === 'disabled' || style === false ? null : <Polyline {...lineStyle} animation={{ from: line.from, to: line.to }} />
          })}
        </Group>
        <Group ref="areas" class="areas-group" pos={[clientRect.left, clientRect.top]}>
          {this.type !== 'area'
            ? null
            : lines.map((line, ind) => {
                let fromPoints = deepObjectMerge([], line.from.points)
                let fromxx = [fromPoints[0][0], fromPoints[fromPoints.length - 1][0]]
                let toPoints = deepObjectMerge([], line.to.points)
                let toxx = [toPoints[0][0], toPoints[toPoints.length - 1][0]]
                fromPoints.unshift([fromxx[0], line.axisPoints[0][1]])
                fromPoints.push([fromxx[1], line.axisPoints[1][1]])
                toPoints.unshift([toxx[0], line.axisPoints[0][1]])
                toPoints.push([toxx[1], line.axisPoints[1][1]])
                let style = this.style('line')(this.dataset.rows[ind], ind)
                return line.state === 'disabled' || style === false ? null : <Polyline fillColor={colors[ind]} animation={{ from: { points: fromPoints }, to: { points: toPoints, opacity: 0.5 } }} />
              })}
        </Group>
      </Group>
    )
  }
}
export default Line
