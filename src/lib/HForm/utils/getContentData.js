import is from 'is_js';
import _chineseCities from './_chineseCities.js';

/**
 * 内置一些表单元素的 data 属性
 */
export default function getContentData({ type, api = {}, ext = {} }) {

  const { data, city } = ext;

  if (type === 'cascader') {
    const { options } = api;
    if (is.array(options)) {
      return options;
    } else if (city && _chineseCities[city] && is.array(_chineseCities[city])) {
      return _chineseCities[city];
    }
  }

  else if (type === 'treeSelect') {
    const { treeData } = api;
    if (is.array(treeData)) {
      return treeData;
    } else if (city && _chineseCities[city] && is.array(_chineseCities[city])) {
      return _chineseCities[city].map((v) => ({ title: v.label, value: v.value }));
    }
  }

  if (is.array(data)) {
    return data;
  }

  return [];
}