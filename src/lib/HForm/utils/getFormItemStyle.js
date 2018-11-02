import is from 'is_js';

/**
 * 获取 FormItem 表单元素的删格布局
 */
export default function getFormItemStyle(params = {}) {
  const {
    style = {},
    pLayout = '',
  } = params;

  // 如果表单不是 horizontal 布局
  if (pLayout !== 'horizontal') {
    return { style };
  }

  return {
    style: {
      ...style,
      display: 'flex'
    }
  }
}
