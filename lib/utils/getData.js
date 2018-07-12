import _chineseCities from './_chineseCities.js';

/**
 * 内置一些表单元素的 data 属性
 * @param  {string} options.type [表单元素输入类型]
 * @param  {Object} options.ext  [表单元素扩展配置]
 * @return {array}               [新的表单元素的 data 属性]
 */
export default function getData({ type, ext = {} }) {

  const { data, city } = ext;

  let newData = data || [];
  switch (type) {
    case 'cascader':
    case 'treeSelect':
      if (city && _chineseCities[city]) {
        newData = [..._chineseCities[city]];
      }
      break;
    default:
  }
  return newData;
}