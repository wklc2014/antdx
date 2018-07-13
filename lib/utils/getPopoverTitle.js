/**
 * 获取 Popover 组建 title 内容
 * type 按钮类型 rotate, zoom
 */

export default function getPopoverTitle(type) {
  if (type === 'rotate') {
    return '旋转角度(deg)';
  } else if (type === 'zoom') {
    return '缩放比例(%)';
  }
  return '标题';
}
