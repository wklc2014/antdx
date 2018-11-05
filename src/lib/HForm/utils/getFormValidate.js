import is from 'is_js';
import getValidateByRules from './getValidateByRules.js';

/**
 * 自定义表单验证
 * @param  {Array}  options.formConfigs    [表单配置]
 * @param  {Object} options.formValues     [表单元素值]
 * @return {Object}                        [当前表单元素验证结果]
 */
export default function getFormValidate({
  configs = [],
  values = {},
}) {

  const validates = {};

  configs.forEach((val) => {
    const { config } = val;
    const newConfig = is.array(config) ? config : [config];

    newConfig.filter((val) => {
      const { ext = {} } = val;
      return !ext.hide;
    }).forEach((val) => {

      const { id, ext = {} } = val;
      const { rules } = ext;

      // 待验证的值
      const value = values[id];
      const result = getValidateByRules({ value, rules });
      if (is.not.empty(result)) {
        validates[id] = {...result};
      }
    })
  })

  return validates;
}
