/**
 * 获取表单元素 style 属性
 * @return {Object} 表单元素 style 属性
 */
export default function getFormItemStyleProps(props) {
  const { extMap } = props;
  const { style = {}, pLayout = 'horizontal' } = extMap;

  // 如果表单不是 horizontal 布局, 返回原始 style 属性
  if (pLayout !== 'horizontal') {
    return style;
  }

  return { ...style, display: 'flex' };
}