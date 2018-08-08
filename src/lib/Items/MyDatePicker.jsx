/**
 * 日期选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker } from 'antd';

export default function MyDatePicker(props) {
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

  return <DatePicker {...newProps} />;
}

MyDatePicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.object,
}

MyDatePicker.defaultProps = {
  api: {},
  value: undefined,
}
