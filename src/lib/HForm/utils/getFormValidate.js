import is from 'is_js';
import getFormItemValidateByRules from './getFormItemValidateByRules.js';

/**
 * 自定义表单验证
 * @param  {Array}  options.formConfigs    [表单配置]
 * @param  {Object} options.formValues     [表单元素值]
 * @return {Object}                        [当前表单元素验证结果]
 */
export default function getFormValidate({
  formConfigs = [],
  formValues = {},
}) {

  const formValidates = {};

  formConfigs.forEach((val) => {
    const { config: formItemConfig } = val;
    const newFormItemConfig = is.array(formItemConfig) ? formItemConfig : [formItemConfig];

    newFormItemConfig.forEach((c) => {

      const { id, ext = {} } = c;
      const { rules } = ext;

      if (!rules) return ;

      /**
       * 如果验证规则不是数组，直接抛异常
       */
      if (is.not.array(rules)) {
        throw Error('表单元素验证规则必须是数组');
      }

      // 待验证的值
      const formItemValue = formValues[id];

      formValidates[id] = getFormItemValidateByRules({
        formItemValue,
        formItemRules: rules,
      });

    })
  })

  return formValidates;
}
