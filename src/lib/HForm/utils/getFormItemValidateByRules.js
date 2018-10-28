import is from 'is_js';

/**
 * 对表单元素值进行验证
 * @param  {any}    options.formItemValue    [待验证的表单值]
 * @param  {Array}  options.formItemRules    [表单验证规则]
 * @return {Object}                          [验证结果]
 */
export default function getFormItemValidateByRules({
  formItemValue: value,
  formItemRules: rules,
}) {

  const validate = {};

  if (!rules) return validate;

  // 如果验证规则不是数组，直接抛异常
  if (is.not.array(rules)) {
    throw Error('表单元素验证规则必须是数组');
  }

  // 验证规则一条没通过后, 就不再验证
  rules.some((rule) => {
    const result = validateRule({ rule, value });
    if (result) {
      Object.assign(validate, result);
    }
    return !!result;
  });

  return validate;
}

/**
 * 具体的表单验证结果
 * @param  {Object} rule  [验证规则]
 * @param  {Any} value    [待验证的表单值]
 * @return {Object}       [验证结果]
 */
function validateRule({ rule, value }) {
  // 必填性验证
  const isEmptyArray = is.array(value) && value.length === 0;
  const isEmpty = is.not.number(value) && !value;
  if (rule.required && (isEmptyArray || isEmpty)) {
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
  const reg_phone = /^1[0-9]{10}$/;
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