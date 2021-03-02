import { Group, Polyline, Arc, Label, Node } from 'spritejs'
import { deepObjectMerge, throttle, jsType } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'
import layout from './layout'
import Point from '../../utils/Point'

class Radar extends BaseVisual {
  constructor(attrs) {
    super(attrs)
    this.type = 'radar'
    this.sectionData = []
    this.scaleEl = []
    this.oldPos = null
  }

  //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
  get renderAttrs() {
    const attrs = super.renderAttrs
    const { height, width } = attrs.clientRect
    const center = [width / 2, height / 2]

    const len = Math.min(...center) * attrs.radius

    return { ...attrs, center, len }
  }

  // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
  defaultAttrs() {
    return {
      layer: 'radar',
      gridType: 'polygon', // 网格类型,polygon,circle
      splitNumber: 4, // 网格层次
      startAngle: 270, // 起始角度
      radius: 0.6, // 雷达图半径
      labelOffset: 7 // 文字偏移
    }
  }

  getPolylineAnimation(toPoints, state, index) {
    const zeroPoints = new Array(toPoints.length).fill([0, 0])
    const preData = this.sectionData[index] || { animation: { to: { points: zeroPoints } } }
    const animation = {
      from: { points: preData.animation.to.points },
      to: { points: toPoints }
    }
    // disabled的时候缩回原点并透明
    if (state === 'disabled') {
      animation.to.points = zeroPoints
    }
    return animation
  }

  getRenderData() {
    const dataSet = this.dataset
    // // FIXME 数据筛选之前先按照label进行排序?是否需要？
    const { len, splitNumber, startAngle, labelOffset } = this.renderAttrs
    const colors = this.theme.colors

    const { sectionAttrs, axisAttrs, gridAttrs } = layout([...dataSet.rows], len, splitNumber, startAngle, labelOffset, colors)

    return { sectionAttrs, axisAttrs, gridAttrs }
  }

  processData() {
    const { sectionAttrs, ...otherData } = this.getRenderData()
    const processSectionAttrs = sectionAttrs.map((attr, i) => {
      const { points, state, ...otherAttrs } = attr
      const { style, hoverStyle } = this.getStyle('section', attr, [...attr.dataOrigin], i)
      let stateStyle = state === 'hover' ? hoverStyle : {}
      const animation = this.getPolylineAnimation(points, state, i)
      return deepObjectMerge(otherAttrs, { state }, { animation }, style, stateStyle)
    })
    return { ...otherData, sectionAttrs: processSectionAttrs }
  }

  beforeRender() {
    super.beforeRender()
    const renderData = this.processData()
    this.sectionData = [...renderData.sectionAttrs]
    return renderData
  }

  beforeUpdate() {
    super.beforeUpdate()
    const updateData = this.processData()
    if (updateData.sectionAttrs) {
      const len = Math.max(this.sectionData.length, updateData.sectionAttrs.length)
      for (let i = 0; i < len; i++) {
        this.sectionData[i] = updateData.sectionAttrs[i]
      }
    }
    this.sectionData = [...updateData.sectionAttrs]
    return updateData
  }

  rendered() {}

  getScaleAnimation(toScale) {
    return {
      from: { scale: 0 },
      to: { scale: toScale }
    }
  }

  getStyle(type, attr, data, index) {
    return {
      style: this.style(type)(attr, data, index),
      hoverStyle: this.style(`${type}:hover`)(attr, data, index)
    }
  }

  isSamePoints(fromPts, toPts) {
    return fromPts.toString() === toPts.toString()
  }

  renderGrid(gridAttrs) {
    const { gridType } = this.renderAttrs
    const GridShape = gridType === 'circle' ? Arc : Polyline
    return gridAttrs.map((attr, i) => {
      const animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(attr.scale)
      const { style } = this.getStyle('grid', attr, null, i)
      if (style === false) {
        return
      }
      return <GridShape {...attr} {...style} animation={animation} />
    })
  }

  renderAxisLabel(attrs, i) {
    const calcAnchor = radian => {
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
      fontSize: 12
    }
    const animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1)
    const { style } = this.getStyle('label', attr, { text: attr.label, radian }, i)
    if (style === false) {
      return
    }
    return <Label {...attr} {...style} animation={animation} />
  }

  renderAxisScale(attrs, index) {
    const getPt = attrs => {
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
      display
    }
    for (let i = 0; i < attrs.splitNumber + 1; i++) {
      let point = [perX * i, perY * i]
      let text = perNum * i
      let attr = {
        text,
        color: '#67728C',
        pos: point,
        ...common
      }
      const { style } = this.getStyle('scale', attr, { text, index }, i)
      const elIndex = index * attrs.splitNumber + i
      const preEl = this.scaleEl[elIndex]
      if (attr.display !== 'none') {
        let animation = {}
        if (preEl) {
          if (preEl.text !== text) {
            animation = {
              from: { text: preEl.text },
              to: { text },
              formatter: attr => {
                attr.text = attr.text.toFixed(0)
                return attr
              }
            }
          }
        } else {
          animation = {
            from: { pos: [0, 0] },
            to: { pos: point }
          }
        }
        this.scaleEl[i] = { text: Number(text.toFixed(0)) }
        labels.push(style === false ? <Node /> : <Label {...attr} {...style} animation={animation} />)
      }
    }
    return labels
  }

  renderAxis(axisAttrs) {
    const animation = this.scaleEl.length > 0 ? {} : this.getScaleAnimation(1)
    return axisAttrs.map((attr, i) => {
      const { style } = this.getStyle('axis', attr, { text: attr.label }, i)
      if (style === false) {
        return
      }
      return (
        <Group>
          <Polyline {...attr} {...style} animation={animation} />
          {this.renderAxisLabel(attr, i)}
          {this.renderAxisScale(attr, i)}
        </Group>
      )
    })
  }

  renderPoints(sectionAttrs) {
    const allPoints = sectionAttrs.map(attrs => {
      const { animation: secAnimation, dataOrigin, strokeColor, state } = attrs
      const prePoints = secAnimation && secAnimation.from && secAnimation.from.points
      const toPoints = secAnimation && secAnimation.to && secAnimation.to.points
      return toPoints.map((point, i) => {
        const attr = {
          pos: point,
          fillColor: strokeColor,
          radius: 2,
          dataOrigin: dataOrigin[i]
        }
        const { style, hoverStyle } = this.getStyle('point', attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }

        let animation = {
          from: { pos: [0, 0], opacity: 1 },
          to: { pos: point, opacity: 1 }
        }

        if (prePoints && prePoints[i]) {
          if (!this.isSamePoints(prePoints[i], point)) {
            animation.from.pos = prePoints[i]
          } else {
            animation.from.pos = point
          }
        }
        if (state === 'disabled') {
          animation.to.opacity = 0
        }
        const stateStyle = state === 'hover' ? hoverStyle : {}
        return <Point {...attr} {...style} {...stateStyle} animation={animation} zIndex={99} />
      })
    })

    return allPoints.reduce((pre, cur) => pre.concat(cur), [])
  }

  renderSection(sectionAttrs) {
    return sectionAttrs.map((attr, i) => {
      const { animation, ...otherAttr } = attr
      const cell = this.dataset[this.renderAttrs.layoutBy][i]
      return <Polyline zIndex={9 + i} {...otherAttr} animation={animation} onMouseEvent={['click', cell, i]} onMouseenter={this.onMouseenter} onMouseleave={this.onMouseleave} />
    })
  }

  onMouseenter = throttle(
    (event, el) => {
      this.dataset.resetState()
      const name = el.attributes.name
      this.dataset.rows
        .filter(row => row.state !== 'disabled')
        .forEach(row => {
          row.state = row.name === name ? 'hover' : 'default'
        })
    },
    16,
    true
  )
  onMouseleave() {
    this.dataset.resetState()
    this.dataset.rows.filter(row => row.state !== 'disabled').forEach(row => row.state === 'default')
  }

  render({ sectionAttrs, axisAttrs, gridAttrs }) {
    const { center, clientRect } = this.renderAttrs
    const gAnimation = {
      from: { pos: this.oldPos ? this.oldPos : center },
      to: { pos: center }
    }
    this.oldPos = center
    return (
      <Group pos={[clientRect.left, clientRect.top]} size={[clientRect.width, clientRect.height]}>
        <Group pos={center} animation={gAnimation}>
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
