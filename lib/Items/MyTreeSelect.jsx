/**
 * 树形选择控件
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { TreeSelect } from 'antd';

export default function MyTreeSelect(props) {
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
    dropdownStyle: {
      maxHeight: 300,
    },
    treeData: data,
    ...api,
    value,
    onChange,
  };

  return <TreeSelect {...newProps} />;
}

MyTreeSelect.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.arrayOf(propTypes.string),
  ]),
}

MyTreeSelect.defaultProps = {
  api: {},
  ext: {},
  value: '',
}
