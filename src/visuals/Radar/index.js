import { Group, Polyline, Label, Arc } from 'spritejs'
import { deepObjectMerge, throttle } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'
import layout from './layout'

class Radar extends BaseVisual {
  constructor(attrs) {
    super(attrs)
    this.type = 'radar'
    this.sectionData = []
    this.scaleEl = []
    // 网格背景数据备份，数据全部隐藏的时候显示上一个备份的数据
    this.lastGridAttr = []
  }

  //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
  get renderAttrs() {
    const attrs = super.renderAttrs
    const { height, width } = attrs.clientRect
    const center = [width / 2, height / 2]

    const { radius } = attrs
    const len = Math.min(...center) * radius

    return { ...attrs, center, len }
  }

  // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
  defaultAttrs() {
    return {
      gridType: 'polygon', // 网格类型,polygon,circle
      splitNumber: 4, // 网格层次
      startAngle: 270, // 起始角度
      radius: 0.6, // 雷达图半径
      labelOffset: 7, // 文字偏移
    }
  }

  getRenderData() {
    const dataSet = this.dataset
    // // FIXME 数据筛选之前先按照label进行排序?是否需要？
    const { len, splitNumber, startAngle, labelOffset } = this.renderAttrs
    const { sectionAttrs, axisAttrs, gridAttrs } = layout([...dataSet.rows], len, splitNumber, startAngle, labelOffset)

    const colors = this.theme.colors

    sectionAttrs.forEach((s, i) => {
      s.strokeColor = colors[i]
      s.fillColor = colors[i]
    })

    return { sectionAttrs, axisAttrs, gridAttrs }
  }

  showTooltip(evt, attr) {
    this.dataset.hoverData({
      data: { color: attr.fillColor, data: attr.dataOrigin },
      ...evt,
    })
  }

  hideTooltip() {
    this.dataset.hoverData(null)
  }

  beforeUpdate() {
    super.beforeUpdate()
    const updateData = this._processData()
    if (updateData.sectionAttrs) {
      const len = Math.max(this.sectionData.length, updateData.sectionAttrs.length)
      for (let i = 0; i < len; i++) {
        this.sectionData[i] = updateData.sectionAttrs[i]
      }
    }
    this.sectionData = [...updateData.sectionAttrs]
    console.log(JSON.parse(JSON.stringify(this.sectionData)))
    return updateData
  }

  beforeRender() {
    super.beforeRender()
    const renderData = this._processData()
    this.sectionData = [...renderData.sectionAttrs]
    return renderData
  }

  rendered() {}

  _processData() {
    const { sectionAttrs, ...otherData } = this.getRenderData()
    const processSectionAttrs = sectionAttrs
      .filter((attr) => attr.state !== 'disabled')
      .map((attr, i) => {
        const { points, ...otherAttrs } = attr
        const animation = this._getPolylineAnimation(points, i)
        const { style, hoverStyle } = this._getStyle('section', attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          attr.display = 'none'
        }
        let stateStyle = { lineWidth: attr.lineWidth, display: 'block' }
        if (attr.state === 'hover') {
          stateStyle = { ...hoverStyle, lineWidth: attr.lineWidth + 1 }
        }
        if (attr.state === 'disabled') {
          stateStyle = { display: 'none' }
        }
        // 由于有着动画的原因，一开始的points需要设置为from points
        return deepObjectMerge(otherAttrs, { points: animation.from.points }, { animation }, style, stateStyle)
      })
    return { ...otherData, sectionAttrs: processSectionAttrs }
  }

  _getScaleAnimation(toScale) {
    return {
      from: { scale: 0 },
      to: { scale: toScale },
    }
  }

  _getStyle(type, attr, data, index) {
    return {
      style: this.style(type)(attr, data, index) || {},
      hoverStyle: this.style(`${type}:hover`)(attr, data, index) || {},
    }
  }

  _isSamePoints(fromPts, toPts) {
    return fromPts.toString() === toPts.toString()
  }

  _getPolylineAnimation(toPoints, index) {
    let preData = this.sectionData[index]
    if (!preData) {
      const fromPoints = new Array(toPoints.length).fill([0, 0])
      preData = {
        animation: {
          to: {
            points: fromPoints,
          },
        },
      }
    }
    return {
      from: { points: preData.animation.to.points },
      to: { points: toPoints },
    }
  }

  renderGrid(gridAttrs) {
    if (gridAttrs.length !== 0) {
      this.lastGridAttr = gridAttrs
    } else {
      gridAttrs = this.lastGridAttr
    }
    const { gridType } = this.attr()
    const GridShape = gridType === 'circle' ? Ring : Polyline
    return gridAttrs.map((attr, i) => {
      const animation = this.scaleEl.length > 0 ? {} : this._getScaleAnimation(attr.scale)
      const { style, ...other } = this._getStyle('grid', attr, null, i)
      if (style === false) {
        return
      }
      let gridAttr = { ...attr }
      if (gridType === 'circle') {
        gridAttr = {
          lineWidth: attr.lineWidth,
          strokeColor: attr.strokeColor,
          innerRadius: 0,
          outerRadius: attr.radius,
          scale: attr.scale,
        }
      }
      return <GridShape {...gridAttr} {...style} {...other} animation={animation} />
    })
  }

  renderAxis(axisAttrs) {
    const animation = this.sectionData.length > 0 ? {} : this._getScaleAnimation(1)
    return axisAttrs.map((attr, i) => {
      if (attr.disabled) {
        return
      }

      const { style, ...other } = this._getStyle('axis', attr, { text: attr.label }, i)
      if (style === false) {
        return
      }
      const axisStyle = deepObjectMerge(attr, style, other)
      return (
        <Group clipOverflow={false} size={[1, 1]}>
          <Polyline {...axisStyle} animation={animation} />
          {this._renderAxisLabel(attr, i)}
          {this._renderAxisScale(attr, i)}
        </Group>
      )
    })
  }

  _renderAxisLabel(attrs, i) {
    const calcAnchor = (radian) => {
      const x = 0.5 - Math.cos(radian)
      const y = 0.5 - Math.sin(radian)
      return [x, y]
    }
    const { label, labelPos, radian } = attrs
    const anchor = calcAnchor(radian)
    const attr = {
      text: label,
      pos: labelPos,
      color: '#67728C',
      radian,
      anchor,
      fontSize: 12,
    }
    const animation = this.sectionData.length > 0 ? {} : this._getScaleAnimation(1)
    const { style, ...other } = this._getStyle('label', attr, { text: attr.label, radian }, i)
    if (style === false) {
      return
    }
    const axisLabelStyle = deepObjectMerge(attr, style, other)
    return <Label {...axisLabelStyle} animation={animation} />
  }

  _renderAxisScale(attrs, index) {
    const getPt = (attrs) => {
      const { points, splitNumber, maxScale } = attrs
      const [x, y] = points[1]
      const perNum = maxScale / splitNumber
      return [[x / splitNumber, y / splitNumber], perNum]
    }
    const [[perX, perY], perNum] = getPt(attrs)
    let labels = []
    const display = index === 0 ? 'block' : 'none'
    const common = {
      fontSize: 12,
      anchor: [1, 0.5],
      translate: [-5, 0],
      display,
    }
    for (let i = 0; i < attrs.splitNumber + 1; i++) {
      let point = [perX * i, perY * i]
      let text = perNum * i
      let attr = {
        text,
        color: '#67728C',
        pos: point,
        ...common,
      }
      const { style, ...other } = this._getStyle('scale', attr, { text, index }, i)
      if (style === false) {
        return
      }
      if (attr.display !== 'none') {
        let animation = {}
        const elIndex = index * attrs.splitNumber + i
        const preEl = this.scaleEl[elIndex]
        if (preEl) {
          const { text: preText } = preEl
          if (preText !== text) {
            animation = {
              from: { text: preText },
              to: { text },
              formatter: (attr) => {
                attr.text = attr.text.toFixed(0)
                return attr
              },
            }
          }
        } else {
          animation = {
            from: { pos: [0, 0] },
            to: { pos: point },
          }
        }
        this.scaleEl[i] = { text: Number(text.toFixed(0)) }
        labels.push(<Label {...attr} {...style} {...other} animation={animation} />)
      }
    }
    return labels
  }

  onMouseenter = throttle(
    (event, el) => {
      this.dataset.resetState()
      const name = el.attributes.name
      this.dataset.rows
        .filter((row) => row.state !== 'disabled')
        .forEach((row) => {
          row.state = row.name === name ? 'hover' : 'default'
        })
    },
    16,
    true
  )
  onMouseleave() {
    this.dataset.resetState()
    this.dataset.rows.filter((row) => row.state !== 'disabled').forEach((row) => row.state === 'default')
  }

  renderSection(sectionAttrs) {
    return sectionAttrs.map((attr, i) => {
      if (attr.disabled) {
        this.sectionData[i] = null
        return
      }
      const { animation, ...otherAttr } = attr
      return <Polyline zIndex={9 + i} animation={animation} {...otherAttr} onMouseenter={this.onMouseenter} onMouseleave={this.onMouseleave} />
    })
  }

  renderPoints(sectionAttrs) {
    const allPoints = sectionAttrs.map((attrs, index) => {
      if (attrs.disabled) {
        return
      }
      const { animation: secAnimation, dataOrigin, strokeColor } = attrs
      const prePoints = secAnimation && secAnimation.from && secAnimation.from.points
      const toPoints = secAnimation && secAnimation.to && secAnimation.to.points
      return toPoints.map((point, i) => {
        let attr = {
          pos: point,
          fillColor: strokeColor,
          startAngle: 0,
          endAngle: 360,
          radius: 2,
          dataOrigin: dataOrigin[i],
          anchor: [0.5, 0.5],
        }
        let animation = {
          from: { pos: [0, 0] },
          to: { pos: point },
        }

        if (prePoints && prePoints[i]) {
          if (!this._isSamePoints(prePoints[i], point)) {
            animation.from.pos = prePoints[i]
            attr.pos = prePoints[i]
          } else {
            animation = {}
          }
        }
        const style = this.style('point')(attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }
        return <Arc {...attr} {...style} animation={animation} />
      })
    })

    return allPoints.reduce((pre, cur) => pre.concat(cur), [])
  }

  render({ sectionAttrs, axisAttrs, gridAttrs }) {
    const { center, clientRect } = this.renderAttrs
    return (
      <Group pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group pos={center}>
          {this.renderGrid(gridAttrs)}
          {this.renderAxis(axisAttrs)}
          {this.renderSection(sectionAttrs)}
          {this.renderPoints(sectionAttrs)}
        </Group>
      </Group>
    )
  }
}

export default Radar
