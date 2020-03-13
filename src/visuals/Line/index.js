import Base from '../../base/BaseVisual'
import { Group, Label, Polyline } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'
class Line extends Base {
  constructor(attrs) {
    super(attrs)
    this.renderLines = []
    this.type = 'line'
    this.guidePoints = []
  }
  get renderAttrs() {
    //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
    let attrs = super.renderAttrs
    return attrs
  }
  beforeRender() {
    //渲染前的处理函数，返回lines,继承base
    let { arrLayout, maxLen } = this.getRenderData()
    let lines = arrLayout.map(item => {
      return {
        smoothRange: item.smoothRange,
        areaFrom: { points: item.areaPoints },
        areaTo: { points: item.areaPoints },
        from: { points: item.points, lineDash: [1, maxLen] },
        to: { points: item.points, lineDash: [maxLen, maxLen] }
      }
    })
    return lines
  }
  beforeUpdate() {
    //更新前的处理函数，返回lines,继承base
    let { arrLayout, maxLen } = this.getRenderData()
    let renderLines = this.renderLines
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
        smoothRange: item.smoothRange,
        areaFrom: renderLines[i].areaTo,
        areaTo: {
          points: item.areaPoints
        },
        from,
        to: {
          points: item.points,
          lineDash: [maxLen, maxLen]
        }
      }
    })
    return lines
  }
  getRenderData() {
    //根据line的特性返回需要数据
    let renderAttrs = this.renderAttrs
    //console.log(renderAttrs)
    let renderData = this.dataset[renderAttrs.layoutBy]
    let arrLayout = layout.call(this, renderData, renderAttrs)
    let { height, width } = renderAttrs.clientRect
    //对角线长度的2保证会大于曲线的长度
    let maxLen = Math.sqrt(height ** 2, width ** 2) * 2
    return { width, height, arrLayout, maxLen }
  }
  rendered() {
    //console.log(this.$refs['wrap'])
  }
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'line'
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {
      smooth: false
    }
  }
  guidelinemove(event, el) {
    if (this.renderLines.length) {
      //获取 x轴坐标的刻度
      let arrX = this.renderLines[0].to.points.map(pos => pos[0])
      //转换
      let [x, y] = el.getOffsetPosition(event.x, event.y)
      let curInd = 0
      //查找当前位置
      for (let i = 0; i < arrX.length; i++) {
        if (x > arrX[i] && x < arrX[i + 1]) {
          curInd = Math.abs(x - arrX[i]) < Math.abs(x - arrX[i + 1]) ? i : i + 1
          break
        }
      }
      //重置所有的dateset的状态
      this.dataset.resetState()
      //设置当前列的state为hover
      this.dataset.cols[curInd].state = 'hover'
      let { clientRect } = this.renderAttrs
      let posX = arrX[curInd]
      this.guidePoints = [
        [posX, 0],
        [posX, clientRect.height]
      ]
      console.log(this.guidePoints)
      this.update()
    }
  }
  render(lines) {
    let { clientRect, smooth } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderLines = lines
    return (
      <Group class="container" ref="wrap">
        <Group onClick={this.myclick} ref="lines" class="lines-group" size={[clientRect.width, clientRect.height]} pos={[clientRect.left, clientRect.top]}>
          {lines.map((line, ind) => {
            let mergeStyle = deepObjectMerge({ strokeColor: colors[ind], smooth }, styles.line)
            let style = this.style('line')(mergeStyle, this.dataset.rows[ind], ind)
            let lineStyle = deepObjectMerge(mergeStyle, style)
            return line.state === 'disabled' || style === false ? null : <Polyline onClick={this.lineClick} {...lineStyle} animation={{ from: line.from, to: line.to }} />
          })}
        </Group>
        <Group ref="areas" class="areas-group" pos={[clientRect.left, clientRect.top]}>
          {this.type !== 'area'
            ? null
            : lines.map((line, ind) => {
                let mergeStyle = deepObjectMerge({ fillColor: colors[ind], smooth }, styles.area)
                let style = this.style('area')(mergeStyle, this.dataset.rows[ind], ind)
                let areaStyle = deepObjectMerge(mergeStyle, style)
                return line.state === 'disabled' || style === false ? null : <Polyline smoothRange={line.smoothRange} {...areaStyle} animation={{ from: line.areaFrom, to: line.areaTo }} />
              })}
        </Group>
        <Group class="guide-line-group" onMousemove={this.guidelinemove} size={[clientRect.width, clientRect.height]} pos={[clientRect.left, clientRect.top]}>
          {this.guidePoints.length ? <Polyline points={this.guidePoints} ref="guideline" strokeColor={'#f00'} /> : null}
        </Group>
      </Group>
    )
  }
}
export default Line
