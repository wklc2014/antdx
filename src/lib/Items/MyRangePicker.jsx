/**
 * 区间日期选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default function MyRangePicker(props) {
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

  return <RangePicker {...newProps} />;
}

MyRangePicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.arrayOf(propTypes.object),
}

MyRangePicker.defaultProps = {
  api: {},
  value: [],
}
