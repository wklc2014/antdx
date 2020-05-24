/**
 * 文本显示
 * type: text
 */
import React, { Component } from 'react';
import is from 'is_js';

export default function ItemText({ api, ext, onChange }) {
  let { value } = api;

  // 处理映射关系
  if (is.array(ext.data)) {
    // 多值映射
    if (is.array(value)) {
      const textMap = [];
      ext.data.forEach(v => {
        if (is.inArray(v.value, value)) {
          textMap.push(v.label);
        }
      });
      value = textMap.join(ext.join || ',');
    }

    // 单值映射
    else {
      const findValue = ext.data.find(v => v.value === value);
      if (findValue) {
        value = findValue.label;
      }
    }
  }

  return <span className={`ant-form-text ${api.className}`}>{value}</span>;
}
