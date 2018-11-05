import is from 'is_js';

/**
 * 获取表单元素的 placeholder 属性
 * @param  {string} options.type        [表单元素输入类型]
 * @param  {string} options.placeholder [表单元素配置的 placeholder 属性]
 * @param  {string} options.label       [表单元素配置 label 属性]
 * @param  {string} options.id          [表单元素配置 id 属性]
 * @return {string or array}            [新的表单元素的 placeholder 属性]
 */
export default function getContentPlaceholder({ type, api = {}, ext = {}, label, id }) {

  const { placeholder } = api;

  if (placeholder === 'NULL') {
    // 手动设置 placeholder 为 NULL 字符串
    // 则不显示 placeholder
    return '';
  }

  if (!placeholder && !label && !id) {
    // 如果 placeholder、label、id 都没有设置
    // 也不显示 placeholder
    return '';
  }

  let newPlaceholder = '';

  // 表单元素类型 - 输入
  const inputType = [
    'input',
    'textarea',
    'search',
    'service',
    'number',
    'fetchInput',
  ];

  // 表单元素类型 - 选择
  const selectType = [
    'select',
    'treeSelect',
    'cascader',
    'datePicker',
    'monthPicker',
    'timePicker',
  ];

  // 预定义 placeholder 属性
  let prePlaceholder = '';
  if (is.inArray(type, inputType)) {
    prePlaceholder = placeholder || `请输入${label || id}`;
  } else if (is.inArray(type, selectType)) {
    prePlaceholder = placeholder || `请选择${label || id}`;
  }

  if (type === 'rangePicker') {
    /**
     * 区间时间的 placeholder 属性是个数组
     * 单独处理 range 类型
     */
    newPlaceholder = placeholder || [`开始${label || id}`, `开始${label || id}`];
  } else {
    // 否则不处理
    // 直接采用预定义 placeholder
    newPlaceholder = prePlaceholder;
  }

  return newPlaceholder;
}