/**
 * 自定义组件
 */
import React from 'react';
import is from 'is_js';

export default function ItemRender({ api, ext, onChange }) {
  if (is.function(ext.render)) {
    return ext.render({ api, ext, onChange });
  }
  return null;
}
