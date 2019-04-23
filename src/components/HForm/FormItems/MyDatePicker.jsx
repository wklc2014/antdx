/**
 * 日期选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { DatePicker, TimePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default function MyDatePicker(props) {
  const { api, ext, onChange, value } = props;
  const { subType } = ext;
  const newProps = {
    ...api,
    onChange,
    value,
  };

  if (subType === 'month') {
    return <MonthPicker {...newProps} />;
  } else if (subType === 'time') {
    return <TimePicker {...newProps} />;
  } else if (subType === 'range') {
    return <RangePicker {...newProps} />;
  } else if (subType === 'week') {
    return <WeekPicker {...newProps} />;
  }
  return <DatePicker {...newProps} />;
}
