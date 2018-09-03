/**
 * 单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Radio } from 'antd';

const RadioGroup = Radio.Group;

const MyRadio = (props) => {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  let { data } = ext;

  if (is.not.array(data)) {
    data = [];
  }

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
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MyRadio.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}

export default MyRadio;
