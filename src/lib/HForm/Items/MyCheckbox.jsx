/**
 * 多选框
 */
import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import { Checkbox } from 'antd';
import styles from '../styles.less';

const CheckboxGroup = Checkbox.Group;

const MyCheckbox = (props) => {
  const {
    api,
    onChange,
    value,
  } = props;

  const cls = classnames(styles.myCheckbox, api.className);

  const newProps = {
    ...api,
    className: cls,
    onChange,
    value,
  };

  return <CheckboxGroup {...newProps} />;
}

MyCheckbox.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.array,
}

MyCheckbox.defaultProps = {
  api: {},
  value: [],
}

export default MyCheckbox;
