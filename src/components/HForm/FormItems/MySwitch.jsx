/**
 * 切换开关
 */
import React from 'react';
import propTypes from 'prop-types';
import { Switch } from 'antd';

export default function MySwitch(props) {
  const { api, onChange, value } = props;
  const newProps = {
    ...api,
    checked: value,
    onChange,
  };

  return <Switch {...newProps} />;
}
