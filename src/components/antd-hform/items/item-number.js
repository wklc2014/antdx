/**
 * 数字输入框
 * type: number
 */
import React from 'react';
import { InputNumber } from 'antd';

export default function ItemNumber({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange,
  };
  return <InputNumber {...newProps} />;
}
