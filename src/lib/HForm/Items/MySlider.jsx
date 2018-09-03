/**
 * 滑动输入条
 */
import React from 'react';
import propTypes from 'prop-types';
import { Slider } from 'antd';

const MySlider = (props) => {
  const {
    api,
    onChange,
    value,
  } = props;

  const newProps = {
    ...api,
    onChange,
    value,
  };

  return <Slider {...newProps} />;
}

MySlider.propTypes = {
  api: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.number,
    propTypes.arrayOf(propTypes.number),
  ]),
}

MySlider.defaultProps = {
  api: {},
  value: 0,
}

export default MySlider;
