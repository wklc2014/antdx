/**
 * 时间选择框
 */
import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { TimePicker } from 'antd';

export default function MyTimePicker(props) {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange: (e, f) => onChange(f),
  };

  return <TimePicker {...newProps} />;
}

MyTimePicker.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),
}

MyTimePicker.defaultProps = {
  api: {},
  value: moment(),
}
