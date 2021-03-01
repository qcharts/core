import { Group, Arc } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'

// 数据拷贝
const flattern = arr => [].concat.apply([], arr)

class RadialBar extends BaseVisual {
  constructor(attrs = {}) {
    super(attrs)
    this.type = 'RadialBar'
    this.animators = []
    this.oldPos = null
  }

  defaultAttrs() {
    return {
      layer: 'radialBar',
      radius: 0.8,
      innerRadius: 0,
      startAngle: -90,
      endAngle: 270,
      lineWidth: 5,
      strokeBgcolor: '#f5f5f5'
    }
  }

  get renderAttrs() {
    const attrs = super.renderAttrs
    const { clientRect } = attrs
    const size = [clientRect.width, clientRect.height]
    return {
      ...attrs,
      size
    }
  }

  get maxOuterRadius() {
    const { startAngle, endAngle, radius, size } = this.renderAttrs
    const [width, height] = size

    if (endAngle - startAngle === 90) {
      return Math.min(width, height) * radius
    } else {
      return (Math.min(width, height) / 2) * radius
    }
  }

  get center() {
    const { size } = this.renderAttrs
    const [width, height] = size
    const maxRadius = this.maxOuterRadius
    return [width / 2 - maxRadius, height / 2 - maxRadius]
  }

  get innerRadius() {
    let { radius, innerRadius } = this.renderAttrs
    return innerRadius <= 0 ? 0 : (this.maxOuterRadius / radius) * innerRadius
  }

  transform(data) {
    const { startAngle, endAngle, max, min, lineWidth, colors } = this.renderAttrs
    let total = 0
    if (!isNaN(max) && !isNaN(min)) {
      total = max - min
    } else {
      let cloneData = deepObjectMerge(data)
      cloneData.sort((a, b) => b.value - a.value)
      total = cloneData[0].value * 1.3
    }
    const angle = endAngle - startAngle
    const innerRadius = this.innerRadius
    const outerRadius = this.maxOuterRadius
    const arcOffset = 0.5
    const len = data.length
    const perRadius = ((outerRadius - innerRadius) * 2 - lineWidth * (lineWidth >= 5 ? 1 : len - 1)) / ((len * 2 - 1) * (1 + arcOffset))
    let value = null

    data.forEach((d, i) => {
      value = +d.value

      let endAngle = startAngle
      if (d.state !== 'disabled') {
        endAngle = startAngle + (angle * value) / total
      }
      // spriteJS bug, 起始角度差为360的时候位置会发生偏差
      if (endAngle - startAngle > 359.9) {
        endAngle = 359.9 + startAngle
      }

      d.pos = [outerRadius, outerRadius]
      d.anchor = [0.5, 0.5]
      d.lineWidth = lineWidth
      d.startAngle = startAngle
      d.endAngle = endAngle
      d.innerRadius = innerRadius + i * (1 + arcOffset) * perRadius
      d.radius = d.innerRadius + 1 * perRadius
      d.strokeColor = colors[i]

      const normalStyle = this.style('arc')(d, d.dataOrigin, d.index)

      Object.assign(d, normalStyle)
    })
    // 半径大的在底，小的在上，这样事件触发才正常
    return data.sort((a, b) => b.radius - a.radius)
  }

  beforeRender() {
    super.beforeRender()
    const { startAngle } = this.renderAttrs
    let data = flattern(this.dataset)
    data = this.transform(data)
    this.animators = data.map(d => ({
      from: {
        startAngle,
        endAngle: startAngle
      },
      to: {
        startAngle,
        endAngle: d.endAngle
      }
    }))
    return data
  }

  beforeUpdate() {
    super.beforeUpdate()
    const { startAngle } = this.renderAttrs
    let data = flattern(this.dataset)
    data = this.transform(data)
    this.animators = data.map((d, i) => {
      if (d.anticlockwise) {
        return d.disabled ? { from: { opacity: 1 }, to: { opacity: 0 } } : { from: { opacity: 1 }, to: { opacity: 1 } }
      } else {
        let prev = this.animators[i] ? this.animators[i].to : data[i - 1]

        if (!prev) {
          prev = {
            startAngle: startAngle,
            endAngle: startAngle
          }
        }

        return {
          from: {
            startAngle: prev.startAngle,
            endAngle: prev.endAngle
          },
          to: {
            startAngle: d.startAngle,
            endAngle: d.endAngle
          }
        }
      }
    })
    return data
  }

  onMouseenter(event, el) {
    const { col, row } = el.children[1].attributes
    this.dataset.forEach(item => {
      item.state = item.col === col && item.row === row ? 'hover' : 'default'
    })
  }

  onMouseleave() {
    this.dataset.resetState()
  }

  render(data = []) {
    const { strokeBgcolor, clientRect } = this.renderAttrs
    const gAnimation = {
      from: { pos: this.oldPos ? this.oldPos : this.center },
      to: { pos: this.center }
    }
    this.oldPos = this.center

    const gPos = [clientRect.left, clientRect.top]
    const gSize = [clientRect.width, clientRect.height]
    return (
      <Group pos={gPos} size={gSize}>
        {data.map((d, i) => {
          const { col, row, data } = d
          return (
            <Group animation={gAnimation} onMouseenter={this.onMouseenter} onMousemove={this.onMouseenter} onMouseleave={this.onMouseleave}>
              <Arc {...d} startAngle={0} endAngle={360} strokeColor={strokeBgcolor} />
              <Arc onMouseEvent={['click', d, i]} {...{ ...d, col, row }} animation={this.animators[i]} {...this.style('arc')(d, data, i)} />
            </Group>
          )
        })}
      </Group>
    )
  }

  rendered() {}
}

export default RadialBar
