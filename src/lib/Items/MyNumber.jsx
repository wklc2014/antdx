/**
 * 数字输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { InputNumber } from 'antd';

export default function MyNumber(props) {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange,
  };

  return <InputNumber {...newProps} />;
}

MyNumber.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MyNumber.defaultProps = {
  api: {},
  value: undefined,
}
