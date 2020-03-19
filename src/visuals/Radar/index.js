import { Group, Polyline, Label, Ring } from 'spritejs'
import BaseVisual from '../../base/BaseVisual'
import layout from './layout'

class Radar extends BaseVisual {
  constructor(attrs) {
    super(attrs)
    this.type = 'radar'
    this.areaEl = []
    this.scaleEl = []
    this.isUpdate = false
    // 网格背景数据备份，数据全部隐藏的时候显示上一个备份的数据
    this.lastGridAttr = []
  }

  //处理默认属性，变为渲染时的属性，比如高宽的百分比，通用属性到base中处理，如果需要新增渲染时的默认值，在该处处理
  get attrs() {
    return this.renderAttrs
  }

  // 默认的属性,继承base，正常情况可以删除，建议到theme里面设置默认样式
  defaultAttrs() {
    return {
      gridType: 'polygon', // 网格类型,polygon,circle
      splitNumber: 4, // 网格层次
      startAngle: 270, // 起始角度
      radius: 0.6, // 雷达图半径
      labelOffset: 7 // 文字偏移
    }
  }

  get center() {
    const attrs = this.attrs
    const { height, width } = attrs.clientRect
    return [width / 2, height / 2]
  }

  get len() {
    const { radius } = this.attrs
    return Math.min(...this.center) * radius
  }

  getRenderData() {
    const dataSet = this.dataset
    // // FIXME 数据筛选之前先按照label进行排序?是否需要？
    const len = this.len
    const { splitNumber, startAngle, labelOffset } = this.attrs
    const { sectionAttrs, axisAttrs, gridAttrs } = layout([...dataSet.rows], len, splitNumber, startAngle, labelOffset)

    const colors = this.theme.colors

    sectionAttrs.forEach((s, i) => {
      s.strokeColor = colors[i]
      s.fillColor = colors[i]
    })

    const sLen = sectionAttrs.length
    for (let i = sLen; i < this.areaEl.length; i++) {
      this.areaEl[i] = null
    }

    return { sectionAttrs, axisAttrs, gridAttrs }
  }

  showTooltip(evt, attr) {
    this.chart.setCanvasCursor('pointer')
    this.dataset.hoverData({
      data: { color: attr.fillColor, data: attr.dataOrigin },
      ...evt
    })
  }

  hideTooltip() {
    this.dataset.hoverData(null)
  }

  beforeUpdate() {
    super.beforeUpdate()
    this.isUpdate = true
    return this.getRenderData()
  }

  beforeRender() {
    super.beforeRender()
    return this.getRenderData()
  }

  update() {
    this.forceUpdate()
  }
  rendered() {}

  _getScaleAnimation(toScale) {
    return {
      from: { scale: 0 },
      to: { scale: toScale }
    }
  }

  _getStyle(type, attr, data, index) {
    return {
      style: this.style(type)(attr, data, index),
      hoverState: this.style(`${type}:hover`)(attr, data, index),
      onMouseenter: (_, el) => el.attr('state', 'hover'),
      onMouseleave: (evt, el) => {
        el.attr('state', 'normal')
        this.chart.setCanvasCursor('default')
      }
    }
  }

  _isSamePoints(fromPts, toPts) {
    if (fromPts.toString() === toPts.toString()) {
      return true
    }
    return false
  }

  _getPolylineAnimation(attr, index) {
    let newAttr = attr
    let animation = this._getScaleAnimation(1)
    // 更新的动画
    const preEl = this.areaEl[index]
    if (preEl) {
      const { points: toPoints, ...other } = attr
      const { points } = preEl.attr()
      if (!this._isSamePoints(points, toPoints)) {
        animation = {
          from: { points },
          to: { points: toPoints },
          useTween: true
        }
        newAttr = other
      } else {
        animation = {}
      }
    }
    return { attr: newAttr, animation }
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
      const animation = this.isUpdate ? {} : this._getScaleAnimation(attr.scale)
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
          scale: attr.scale
        }
      }
      return <GridShape {...gridAttr} {...style} {...other} animation={animation} />
    })
  }

  renderAxis(axisAttrs) {
    const animation = this.isUpdate ? {} : this._getScaleAnimation(1)
    return axisAttrs.map((attr, i) => {
      if (attr.disabled) {
        return
      }
      const { style, ...other } = this._getStyle('axis', attr, { text: attr.label }, i)
      if (style === false) {
        return
      }
      return (
        <Group clipOverflow={false} size={[1, 1]}>
          <Polyline {...attr} {...style} {...other} animation={animation} />
          {this._renderAxisLabel(attr, i)}
          {this._renderAxisScale(attr, i)}
        </Group>
      )
    })
  }

  _renderAxisLabel(attrs, i) {
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
      font: '12px 宋体'
    }
    const animation = this.isUpdate ? {} : this._getScaleAnimation(1)
    const { style, ...other } = this._getStyle('label', attr, { text: attr.label, radian }, i)
    if (style === false) {
      return
    }
    return <Label {...attr} {...style} {...other} animation={animation} />
  }

  _renderAxisScale(attrs, index) {
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
      font: '12px "宋体"',
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
      const { style, ...other } = this._getStyle('scale', attr, { text, index }, i)
      if (style === false) {
        return
      }
      if (attr.display !== 'none') {
        const elIndex = index * attrs.splitNumber + i
        const preEl = this.scaleEl[elIndex]
        let animation = this.isUpdate
          ? {}
          : {
              from: { pos: [0, 0] },
              to: { pos: point }
            }
        if (preEl) {
          const { text: preText } = preEl.attr()
          const numText = Number(preText)
          if (numText !== text) {
            animation = {
              from: { text: numText },
              to: { text },
              attrFormatter: attr => {
                attr.text = attr.text.toFixed(0)
                return attr
              },
              useTween: true
            }
          }
        }
        labels.push(<Label {...attr} {...style} {...other} animation={animation} />)
      }
    }
    return labels
  }

  renderSection(sectionAttrs) {
    return sectionAttrs.map((attr, i) => {
      if (attr.disabled) {
        this.areaEl[i] = null
        return
      }
      const { animation } = this._getPolylineAnimation(attr, i)
      const { style, hoverState, ...other } = this._getStyle('section', attr, { ...attr.dataOrigin }, i)
      if (style === false) {
        return
      }
      let hoverStyle = hoverState
      if (!hoverState) {
        hoverStyle = {}
        const { lineWidth = 1 } = attr
        hoverStyle.lineWidth = lineWidth + 1
      }
      return <Polyline zIndex={9 + i} animation={animation} {...attr} {...style} hoverState={hoverStyle} {...other} />
    })
  }

  renderPoints(sectionAttrs) {
    const allPoints = sectionAttrs.map((attrs, index) => {
      if (attrs.disabled) {
        return
      }
      const { points, dataOrigin, strokeColor } = attrs
      let prePoints
      if (this.areaEl[index]) {
        prePoints = this.areaEl[index].attr().points
      }
      return points.map((point, i) => {
        let attr = {
          pos: point,
          fillColor: strokeColor,
          strokeColor,
          innerRadius: 0,
          outerRadius: 2,
          dataOrigin: dataOrigin[i],
          anchor: [0.5, 0.5]
        }
        let animation = {
          from: { pos: [0, 0] },
          to: { pos: point }
        }
        if (prePoints && prePoints[i]) {
          if (!this._isSamePoints(prePoints[i], point)) {
            animation.from.pos = prePoints[i]
            animation.useTween = true
          } else {
            animation = {}
            attr.pos = point
          }
        }
        const style = this.style('point')(attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }
        return (
          <Ring
            {...attr}
            {...style}
            animation={animation}
            onMouseenter={(_, el) => {
              el.attr('state', 'hover')
            }}
            onMouseleave={(evt, el) => {
              el.attr('state', 'normal')
            }}
          />
        )
      })
    })

    return allPoints.reduce((pre, cur) => pre.concat(cur), [])
  }

  render({ sectionAttrs, axisAttrs, gridAttrs }) {
    const center = this.center
    const padding = this.padding
    const { size } = this.attr()
    return (
      <Group size={size} padding={padding}>
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
