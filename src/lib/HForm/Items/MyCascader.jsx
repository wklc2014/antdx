/**
 * 级联选择
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Cascader } from 'antd';

const MyCascader = (props) => {
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
    options: data,
    ...api,
    onChange,
    value,
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

export default MyCascader;
