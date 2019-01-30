/**
 * 级联选择
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Cascader } from 'antd';
import checkDataIsEmpty from '../utils/checkDataIsEmpty.js';

const MyCascader = (props) => {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const data = checkDataIsEmpty({ ext });

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
  onChange: propTypes.func,
  value: propTypes.array,
}

MyCascader.defaultProps = {
  api: {},
  ext: {},
  onChange: () => {},
  value: [],
}

export default MyCascader;
