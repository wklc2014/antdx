import is from 'is_js';
import getValidateByRules from './getValidateByRules.js';

/**
 * 自定义表单验证
 * @param  {Array}   options.configs   [表单配置]
 * @param  {Object} options.validates  [表单元素是否首次验证]
 * @param  {Object} options.values     [表单元素值]
 * @return {Object}                    [当前表单元素验证结果]
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

    // 错误标识
    let isError = false;

    // eslint-disable-next-line
    if (!rules) return ;

    /**
     * 如果验证规则不是数组，直接抛异常
     */
    if (is.not.array(rules)) {
      throw Error('表单元素验证规则必须是数组');
    }

    // 待验证的值
    const value = values[id];

    // 验证是否必填
    validates.required = rules.some(rule => rule.required);

    if (touches[id]) {
      const validate = getValidateByRules({ value, rules });
      Object.assign(validates, validate);
      isError = is.not.empty(validate);
    }

    return isError;

  })

  return validates;
}
