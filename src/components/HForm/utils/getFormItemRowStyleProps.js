
/**
 * 获取 Row 组件 style 属性
 * @return {Object} Row 组件 style 属性
 */
export default function getFormItemRowStyleProps(props) {
  const { extMap = {} } = props;
  const { pLayout = 'horizontal', space = 0, minWidth = 160, maxWidth } = extMap;
  const RowStyle = {};

  if (space) {
    RowStyle.paddingRight = space;
  }

  // 内联布局需要设置表单元素最小宽度和最大宽度
  if (pLayout === 'inline') {
    RowStyle.minWidth = minWidth;
    if (maxWidth) {
      RowStyle.maxWidth = maxWidth;
    }
  }

  return RowStyle;
}