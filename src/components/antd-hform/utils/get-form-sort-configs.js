/**
 * 对表单元素排序
 */
import is from 'is_js';
import sortBy from 'lodash/sortBy';
import get from 'lodash/get';

export default function getFormSortConfigs(configs = []) {
  if (is.not.array(configs)) return [];

  return sortBy(configs, function(val) {
    const order = get(val, 'item.ext.order', 1);
    return order;
  });
}
