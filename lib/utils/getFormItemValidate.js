import is from 'is_js';

/**
 * 自定义表单验证
 * @param  {any}  options.values     [表单值]
 * @param  {Array}   options.configs [表单配置]
 * @param  {Object} options.touched  [表单元素是否首次验证]
 * @return {Object}                  [验证结果]
 */
export default function getFormItemValidate({
  values,
  configs = [],
  touched = {},
}) {

  const validate = {};

  // 只验证两个配置
  configs.slice(0, 2).some((val) => {

    // 错误标识
    let isError = false;

    const { id, ext = {} } = val;
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

    // 验证是否必填
    validate.required = rules.some(rule => rule.required);

    if (touched[id]) {
      // 验证规则一条没通过后, 就不再验证
      isError = rules.some((rule) => {
        const result = validateRule(rule, value);
        if (result) {
          Object.assign(validate, result);
        }
        return !!result;
      });
    }
    return isError;
  })

  return validate;
}

function validateRule(rule, value) {
  // 必填性验证
  const isEmptyArray = is.array(value) && !value.length;
  if (rule.required && (isEmptyArray || !value)) {
    return {
      validateStatus: 'error',
      help: rule.message,
    };
  }

  // 最大值验证
  if (rule.max && value.length > rule.max) {
    return {
      validateStatus: 'error',
      help: rule.message,
    }
  }

  // 最小值验证
  if (rule.min && value.length < rule.min) {
    return {
      validateStatus: 'error',
      help: rule.message,
    };
  }

  // 指定长度验证
  if (rule.len && value.length !== rule.len) {
    return {
      validateStatus: 'error',
      help: rule.message,
    };
  }

  // 手机号码验证
  const reg_phone = /1[0-9]{10}/;
  if (rule.phone && !reg_phone.test(value)) {
    return {
      validateStatus: 'error',
      help: rule.message,
    };
  }

  // 自定义扩展验证
  if (is.function(rule.validator)) {
    const result = rule.validator(value);
    if (result) {
      return {
        validateStatus: 'error',
        help: result,
      }
    }
  }

}