/**
 * 获取表单元素 style 属性
 * @return {Object} 表单元素 style 属性
 */
import is from 'is_js';

export default function getContentStyleProps(props) {
  const { type, api = {}, ext = {} } = props;
  const { style = {} } = api;
  const { toUpperCase, toLowerCase } = ext;
  const newStyle = {};

  // css 大小写处理
  if (toUpperCase) {
    Object.assign(newStyle, { textTransform: 'uppercase' });
  } else if (toLowerCase) {
    Object.assign(newStyle, { textTransform: 'lowercase' });
  }

  // 部分表单元素类型默认设置 width: 100%
  switch (type) {
    case 'cascader':
    case 'date':
    case 'number':
    case 'select':
    case 'treeSelect':
      Object.assign(newStyle, { width: '100%' });
      break;
    default:
  }

  // 最后合并表单元素配置的属性
  Object.assign(newStyle, style);

  // 空样式不返回
  if (is.empty(newStyle)) {
    return null;
  }

  return newStyle;
}