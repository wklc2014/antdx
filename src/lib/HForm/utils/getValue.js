import is from 'is_js';
import lodash from 'lodash';

/**
 * 表单元素值相关操作
 * @param  {any} options.value    [表单的原始值]
 * @param  {Object} options.ext   [表单元素扩展配置]
 * @return {any}                  [处理后的表单值]
 */
export default function getValue ({ value, ext = {}, composition }) {

  let newValue = value;

  const { toUpperCase, toLowerCase } = ext;

  if (composition) {
    return newValue;
  }

  // 大小写转换
  if (toUpperCase && is.string(value)) {
    newValue = value.toUpperCase();
  } else if (toLowerCase && is.string(value)) {
    newValue = value.toLowerCase();
  }

  return newValue;
}

/**
 * 表单元素值 Blur 操作
 * @param  {any} options.value    [表单的原始值]
 * @param  {Object} options.ext   [表单元素扩展配置]
 * @return {any}                  [处理后的表单值]
 */
export function getBlurValue ({ value, ext = {} }) {

  let newValue = value;

  const { trim } = ext;

  // 删空格
  if (trim) {
    newValue = lodash.trim(newValue);
  }

  return newValue;
}