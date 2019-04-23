/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

export default function MyRadio(props) {
  const { api, ext, onChange, value } = props;
  const { subType, data } = ext;
  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
    value,
  };
  const Children = data.map((v, i) => {
    const key = i;
    if (subType === 'button') {
      return (
        <RadioButton key={key} value={v.value}>
          {v.label}
        </RadioButton>
      )
    }
    return (
      <Radio key={key} value={v.value}>
        {v.label}
      </Radio>
    )
  });

  return <RadioGroup {...newProps}>{Children}</RadioGroup>;
}
