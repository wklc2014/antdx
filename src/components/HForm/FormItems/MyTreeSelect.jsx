/**
 * 树形选择控件
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { TreeSelect } from 'antd';

export default function MyTreeSelect(props) {
  const { api, ext, onChange, value } = props;
  const { data } = ext;
  const newProps = {
    dropdownStyle: {
      maxHeight: 300,
    },
    treeData: data,
    ...api,
    onChange,
    value,
  };

  return <TreeSelect {...newProps} />;
}