/**
 * 某些表单元素不设置 label
 * 则该表单元素布局还需要一个 offset 属性
 * @return {Object}                 [新的表单元素布局]
 */
export default function getFormItemOffsetLayout(params = {}) {

  const {
    formItemLayout,
    formItemOffset,
  } = params;

  // 如果不需要设置 offset 属性，则直接返回表单元素布局
  if (!formItemOffset) return formItemLayout;

  // 给表单元素布局对象的 wrapperCol 值添加 offset 属性
  const newFormItemLayout = {};
  Object.keys(formItemLayout).forEach((val) => {
    const { labelCol = {}, wrapperCol = {} } = formItemLayout;
    if (val === 'labelCol') {
      newFormItemLayout.wrapperCol = setWrapperCol({ labelCol, wrapperCol });
    }
  })

  return newFormItemLayout;
}

// 给一个布局对象的 wrapperCol 属性添加 offset 属性
function setWrapperCol(params = {}) {

  const {
    labelCol = {},
    wrapperCol = {}
  } = params;

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
