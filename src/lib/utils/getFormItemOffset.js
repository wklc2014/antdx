/**
 * 某些表单元素不设置 label
 * 则该表单元素布局还需要一个 offset 属性
 * @param  {Object} options.layout  [表单元素布局]
 * @param  {Boolean} options.offset [是否设置 offset]
 * @return {Object}                 [新的表单元素布局]
 */
export default function getFormItemOffset({ layout, offset }) {

  // 如果不需要设置 offset 属性，则直接返回表单元素布局
  if (!offset) return layout;

  // 给表单元素布局对象的 wrapperCol 值添加 offset 属性
  const newLayout = {};
  Object.keys(layout).forEach((val) => {
    const { labelCol = {}, wrapperCol = {} } = layout;
    if (val === 'labelCol') {
      newLayout.wrapperCol = setWrapper(labelCol, wrapperCol);
    }
  })

  return newLayout;
}

// 给一个布局对象的 wrapperCol 属性添加 offset 属性
function setWrapper(labelCol = {}, wrapperCol = {}) {
  const newWrapperCol = {};
  Object.keys(labelCol).forEach((id) => {
    const x = labelCol[id];
    const y = wrapperCol[id] || 0;
    if (x > 0 && x < 24) {
      newWrapperCol[id] = { span: y || x, offset: x };
    } else {
      newWrapperCol[id] = x;
    }
  })
  return newWrapperCol;
}
