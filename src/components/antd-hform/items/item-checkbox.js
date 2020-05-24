/**
 * 多选框
 * type: checkbox
 */
import React, { Component } from 'react';
import { Checkbox } from 'antd';

export default function ItemCheckbox({ api, ext, onChange }) {
  const newProps = {
    options: ext.data,
    ...api,
    onChange,
  };
  return <Checkbox.Group {...newProps} />;
}
