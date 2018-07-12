/**
 * 多行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

const { TextArea } = Input;

export default function MyTextArea(props) {
  const {
    api,
    // ext,
    onChange,
    value,
  } = props;

  const newProps = {
    rows: 5,
    ...api,
    value,
    onChange: e => onChange(e.target.value),
  };

  return <TextArea {...newProps} />;
}

MyTextArea.propTypes = {
  api: propTypes.object,
  // ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.string,
  ]),
}

MyTextArea.defaultProps = {
  api: {},
  // ext: {},
  value: '',
}
