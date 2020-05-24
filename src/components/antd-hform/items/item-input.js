/**
 * 单行文本输入框
 * type: input
 */
import React from 'react';
import { Input } from 'antd';

const { Search, TextArea, Password } = Input;

export default function ItemInput({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
  };
  switch (ext.subType) {
    case 'search':
      return <Search {...newProps} />;
    case 'textarea':
      return <TextArea rows={5} {...newProps} />;
    case 'password':
      return <Password {...newProps} autoComplete="true" />;
    default:
      return <Input allowClear {...newProps} />;
  }
}
