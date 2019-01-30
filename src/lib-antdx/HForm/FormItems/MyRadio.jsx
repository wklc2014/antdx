/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Radio } from 'antd';
import checkDataIsEmpty from '../utils/checkDataIsEmpty.js';

const RadioGroup = Radio.Group;

const MyRadio = (props) => {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const data = checkDataIsEmpty({ ext });

  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
    value,
  };

  const Children = data.map((v, i) => (
    <Radio key={i} value={v.value}>
      {v.label}
    </Radio>
  ));

  return <RadioGroup {...newProps}>{Children}</RadioGroup>;
}

MyRadio.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func,
  value: propTypes.any,
}

MyRadio.defaultProps = {
  api: {},
  ext: {},
  onChange: () => {},
  value: undefined,
}

export default MyRadio;
