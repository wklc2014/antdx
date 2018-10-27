import is from 'is_js';
import _chineseCities from './_chineseCities.js';

/**
 * 内置一些表单元素的 data 属性
 * @param  {string} options.type [表单元素输入类型]
 * @param  {Object} options.ext  [表单元素扩展配置]
 * @return {array}               [新的表单元素的 data 属性]
 */
export default function getData({ type, api = {}, ext = {} }) {

  if (type === 'cascader') {
    const { options } = api;
    const { city } = ext;
    if (is.array(options)) {
      return options;
    } else if (city && _chineseCities[city] && is.array(_chineseCities[city])) {
      return _chineseCities[city];
    }
  }

  else if (type === 'treeSelect') {
    const { treeData } = api;
    const { data } = ext;
    if (is.array(treeData)) {
      return treeData;
    } else if (is.array(data)) {
      return data.map((v) => ({ title: v.label, value: v.value }));
    }
  }

  return [];
}