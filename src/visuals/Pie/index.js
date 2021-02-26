import Base from '../../base/BaseVisual'
import { Group, Node, Ring, Polyline, Label } from 'spritejs'
import filterClone from 'filter-clone'
import layout from './layout'
import { layoutLabel } from './layout'
import { computeLinePos } from './layout'
import { getStyle } from '../../utils/getStyle'
import { debounce } from '@qcharts/utils'
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
  beforeUpdate(attrs) {
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
    let arrLabelPos = this.getLabelsPos(arr)
    let arrObj = arr.filter(item => !item.disabled)
    let oldArrLabels = oldRings.filter(ring => !ring.disabled)
    if (arrLabelPos.length === arrObj.length) {
      arrObj.forEach((item, ind) => {
        item.label.to.pos = arrLabelPos[ind].pos
        item.label.from.pos = arrLabelPos[ind].pos
        if (oldArrLabels[ind]) {
          item.label.from.pos = oldArrLabels[ind].label.to.pos
        }
      })
    }
    return arr
  }
  computeLine(arr) {
    let { radiusPx, lineLength } = this.renderAttrs
    arr.forEach(item => {
      let { points: fromPoints, labelAnchor: fromAnchor, labelPos: fromPos, disabled: fromDisabled } = computeLinePos(item.from.startAngle, item.from.endAngle, item.from.pos, radiusPx + 1, lineLength)
      let { points: toPoints, labelAnchor: toAnchor, labelPos: toPos, disabled: toDisabled } = computeLinePos(item.to.startAngle, item.to.endAngle, item.to.pos, radiusPx + 1, lineLength)
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
          pos: fromPos,
          anchor: fromAnchor
        },
        to: {
          pos: toPos,
          anchor: toAnchor
        }
      }
      item.disabled = toDisabled
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
  rendered() {}
  defaultAttrs() {
    // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
    return {
      layer: 'pie',
      radius: 1,
      innerRadius: 0,
      startAngle: 0,
      endAngle: 360,
      lineLength: 20,
      //选中偏移量基数
      activeOffset: 10,
      formatter: function(str, data) {
        return str
      }
    }
  }
  defaultStyles() {
    // 默认的样式,继承base
    return {}
  }
  mousemove(event, el) {
    let renderData = this.renderData()
    let ind = el.attr('_index')
    if (ind !== this.hoverIndex) {
      let curData = renderData[ind]
      renderData.forEach(row => {
        if (row.state === 'hover') {
          row.state = 'default'
        }
      })
      curData.state = 'hover'
      this.hoverIndex = ind
    }
  }
  mouseleave() {
    let renderData = this.renderData()
    renderData.forEach(row => {
      if (row.state === 'hover') {
        row.state = 'default'
      }
    })
    this.hoverIndex = -1
  }
  renderData() {
    let renderAttrs = this.renderAttrs
    return this.dataset[renderAttrs.layoutBy]
  }
  labelRendered = debounce(() => {
    let arr = this.getLabelsPos()
    let rings = this.renderRings.filter(item => !item.disabled)
    arr.forEach((item, ind) => {
      let children = this.$refs['label-group'].children.filter(node => node instanceof Label)
      children[ind].transition(0.3).attr('pos', item.pos)
      rings[ind].label.from.pos = item.pos
      rings[ind].label.to.pos = item.pos
    })
  }, 100)
  getLabelsPos(arr) {
    let labels = []
    let children = this.$refs['label-group'].children
    if (arr) {
      arr.forEach((item, ind) => {
        if (!item.disabled) {
          labels.push({ pos: item.label.to.pos, size: children[ind].offsetSize })
        }
      })
    } else {
      this.renderRings.forEach((obj, ind) => {
        if (obj.disabled !== true) {
          let node = children[ind]
          if (node instanceof Label) {
            let pos = node.attr('pos')
            let size = node.offsetSize
            labels.push({ pos, size })
          }
        }
      })
    }
    return layoutLabel(labels)
  }
  render(rings) {
    let { clientRect, innerRadiusPx, radiusPx, formatter } = this.renderAttrs
    //渲染的样式，合并了theme中的styles与组件上的defaultStyles
    let styles = this.renderStyles
    //当前主体颜色
    let colors = this.theme.colors
    this.renderRings = rings
    const renderData = this.renderData()
    return (
      <Group zIndex={1} onAfterrender={this.labelRendered} class="container" pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group class="rings-group" onMouseleave={this.mouseleave}>
          {rings.map((ring, ind) => {
            let style = getStyle(this, 'sector', [{ strokeColor: colors[ind], fillColor: colors[ind], innerRadius: innerRadiusPx, outerRadius: radiusPx, _index: ind }, styles.sector], [this.dataset.rows[ind], ind])
            return ring.state === 'disabled' || style === false ? <Node /> : <Ring onMouseEvent={['click,dblclick', renderData[ind][0], ind]} onMouseEnter={this.mousemove} {...style} animation={{ from: ring.from, to: ring.to }} />
          })}
        </Group>
        <Group class="line-group">
          {rings.map((ring, ind) => {
            let style = getStyle(this, 'guideline', [{ strokeColor: colors[ind] }, styles.guideline], [this.dataset.rows[ind], ind])
            let hide = false
            if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
              hide = true
            }
            return hide || style === false ? <Node /> : <Polyline {...style} animation={{ from: ring.line.from, to: ring.line.to }} />
          })}
        </Group>
        <Group class="label-group" ref="label-group">
          {rings.map((ring, ind) => {
            let name = formatter(this.dataset.rows[ind].name, this.dataset.rows[ind].data)
            let style = getStyle(this, 'guideText', [{ fillColor: '#666', fontSize: 12 }, styles.guideText], [this.dataset.rows[ind], ind])
            let hide = false
            if (ring.to.startAngle === ring.to.endAngle || ring.state === 'disable' || style === false) {
              hide = true
            }
            return hide || style === false ? <Node /> : <Label text={name} {...style} pos={ring.label.from.pos} animation={{ from: ring.label.from, to: ring.label.to }} />
          })}
        </Group>
      </Group>
    )
  }
}

export default Pie
