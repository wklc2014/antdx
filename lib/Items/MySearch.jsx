/**
 * 带搜索按钮的单行文本输入框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Input } from 'antd';

const { Search } = Input;

export default function MySearch(props) {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange: e => onChange(e.target.value),
  };

  return <Search {...newProps} />;
}

MySearch.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MySearch.defaultProps = {
  api: {},
  value: '',
}
