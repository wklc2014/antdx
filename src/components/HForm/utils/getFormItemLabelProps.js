/**
 * 获取表单元素 label 属性
 * @return {Object} 表单元素 label 属性
 */
import React from 'react';
import is from 'is_js';

export default function getFormItemLabelProps(props) {
  const { extMap } = props;
  const { label, pLayout = 'horizontal', colon = true } = extMap;

  // 如果设置 label === false
  // 设置一个隐藏的占位元素, 且冒号不显示
  if (is.boolean(label) && !label) {
    if (pLayout !== 'vertical') {
      return {
        label: <span style={{ display: 'none' }} />,
        colon: false,
      };
    }
    return {
      label: <span style={{ visibility: 'hidden' }}>&nbsp;</span>,
      colon: false,
    };
  }

  // 如果表单是 vertical 布局, 且设置显示冒号:
  if (pLayout === 'vertical' && colon) {
    return {
      label: `${label}：`,
    };
  }

  return { label };
}