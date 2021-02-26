import { Group, Polyline, Arc, Label } from 'spritejs'
import BaseVisual from '../../base/BaseVisual'
import { scaleLinear } from '../../utils/scaleLinear'
import { hexToRgba } from '../../utils/color'
import { deepObjectMerge } from '@qcharts/utils'
import { getStyle } from '../../utils/getStyle'
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
      areaField: null, //气泡大小字段值，不设置此值则为散点图
      areaRange: null, // 面积映射
      showGuideLine: false,
      layoutWay: null
    }
  }

  get renderAttrs() {
    return { ...super.renderAttrs }
  }

  processData() {
    const dataSet = this.dataset
    const { layoutWay, clientRect, axisGap } = this.renderAttrs
    const { data, layoutWay: newLayoutWay } = layout.call(this, dataSet, { size: [clientRect.width, clientRect.height], layoutWay, axisGap })
    deepObjectMerge(this.renderAttrs.layoutWay || {}, newLayoutWay)
    data.forEach((item, i) => {
      const color = this.theme.colors[i]
      const fillColor = hexToRgba(color, 0.3)
      item.attrs.forEach(di => {
        di.strokeColor = color
        di.fillColor = fillColor
      })
    })
    return data
  }

  beforeUpdate() {
    super.beforeUpdate()
    const updateData = this.processData()
    const temp = updateData.map(row => deepObjectMerge({}, row))
    updateData.forEach((row, ind) => {
      const oldRow = this.scatterData[ind]
      row.attrs.forEach((cell, cInd) => {
        const radius = this.getRealRadius({ ...cell })
        cell.radius = radius
        if (oldRow && oldRow.attrs[cInd]) {
          const oldCell = oldRow.attrs[cInd]
          const toPos = [...cell.pos]
          const fromPos = oldCell.animation.to && oldCell.animation.to.pos ? [...oldCell.animation.to.pos] : [...oldCell.pos]
          // 位置相同
          if (toPos.toString() === fromPos.toString()) {
            let fromRadius = radius
            let toRadius = radius
            //default-> disabled
            if (cell.state === 'disabled') {
              toRadius = 0
            }
            // old is disabled
            if (oldCell.animation.to.radius == 0) {
              fromRadius = 0
            }
            cell.animation = {
              from: { radius: fromRadius },
              to: { radius: toRadius }
            }
          } else {
            cell.animation = {
              from: { pos: fromPos },
              to: { pos: toPos }
            }
          }
        } else {
          cell.animation = {
            from: { radius: 0 },
            to: { radius: radius }
          }
        }
      })
    })
    this.scatterData = temp
    return updateData
  }

  beforeRender() {
    super.beforeRender()
    const renderData = this.processData()
    this.scatterData = renderData.map(row => deepObjectMerge({}, row))
    renderData.forEach(row => {
      row.attrs.forEach(cell => {
        const radius = this.getRealRadius({ ...cell })
        cell.animation = {
          from: { radius: 0 },
          to: { radius }
        }
      })
    })
    return renderData
  }

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

    const allData = [...this.dataset].map(d => d.data[areaField]).sort((a, b) => a - b)
    const linear = scaleLinear()
      .domain([allData[0], allData[allData.length - 1]])
      .range(areaRange)
    const realArea = linear(dataOrigin[areaField])
    return realArea
  }

  onMouseenter(event, el) {
    const arc = el.children[0]
    const { row: rowInd, col: colInd, pos } = arc.attributes
    this.dataset.forEach(cell => {
      if (cell.row === rowInd && cell.col === colInd) {
        cell.state = 'hover'
      }
    })
    const { showGuideLine } = this.renderAttrs
    if (showGuideLine) {
      const { height, width } = this.renderAttrs.clientRect
      this.guideLineData = [
        [
          [0, pos[1]],
          [width, pos[1]]
        ],
        [
          [pos[0], 0],
          [pos[0], height]
        ]
      ]
    }
  }
  onMouseleave(event, el) {
    const arc = el.children[0]
    this.dataset.resetState()
    this.guideLineData = []
  }

  renderGuideLine() {
    if (this.guideLineData.length > 0) {
      return this.guideLineData.map(points => {
        return <Polyline points={points} strokeColor={'#ddd'} lineWidth={1} translate={[0.5, 0.5]} />
      })
    }
    return
  }

  renderScatter(data) {
    const { labelField, layoutBy } = this.renderAttrs
    console.log(this.renderAttrs)
    let styles = this.renderStyles
    let renderData = this.dataset[layoutBy]
    const scatters = data.map((item, di) => {
      return item.attrs.map((attr, ci) => {
        let style = getStyle(this, 'point', [attr, styles.point], [{ ...attr.dataOrigin }, ci])
        if (style === false) {
          return
        }
        let labelAttr = null
        let text = ''
        if (labelField) {
          labelAttr = getStyle(this, 'label', [{ pos: attr.pos, fillColor: attr.strokeColor }, styles.label], [{ ...attr.dataOrigin }, ci])
          text = attr.dataOrigin[labelField]
          labelAttr.zIndex = 10 + di + ci
        }
        const hStyle = getStyle(this, 'point:hover', [style, styles['point:hover']], [attr.dataOrigin, ci])
        const stateStyle = attr.state === 'hover' ? hStyle : {}

        return (
          <Group onMousemove={this.onMouseenter} onMouseleave={this.onMouseleave} onMouseEvent={['click', renderData[di][ci], ci]}>
            <Arc {...attr} {...style} {...stateStyle} zIndex={9 + di + ci} />
            {labelAttr ? <Label text={text} {...labelAttr} /> : null}
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
        {this.renderGuideLine()}
      </Group>
    )
  }

  rendered() {}
}

export default Scatter
