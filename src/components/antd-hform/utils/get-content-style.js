import is from 'is_js';

export default function getControlStyle(params = {}) {
  const { type, contentApi = {}, ext = {} } = params;
  const { style = {} } = contentApi;
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
    case 'input':
    case 'cascader':
    case 'date':
    case 'number':
    case 'select':
    case 'treeselect':
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
