/**
 * 获取表单元素布局属性
 * @return {Object} 表单元素布局属性
 */
import is from 'is_js';

export default function getFormItemLayoutProps(props) {
  const { extMap } = props;
  const { layout = '80px', pLayout = 'horizontal' } = extMap;

  // 只有 horizontal Form 布局, 才需要设置布局属性
  if (pLayout !== 'horizontal') return null;

  // 如果表单元素布局为栅格布局(对象)，则直接作为布局属性
  if (is.object(layout)) return layout;

  let newLayout = layout;
  // 如果布局属性为数字
  if (is.number(layout)) {
    newLayout = `${layout}px`;
  }

  return {
    labelCol: {
      style: { flex: `0 0 ${newLayout}` },
    },
    wrapperCol: {
      style: { flex: '1 1 100%' },
    }
  };
}