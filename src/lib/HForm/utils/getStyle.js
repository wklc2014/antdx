import is from 'is_js';

/**
 * 获取表单元素的 style 属性
 * @param  {string} options.type [表单元素输入类型]
 * @param  {Object} options.ext  [表单元素扩展配置]
 * @param  {Object} style        [表单元素配置 style 属性]
 * @return {object}              [新的表单元素的 style 属性]
 */
export default function getStyle({ type, ext = {}, style = {} }) {

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
    case 'range':
    case 'month':
    case 'time':
    case 'number':
    case 'select':
    case 'editor':
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
