import { Group, Polyline, Arc, Label } from 'spritejs'
import BaseVisual from '../../base/BaseVisual'
import { scaleLinear } from '../../utils/scaleLinear'
import { hexToRgba } from '../../utils/color'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'

class Scatter extends BaseVisual {
  constructor(attrs = {}) {
    super(attrs)
    this.type = 'radar'
    this.scatterData = {}
    this.guideLineData = []
  }

  defaultAttrs() {
    return {
      labelField: null,
      areaField: null,
      areaRange: null,
      showGuideLine: false,
      layoutWay: null,
    }
  }

  get renderAttrs() {
    const attrs = super.renderAttrs
    return { ...attrs }
  }

  _processData() {
    const dataSet = this.dataset
    const { layoutWay, clientRect } = this.renderAttrs
    const { data, layoutWay: newLayoutWay } = layout(dataSet, [clientRect.width, clientRect.height], layoutWay)

    deepObjectMerge(this.renderAttrs.layoutWay || {}, newLayoutWay)

    console.log(data)

    data.forEach((item, i) => {
      const color = this.theme.colors[i]
      const fillColor = hexToRgba(color, 0.3)
      item.attrs.forEach((di) => {
        di.strokeColor = color
        di.fillColor = fillColor
      })
    })
    return data
  }

  beforeUpdate() {
    super.beforeUpdate()
    return this._processData()
  }

  beforeRender() {
    super.beforeRender()
    return this._processData()
  }

  rendered() {}

  getRealRadius(attr) {
    const { areaRange, areaField } = this.attr()
    const { radius, dataOrigin } = attr
    if (!areaField || !dataOrigin.hasOwnProperty(areaField)) {
      return radius
    }
    if (!areaRange) {
      return dataOrigin[areaField]
    }
    const allData = this.dataset.dataOrigin.map((d) => d[areaField]).sort((a, b) => a - b)
    const linear = scaleLinear()
      .domain([allData[0], allData[allData.length - 1]])
      .range(areaRange)
    const realArea = linear(dataOrigin[areaField])
    return realArea
  }

  renderLabel(attr, normalStyle, animation, i) {
    const { labelField } = this.attr()
    const dataOrigin = attr.dataOrigin
    const style = this.style('label')(attr, { ...attr.dataOrigin }, i)
    if (style === false) {
      return
    }
    if ((labelField && dataOrigin.hasOwnProperty(labelField)) || style) {
      const { strokeColor, ...other } = attr
      const { size, lineWidth = 0 } = normalStyle
      const text = dataOrigin[labelField]
      const renderText = (style && style.text) || text
      const ctx = this.chart.layer.context
      const textWidth = ctx.measureText(renderText).width
      let translate = [0, 0]
      if (size * 2 - lineWidth < textWidth * 1.3) {
        translate[1] = size + lineWidth + 10
      }
      return (
        <Label
          {...{
            ...other,
            fillColor: strokeColor,
            text,
            translate,
            anchor: [0.5, 0.5],
            fontSize: '12px',
          }}
          animation={animation}
          {...style}
          hoverState={this.style('label:hover')(attr, attr.dataOrigin, i)}
        />
      )
    }
  }

  renderGuideLine() {
    const guildLine = []
    const attr = {
      points: [
        [0, 0],
        [0, 0],
      ],
      strokeColor: '#ddd',
      lineWidth: 1,
    }
    for (let i = 0; i < 2; i++) {
      const guideLineType = i === 0 ? 'horizontal' : 'vertical '
      guildLine.push(<Polyline {...attr} guideLineType={guideLineType} translate={[0.5, 0.5]} />)
    }
    return guildLine
  }

  onMouseenter() {}
  onMouseleave() {}

  renderScatter(data) {
    const scatters = data.map((item, index) => {
      return item.attrs.map((attr, i) => {
        // 根据用户设置的面积字段获得半径
        let radius = this.getRealRadius(attr)
        let style = this.style('point')(attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }
        style = { size: radius, ...style }
        // let hStyle = this.style('point:hover')(attr, attr.dataOrigin, i)
        // if (!hStyle) {
        //   hStyle = { size: attr.radius + 1 }
        //   if (style) {
        //     if (isNumber(style.scale)) {
        //       hStyle.scale = style.scale * 1.2
        //     } else if (isNumber(style.size)) {
        //       hStyle.size = style.size * 1.2
        //     } else if (isArray(style.size)) {
        //       hStyle.size = style.size.map((s) => s * 1.2)
        //     }
        //   }
        // }

        const preEl = this.scatterData[i]
        let animation = {
          from: { scale: 0 },
          to: { scale: 1 },
          duration: 5000,
        }
        if (preEl) {
          const pos = preEl.attr('pos')
          if (pos.toString() !== attr.pos.toString()) {
            animation = {
              from: { pos },
              to: { pos: attr.pos },
            }
          } else {
            animation = {}
          }
        }
        return (
          <Group clipOverflow={false}>
            <Arc
              animation={animation}
              {...{ ...attr, ...animation.from }}
              onMouseenter={this.onMouseenter}
              onMouseleave={this.onMouseleave}
            />
            {this.renderLabel(attr, {}, animation, index)}
          </Group>
        )
      })
    })
    return scatters.reduce((pre, cur) => {
      return pre.concat(cur)
    }, [])
  }

  render(data) {
    const { height, width, left, top } = this.renderAttrs.clientRect
    return (
      <Group size={[width, height]} pos={[left, top]} zIndex={100} clipOverflow={false}>
        {this.renderScatter(data)}
        {/* {this.renderGuideLine()} */}
      </Group>
    )
  }
}

export default Scatter
