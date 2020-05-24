/**
 * 级联选择
 * type: cascader
 */
import React, { Component } from 'react';
import { Cascader } from 'antd';

export default function ItemCascader({ api, ext, onChange }) {
  const newProps = {
    options: ext.data,
    ...api,
    onChange,
  };
  return <Cascader {...newProps} />;
}
