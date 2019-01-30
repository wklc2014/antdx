/**
 * 多选框
 */
import React from 'react';
import propTypes from 'prop-types';
import { Checkbox } from 'antd';
import checkDataIsEmpty from '../utils/checkDataIsEmpty.js';

const CheckboxGroup = Checkbox.Group;

const MyCheckbox = (props) => {
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

  return <CheckboxGroup {...newProps} />;
}

MyCheckbox.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func,
  value: propTypes.array,
}

MyCheckbox.defaultProps = {
  api: {},
  ext: {},
  onChange: () => {},
  value: [],
}

export default MyCheckbox;
