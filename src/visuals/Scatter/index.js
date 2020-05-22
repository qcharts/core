import { Group, Polyline, Arc, Label } from 'spritejs'
import BaseVisual from '../../base/BaseVisual'
import { scaleLinear } from '../../utils/scaleLinear'
import { hexToRgba } from '../../utils/color'
import { deepObjectMerge, throttle } from '@qcharts/utils'
import layout from './layout'

class Scatter extends BaseVisual {
  constructor(attrs = {}) {
    super(attrs)
    this.type = 'radar'
    this.scatterData = []
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
    const updateData = this._processData()
    const temp = updateData.map((row) => deepObjectMerge({}, row))
    updateData.forEach((row, ind) => {
      const oldRow = this.scatterData[ind]
      row.attrs.forEach((cell, cInd) => {
        if (oldRow && oldRow.attrs[cInd]) {
          const curCell = oldRow.attrs[cInd]
          const toPos = [...cell.pos]
          const fromPos =
            curCell.animation.to && curCell.animation.to.pos ? [...curCell.animation.to.pos] : [...curCell.pos]
          cell.scale = 1
          if (toPos.toString() === fromPos.toString()) {
            cell.animation = {}
          } else {
            cell.pos = [...fromPos]
            cell.animation = {
              from: { pos: fromPos },
              to: { pos: toPos },
            }
          }
        } else {
          cell.scale = 0
          cell.animation = {
            from: { scale: 0 },
            to: { scale: 1 },
          }
        }
      })
    })
    this.scatterData = temp.map((row) => deepObjectMerge({}, row))
    return updateData
  }

  beforeRender() {
    super.beforeRender()
    const renderData = this._processData()
    this.scatterData = renderData.map((row) => deepObjectMerge({}, row))
    renderData.forEach((row) => {
      row.attrs.forEach((cell) => {
        cell.scale = 0
        cell.animation = {
          from: { scale: 0 },
          to: { scale: 1 },
        }
      })
    })
    return renderData
  }

  rendered() {}

  getRealRadius(attr) {
    const { areaRange, areaField } = this.renderAttrs
    const { radius, dataOrigin } = attr
    // 面积字段未定义，直接返回半径
    if (!areaField || !dataOrigin.hasOwnProperty(areaField)) {
      return radius
    }
    // 面积范围未定义，直接返回数据中的面积
    if (!areaRange) {
      return dataOrigin[areaField]
    }
    const allData = [...this.dataset].filter((cell) => cell.state !== 'disabled').sort((a, b) => a - b)
    const linear = scaleLinear()
      .domain([allData[0], allData[allData.length - 1]])
      .range(areaRange)
    const realArea = linear(dataOrigin[areaField])
    return realArea
  }

  onMouseenter = throttle(
    (event, el) => {
      const { row, col } = el.attributes
      this.dataset.resetState()
      this.dataset.rows[row][col].state = 'hover'
      const { showGuideLine } = this.renderAttrs
      if (showGuideLine) {
        const pos = el.attr('pos')
        const { height, width } = this.renderAttrs.clientRect
        this.guideLineData = [
          [
            [0, pos[1]],
            [width, pos[1]],
          ],
          [
            [pos[0], 0],
            [pos[0], height],
          ],
        ]
      }
    },
    16,
    true
  )
  onMouseleave() {
    this.dataset.resetState()
    this.guideLineData = []
  }

  renderGuideLine() {
    if (this.guideLineData.length > 0) {
      return this.guideLineData.map((points) => {
        return <Polyline points={points} strokeColor={'#ddd'} lineWidth={1} translate={[0.5, 0.5]} />
      })
    }
    return
  }

  renderLabel(attr, i) {
    const { labelField } = this.renderAttrs
    const dataOrigin = attr.dataOrigin
    const style = this.style('label')(attr, { ...attr.dataOrigin }, i)
    if (style === false) {
      return
    }
    if ((labelField && dataOrigin.hasOwnProperty(labelField)) || style) {
      const { strokeColor, ...other } = attr
      const text = dataOrigin[labelField]
      const labelAttr = deepObjectMerge(
        other,
        {
          fillColor: strokeColor,
          text,
          anchor: [0.5, 0.5],
          fontSize: '12px',
        },
        style
      )
      return <Label {...labelAttr} />
    }
  }

  renderScatter(data) {
    const scatters = data.map((item) => {
      return item.attrs.map((attr, i) => {
        const radius = this.getRealRadius({ ...attr })

        let style = this.style('point')(attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }

        const hStyle = this.style('point:hover')(attr, attr.dataOrigin, i) || { radius: radius + 1 }
        if (attr.state === 'hover') {
          style = deepObjectMerge(style || {}, hStyle)
        } else {
          style = deepObjectMerge(style || {}, { radius })
        }

        const arcAttrs = deepObjectMerge({}, attr, style)

        const { dataOrigin, text, pos, ...other } = arcAttrs
        return (
          <Group clipOverflow={false}>
            <Arc {...arcAttrs} onMouseenter={this.onMouseenter} onMouseleave={this.onMouseleave} />
            {this.renderLabel({ dataOrigin, text, pos }, i)}
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
        {this.renderGuideLine()}
      </Group>
    )
  }
}

export default Scatter
