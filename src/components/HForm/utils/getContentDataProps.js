/**
 * 获取 data 属性
 */
import is from 'is_js';
import CHINESE_CITIES from './_chineseCities.js';

export default function getContentDataProps(props) {
  const { type, api = {}, ext = {} } = props;
  const { data, city } = ext;

  if (type === 'cascader') {
    if (city && CHINESE_CITIES[city] && is.array(CHINESE_CITIES[city])) {
      return CHINESE_CITIES[city];
    }
  }

  else if (type === 'treeSelect') {
    if (city && CHINESE_CITIES[city] && is.array(CHINESE_CITIES[city])) {
      return CHINESE_CITIES[city].map((v) => ({ title: v.label, value: v.value }));
    }
  }

  if (is.not.array(data) && type !== 'button') {
    return [];
  }

  return data;
}