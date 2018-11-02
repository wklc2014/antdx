import is from 'is_js';
import getValidateByRules from './getValidateByRules.js';

/**
 * 自定义表单验证
 * @param  {Array}  options.configs   [表单元素配置]
 * @param  {Object} options.touches   [表单元素是否首次验证]
 * @param  {Object} options.values    [表单元素值]
 * @return {Object}                   [当前表单元素验证结果]
 */
export default function getFormItemValidate({
  configs = [],
  touches = {},
  values = {},
}) {

  const validates = {};

  configs.some((val) => {
    const { id, ext = {} } = val;
    const { rules } = ext;

    // 如果
    if (!rules) return {};

    // 错误标识
    let isError = false;

    // 待验证的值
    const value = values[id];

    // 验证是否必填
    validates.required = rules.some(rule => rule.required);

    if (touches[id]) {
      const validate = getValidateByRules({ rules, value });
      Object.assign(validates, validate);
      isError = is.not.empty(validate);
    }

    return isError;

  })

  return validates;
}
