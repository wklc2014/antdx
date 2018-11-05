import is from 'is_js';

/**
 * 获取 FormItem 表单元素的删格布局
 */
export default function getFormItemLayout(params = {}) {
  const {
    layout = '120px',
    pLayout = '',
  } = params;

  // 如果表单不是 horizontal 布局, 不需要布局属性
  if (pLayout !== 'horizontal') {
    return null;
  }

  // 如果表单元素布局为栅格布局，则直接返回
  if (is.object(layout)) {
    return layout;
  }

  let newLayout = layout;

  // 如果布局属性为数字
  if (is.number(layout)) {
    newLayout = `${layout}px`;
  }

  return {
    labelCol: {
      style: {
        flex: `0 0 ${newLayout}`,
      }
    },
    wrapperCol: {
      style: {
        flex: '1 1 100%',
      }
    }
  };
}
