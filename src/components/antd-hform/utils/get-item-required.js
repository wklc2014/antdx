/**
 * 检查表单元素是否必填
 */
import is from 'is_js';
import get from 'lodash/get';
import getItemFilterConfig from './get-item-filter-config.js';

export default function getItemRequired({ config }) {
  const filterConfig = getItemFilterConfig(config);

  let required = false;

  filterConfig.some(val => {
    const rules = get(val, 'itemApi.rules', []);
    if (!rules || is.not.array(rules)) return false;
    required = rules.some(rule => rule.required);
    return required;
  });

  return required;
}
