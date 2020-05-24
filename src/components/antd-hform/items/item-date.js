/**
 * 日期选择框
 * type: datepicker
 */
import React, { Component } from 'react';
import { DatePicker, TimePicker } from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

export default function ItemDate({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange,
  };
  switch (ext.subType) {
    case 'month':
      return <MonthPicker {...newProps} />;
    case 'time':
      return <TimePicker {...newProps} />;
    case 'range':
      return <RangePicker {...newProps} />;
    case 'week':
      return <WeekPicker {...newProps} />;
    default:
      return <DatePicker {...newProps} />;
  }
}
