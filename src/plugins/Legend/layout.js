export default function layout(arr, attrs) {
  const {
    width,
    height,
    orient,
    align,
    formatter,
    iconSize,
    textSize,
    gap,
  } = attrs;
  const isVertical = orient === "vertical";
  let length = arr.length;

  let legendSize = [
    iconSize[0] + textSize[0],
    Math.max(iconSize[1], textSize[1]),
  ];
  let arrLayout = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let iconAttrs = {
      pos: isVertical
        ? [0, i * (gap + legendSize[1])]
        : [i * (gap + legendSize[0]), 0],
      size: iconSize,
    };
    if (arr[i].state === "disabled") {
      iconAttrs.bgcolor = "#ccc";
    }
    let textAttrs = {
      pos: isVertical
        ? [iconSize[0], i * (gap + legendSize[1])]
        : [iconSize[0] + i * (gap + legendSize[0]), 0],
      width: textSize[0],
      height: textSize[1],
      font: '10px "宋体"',
      text: arr[i].name,
      lineHeight: textSize[1],
    };
    arrLayout.push({ iconAttrs, textAttrs });
  }
  return arrLayout;
}
