import { Group, Arc } from 'spritejs'
import { deepObjectMerge } from '@qcharts/utils'
import BaseVisual from '../../base/BaseVisual'

// 数据拷贝
const flattern = (arr) => [].concat.apply([], arr)

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
    const { startAngle, endAngle, radius, size } = this.renderAttrs
    const angle = (endAngle + startAngle) / 2
    const [width, height] = size
    const maxRadius = this.maxOuterRadius
    let [x, y] = [width / 2 - maxRadius, height / 2 - maxRadius]

    if (endAngle - startAngle === 90) {
      // 区分象限
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const maxWidth = radius * width
      const maxHeight = radius * height
      x += cos < 0 ? maxWidth / 2 : -(maxWidth / 2)
      y += sin < 0 ? maxHeight / 2 : -(maxHeight / 2)
    }

    return [x, y]
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
    const perRadius =
      ((outerRadius - innerRadius) * 2 - lineWidth * (lineWidth >= 5 ? 1 : len - 1)) / ((len * 2 - 1) * (1 + arcOffset))
    let value = null

    data.forEach((d, i) => {
      value = +d.value

      d.pos = [outerRadius, outerRadius]
      d.anchor = [0.5, 0.5]
      d.lineWidth = lineWidth
      d.startAngle = startAngle
      d.endAngle = d.state === 'disabled' ? startAngle : startAngle + (angle * value) / total
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
    this.animators = data.map((d) => ({
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
    this.dataset.forEach((item) => {
      item.state = item.col === col && item.row === row ? 'hover' : 'default'
    })
  }

  onMouseleave() {
    this.dataset.resetState()
  }

  render(data = []) {
    const { strokeBgcolor } = this.renderAttrs
    const gAnimation = {
      from: { pos: this.oldPos ? this.oldPos : this.center },
      to: { pos: this.center }
    }
    this.oldPos = this.center
    return (
      <Group>
        {data
          .map((d, i) => {
            const { col, row, data } = d
            return (
              <Group
                pos={this.center}
                animation={gAnimation}
                onMouseenter={this.onMouseenter}
                onMousemove={this.onMouseenter}
                onMouseleave={this.onMouseleave}
              >
                <Arc {...d} startAngle={0} endAngle={360} strokeColor={strokeBgcolor} />
                <Arc
                  pos={this.center}
                  {...{ ...d, col, row }}
                  animation={this.animators[i]}
                  {...this.style('arc:hover')(d, data, i)}
                />
              </Group>
            )
          })}
      </Group>
    )
  }

  rendered() {}
}

export default RadialBar
