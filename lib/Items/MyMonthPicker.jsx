/**
 * 月份选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker } from 'antd';

const { MonthPicker } = DatePicker;

export default function MyMonthPicker(props) {
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

  return <MonthPicker {...newProps} />;
}

MyMonthPicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.object,
}

MyMonthPicker.defaultProps = {
  api: {},
  value: undefined,
}
