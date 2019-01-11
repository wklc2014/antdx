/**
 * 带搜索按钮的单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

import shouldBindBlurEvent from '../utils/shouldBindBlurEvent.js';

const { Search } = Input;

const MySearch = (props) => {
  const {
    api,
    ext,
    onBlur,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
    value,
  };

  if (shouldBindBlurEvent({ ext })) {
    Object.assign(newProps, {
      onBlur: e => onBlur(e.target.value),
    });
  }

  return <Search {...newProps} />;
}

MySearch.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onBlur: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MySearch.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}

export default MySearch;
