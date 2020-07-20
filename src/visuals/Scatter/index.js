import { Group, Polyline, Arc, Label } from 'spritejs'
import BaseVisual from '../../base/BaseVisual'
import { scaleLinear } from '../../utils/scaleLinear'
import { hexToRgba } from '../../utils/color'
import { deepObjectMerge } from '@qcharts/utils'
import layout from './layout'

class Scatter extends BaseVisual {
  constructor(attrs = {}) {
    super(attrs)
    this.type = 'scatter'
    this.scatterData = []
    this.guideLineData = []
  }

  defaultAttrs() {
    return {
      layer: 'scatter',
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

  processData() {
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
    const updateData = this.processData()
    const temp = updateData.map((row) => deepObjectMerge({}, row))
    updateData.forEach((row, ind) => {
      const oldRow = this.scatterData[ind]
      row.attrs.forEach((cell, cInd) => {
        const radius = this.getRealRadius({ ...cell })
        cell.radius = cell.state === 'disabled' ? 0 : radius
        if (oldRow && oldRow.attrs[cInd]) {
          const oldCell = oldRow.attrs[cInd]
          const toPos = [...cell.pos]
          const fromPos =
            oldCell.animation.to && oldCell.animation.to.pos ? [...oldCell.animation.to.pos] : [...oldCell.pos]
          // 位置相同
          if (toPos.toString() === fromPos.toString()) {
            let fromRadius = cell.radius
            let toRadius = cell.radius
            // disabled -> default
            if (cell.state === 'disabled') {
              fromRadius = radius
              // default -> disabled
            } else if (oldCell.animation.to.radius == 0) {
              fromRadius = 0
            }
            cell.animation = {
              from: { radius: fromRadius },
              to: { radius: toRadius },
            }
          } else {
            cell.animation = {
              from: { pos: fromPos },
              to: { pos: toPos },
            }
          }
        } else {
          cell.animation = {
            from: { radius: 0 },
            to: { radius: cell.radius },
          }
        }
      })
    })
    this.scatterData = temp.map((row) => deepObjectMerge({}, row))
    return updateData
  }

  beforeRender() {
    super.beforeRender()
    const renderData = this.processData()
    this.scatterData = renderData.map((row) => deepObjectMerge({}, row))
    renderData.forEach((row) => {
      row.attrs.forEach((cell) => {
        const radius = this.getRealRadius({ ...cell })
        cell.animation = {
          from: { radius: 0 },
          to: { radius },
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

  onMouseenter(event, el) {
    this.dataset.resetState()
    const { row, col } = el.attributes
    this.dataset.forEach((cell) => {
      cell.state = cell.row === row && cell.col === col ? 'hover' : 'default'
    })
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
  }
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

  renderLabel(data) {
    const { labelField } = this.renderAttrs
    if (labelField) {
      const labels = data.map((item) => {
        return item.attrs.map((attr, i) => {
          const style = this.style('label')(attr, { ...attr.dataOrigin }, i)
          if (style === false) {
            return
          }
          const dataOrigin = attr.dataOrigin
          if (dataOrigin.hasOwnProperty(labelField)) {
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
        })
      })
      return labels.reduce((pre, cur) => {
        return pre.concat(cur)
      }, [])
    }
  }

  renderScatter(data) {
    const scatters = data.map((item) => {
      return item.attrs.map((attr, i) => {
        let style = this.style('point')(attr, { ...attr.dataOrigin }, i)
        if (style === false) {
          return
        }

        const { radius } = attr

        const hStyle = this.style('point:hover')(attr, attr.dataOrigin, i) || { radius: radius + 1 }
        if (attr.state === 'hover') {
          style = deepObjectMerge(style || {}, hStyle)
        } else {
          style = deepObjectMerge(style || {}, { radius })
        }
        return (
          <Group>
            <Arc {...attr} {...style} onMouseenter={this.onMouseenter} onMouseleave={this.onMouseleave} />
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
      <Group size={[width, height]} pos={[left, top]} zIndex={10}>
        {this.renderScatter(data)}
        {this.renderLabel(data)}
        {this.renderGuideLine()}
      </Group>
    )
  }
}

export default Scatter
