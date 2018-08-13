/**
 * 多行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

import checkIsBlur from '../utils/checkIsBlur.js';

const { TextArea } = Input;
let isComposition = false;

export default function MyTextArea(props) {
  const {
    api,
    ext,
    onChange,
    onBlur,
    value,
  } = props;

  const newProps = {
    rows: 5,
    ...api,
    value,
    onChange: e => {
      onChange(e.target.value, isComposition);
    },
    onCompositionStart: e => {
      isComposition = true;
    },
    onCompositionEnd: e => {
      isComposition = false;
      onChange(e.target.value);
    },
  };

  if (checkIsBlur({ ext })) {
    Object.assign(newProps, {
      onBlur: e => onBlur(e.target.value),
    });
  }

  return <TextArea {...newProps} />;
}

MyTextArea.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  value: propTypes.any,
}

MyTextArea.defaultProps = {
  api: {},
  ext: {},
  value: '',
}
