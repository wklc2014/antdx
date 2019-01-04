/**
 * 过滤表单元素的 config 参数
 */
import is from 'is_js';

export default function getfilterConfig(config) {
  // 如果 config 是对象, 则转换成数组, 统一处理
  const newConfig = is.array(config) ? config : [config];

  // 过滤表单输入元素的隐藏字段
  return newConfig.filter((val) => {
    const { ext = {} } = val;
    return !ext.hide;
  })
}