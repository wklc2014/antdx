/**
 * 滑动输入条
 * type: slider
 */
import React, { Component } from 'react';
import { Slider } from 'antd';

export default function ItemSlider({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange,
  };
  return <Slider {...newProps} />;
}
