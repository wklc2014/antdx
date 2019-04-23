/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Input } from 'antd';

const { Search, TextArea, Password } = Input;

export default function MyInput(props) {
  const { api, ext, onChange, value } = props;
  const { subType } = ext;
  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
    value,
  };

  if (subType === 'search') {
    return <Search {...newProps} />;
  } else if (subType === 'textarea') {
    return <TextArea rows={5} {...newProps} />;
  } else if (subType === 'password') {
    return <Password {...newProps} />;
  }
  return <Input {...newProps} />;
}
