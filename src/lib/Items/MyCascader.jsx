/**
 * 级联选择
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Cascader } from 'antd';

export default function MyCascader(props) {
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
    options: data,
    ...api,
    value,
    onChange,
  };

  return <Cascader {...newProps} />;
}

MyCascader.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.array,
}

MyCascader.defaultProps = {
  api: {},
  ext: {},
  value: [],
}
