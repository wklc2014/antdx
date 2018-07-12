/**
 * 多选框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Select } from 'antd';

const { Option } = Select;

export default function MySelect(props) {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const { data } = ext;

  const newProps = {
    ...api,
    value,
    onChange,
  };

  if (is.not.array(data)) {
    throw Error('ext.data 必须是数组');
  }

  const Children = data.map((v, i) => (
    <Option key={i} value={v.value}>
      {v.label}
    </Option>
  ));

  return <Select {...newProps}>{Children}</Select>;
}

MySelect.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
  ]),
}

MySelect.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}
