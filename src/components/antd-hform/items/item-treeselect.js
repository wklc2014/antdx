/**
 * 树形选择控件
 * type: treeselect
 */
import React, { Component } from 'react';
import { TreeSelect } from 'antd';

export default function ItemTreeSelect({ api, ext, onChange }) {
  const newProps = {
    treeData: ext.data,
    ...api,
    dropdownStyle: {
      maxHeight: 300,
      ...api.dropdownStyle,
    },
    onChange,
  };

  return <TreeSelect {...newProps} />;
}
