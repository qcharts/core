import { scaleLinear } from '../../utils/scaleLinear'
import { axis } from '../../utils/axis'
export default function layout(arr, attrs) {
  let lines = []
  const { stack, splitNumber } = attrs
  console.log(arr, attrs)
  let scales = axis({ dataSet: arr, stack, splitNumber })
  console.log(scales)
  return lines
}
