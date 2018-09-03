/**
 * 多行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

import shouldBlurEvent from '../utils/shouldBlurEvent.js';

const { TextArea } = Input;
let isComposition = false;

const MyTextArea = (props) => {
  const {
    api,
    ext,
    onBlur,
    onChange,
    value,
  } = props;

  const newProps = {
    rows: 5,
    ...api,
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
    value,
  };

  if (shouldBlurEvent({ ext })) {
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
  value: undefined,
}

export default MyTextArea;
