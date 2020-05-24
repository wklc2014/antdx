/**
 * 切换开关
 * type: switch
 */
import React, { Component } from 'react';
import { Switch } from 'antd';

export default function ItemSwitch({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange,
    checked: api.value,
  };
  return <Switch {...newProps} />;
}
