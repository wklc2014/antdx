import is from 'is_js';

/**
 * 给定表单值, 根据规则数组, 返回验证结果
 * @param  {any}    options.formItemValue    [待验证的表单值]
 * @param  {Array}  options.formItemRules    [表单验证规则]
 * @return {Object}                          [验证结果]
 */
export default function getValidateByRules({ rules, value }) {

  // 验证结果
  const validateResult = {};

  // 如果
  if (!rules) return {};

  // 如果验证规则不是数组, 返回空对象, 输出错误提示
  if (is.not.array(rules)) {
    return {}
    console.error('表单元素验证规则必须是数组');
  }

  // 验证规则一条没通过后, 就不再验证
  rules.some((rule) => {
    const result = validateByRule({ rule, value });
    if (result) {
      Object.assign(validateResult, result);
    }
    return !!result;
  });

  return validateResult;
}

/**
 * 返回验证结果
 * @param  {Object} rule  [验证规则]
 * @param  {Any} value    [待验证的表单值]
 * @return {Object}       [验证结果]
 */
function validateByRule({ rule, value }) {
  // 必填性验证
  const isEmptyArray = is.array(value) && value.length === 0;
  const isEmpty = is.not.number(value) && !value;
  if (rule.required && (isEmptyArray || isEmpty)) {
    return {
      status: 'error',
      msg: rule.message,
    };
  }

  // 最大值验证
  if (rule.max && value.length > rule.max) {
    return {
      status: 'error',
      msg: rule.message,
    }
  }

  // 最小值验证
  if (rule.min && value.length < rule.min) {
    return {
      status: 'error',
      msg: rule.message,
    };
  }

  // 指定长度验证
  if (rule.len && value.length !== rule.len) {
    return {
      status: 'error',
      msg: rule.message,
    };
  }

  // 手机号码验证
  const reg_phone = /^1[0-9]{10}$/;
  if (rule.phone && !reg_phone.test(value)) {
    return {
      status: 'error',
      msg: rule.message,
    };
  }

  // 自定义扩展验证
  if (is.function(rule.validator)) {
    const result = rule.validator(value);
    if (!!result) {
      return {
        status: 'error',
        msg: result,
      }
    }
  }
}