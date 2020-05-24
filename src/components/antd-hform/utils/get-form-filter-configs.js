/**
 * 过滤表单元素
 */
import is from 'is_js';
import get from 'lodash/get';

export default function getFormFilterConfigs(configs) {
  if (is.not.array(configs)) return [];

  return configs.filter(val => {
    const hide = get(val, 'item.ext.hide', false);
    return !hide;
  });
}
