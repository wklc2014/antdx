import is from 'is_js';
import getValidateByRules from './getValidateByRules.js';

/**
 * 自定义表单验证
 * @param  {Array}   options.configs   [表单配置]
 * @param  {Object} options.validates  [表单元素是否首次验证]
 * @param  {Object} options.values     [表单元素值]
 * @return {Object}                    [当前表单元素验证结果]
 */
export default function getFormValidate({
  configs = [],
  values = {},
}) {

  const formValidates = {};

  configs.forEach((val) => {
    const { config } = val;
    const newConfig = is.array(config) ? config : [config];

    newConfig.forEach((c) => {
      const { id, ext = {} } = c;
      const { rules } = ext;

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

      const validate = getValidateByRules({ value, rules });

      formValidates[id] = validate;
    })
  })

  return formValidates;
}
