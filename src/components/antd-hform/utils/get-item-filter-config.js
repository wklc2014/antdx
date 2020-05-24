import is from 'is_js';
import get from 'lodash/get';

export default function getItemFilterConfig(config) {
  // 如果 config 是对象, 则转换成数组, 统一处理
  const itemConfig = is.array(config) ? config : [config];

  // 过滤表单输入元素的隐藏字段
  return itemConfig.filter(val => {
    const hide = get(val, 'ext.hide', false);
    return !hide;
  });
}
