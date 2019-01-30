/**
 * 时间选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import { TimePicker } from 'antd';

const MyTimePicker = (props) => {
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

  return <TimePicker {...newProps} />;
}

MyTimePicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func,
  value: propTypes.object,
}

MyTimePicker.defaultProps = {
  api: {},
  onChange: () => {},
  value: undefined,
}

export default MyTimePicker;
