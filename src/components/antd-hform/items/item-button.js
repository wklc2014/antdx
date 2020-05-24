/**
 * 按钮
 * type: button
 */
import React from 'react';
import is from 'is_js';
import { Button } from 'antd';

export default function ItemButton({ api, ext, onChange }) {
  // 渲染多个按钮
  if (is.array(ext.data)) {
    return ext.data.map((v, i) => {
      const key = `item-button-${i}`;
      const style = i === ext.data - 1 ? null : { marginRight: 8 };
      const newProps = {
        ...api,
        type: v.type || api.type,
        onClick: e => onChange(v.value),
      };

      return (
        <span style={style} key={key}>
          <Button {...newProps}>{v.label}</Button>
        </span>
      );
    });
  }

  // 渲染单个按钮
  const { label = 'BUTTON', value = 'button' } = ext;
  const newProps = {
    ...api,
    onClick: e => onChange(value),
  };
  return <Button {...newProps}>{label}</Button>;
}
