/**
 * 树形选择控件
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { TreeSelect } from 'antd';

const MyTreeSelect = (props) => {
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
  value: undefined,
}

export default MyTreeSelect;