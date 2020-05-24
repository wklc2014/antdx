/**
 * 设置 placeholder 属性
 */
import is from 'is_js';

export default function getContentPlaceholder(params = {}) {
  const { id, type, ext = {}, label } = params;

  let placeholder = '';

  // 输入类型
  const inputTypes = ['input', 'service', 'number'];

  // 选择类型
  const selectTypes = ['select', 'treeselect', 'cascader', 'date'];

  if (is.inArray(type, inputTypes)) {
    placeholder = `请输入${label || id}`;
  } else if (is.inArray(type, selectTypes)) {
    placeholder = `请选择${label || id}`;
  }

  if (type === 'date' && ext.subType === 'range') {
    /**
     * 区间时间的 placeholder 属性是个数组
     */
    placeholder = [`开始${label || id}`, `开始${label || id}`];
  }

  return placeholder;
}
