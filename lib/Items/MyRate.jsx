/**
 * 星星评分
 */
import React from 'react';
import propTypes from 'prop-types';
import { Rate } from 'antd';

export default function MyRate(props) {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    value,
    onChange,
  };

  return <Rate {...newProps} />;
}

MyRate.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.number,
}

MyRate.defaultProps = {
  api: {},
  value: 0,
}
