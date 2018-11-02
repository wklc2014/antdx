import React from 'react';
import is from 'is_js';

/**
 * 获取表单元素的 label 属性
 */
export default function getFormItemLabel(params = {}) {

  const { label, pLayout } = params;



  // 如果设置 label === false
  if (is.boolean(label) && !label) {
    return {
      label: <span style={{ display: 'none' }} />,
      colon: false,
    };
  }

  // 如果表单不是 horizontal 布局
  if (pLayout === 'vertical') {
    return {
      label: `${label}：`,
    };
  }

  return { label };
}