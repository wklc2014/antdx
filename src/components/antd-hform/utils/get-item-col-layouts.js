import is from 'is_js';

// 表单元素布局
export default function getItemLayout(colLayout) {
  console.error('colLayout>>>', colLayout);
  if (is.number(colLayout)) {
    return {
      span: Math.min(colLayout, 24),
    };
  } else if (is.object(colLayout)) {
    return colLayout;
  }

  return null;
}
