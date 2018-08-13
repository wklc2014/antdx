/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

import checkIsBlur from '../utils/checkIsBlur.js';

let isComposition = false;

export default function MyInput(props) {
  const {
    api,
    ext,
    onChange,
    onBlur,
    value,
  } = props;

  const newProps = {
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

  return <Input {...newProps} />;
}

MyInput.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  value: propTypes.any,
}

MyInput.defaultProps = {
  api: {},
  ext: {},
  value: '',
}
