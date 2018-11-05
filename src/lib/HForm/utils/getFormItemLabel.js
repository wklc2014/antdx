import React from 'react';
import is from 'is_js';

/**
 * 获取表单元素的 label 属性
 */
export default function getFormItemLabel(params = {}) {

  const { label, pLayout, colon = true } = params;

  // 如果设置 label === false
  // 设置一个隐藏的占位元素, 且冒号不显示
  if (is.boolean(label) && !label) {
    return {
      label: <span style={{ display: 'none' }} />,
      colon: false,
    };
  }

  // 如果表单是 vertical 布局, 冒号显示
  if (pLayout === 'vertical' && colon) {
    return {
      label: `${label}：`,
    };
  }

  return { label };
}