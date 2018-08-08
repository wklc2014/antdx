/**
 * 按钮式单选框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export default function MyRadioButton(props) {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const { data } = ext;

  if (is.not.array(data)) {
    throw Error('ext.data 必须是数组');
  }

  const newProps = {
    ...api,
    value,
    onChange: e => onChange(e.target.value),
  };

  const Children = data.map((v, i) => (
    <RadioButton key={i} value={v.value}>
      {v.label}
    </RadioButton>
  ));

  return <RadioGroup {...newProps}>{Children}</RadioGroup>;
}

MyRadioButton.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MyRadioButton.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}
