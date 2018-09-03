/**
 * 获取 Popover 组建 content 内容
 * type 按钮类型 rotate, zoom
 * values 对应的值，图片旋转值或图片缩放值
 * onChange change 事件
 */
import React from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';

export default function getPopoverContent(type, values, onChange) {

  const SliderProps = {
    onChange: e => onChange(type, e),
    value: values[type],
  };

  const InputNumberProps = {
    ...SliderProps,
    precision: 2,
    step: 0.01,
    style: {
      width: '100%',
    },
  }

  if (type === 'rotate') {
    SliderProps.marks = {
      '0': '0',
      '90': '90',
      '180': '180',
      '270': '270',
      '360': '360',
    };
    SliderProps.min = 0;
    SliderProps.max = 360;
  } else if (type === 'zoom') {
    SliderProps.marks = {
      '0': '0',
      '50': '50',
      '100': '100',
      '150': '150',
      '200': '200',
      '250': '250',
      '300': '300',
    };
    SliderProps.min = 0;
    SliderProps.max = 300;
  } else {
    return null;
  }

  return (
    <Row type="flex" gutter={24} >
      <Col span={18}>
        <Slider {...SliderProps} />
      </Col>
      <Col span={6} style={{ paddingTop: 5 }}>
        <InputNumber {...InputNumberProps} />
      </Col>
    </Row>
  )
}
