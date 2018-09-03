/**
 * 区间日期选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

const MyRangePicker = (props) => {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    onChange,
    value,
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

export default MyRangePicker;
