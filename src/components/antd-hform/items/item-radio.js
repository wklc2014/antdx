/**
 * 单行文本输入框
 * type: radio
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Radio } from 'antd';

export default function ItemRadio({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange: e => onChange(e.target.value),
  };

  const elements = ext.data.map((v, i) => {
    const key = `my-radio-${i}`;

    if (ext.subType === 'button') {
      return (
        <Radio.Button key={key} value={v.value}>
          {v.label}
        </Radio.Button>
      );
    }

    return (
      <Radio key={key} value={v.value}>
        {v.label}
      </Radio>
    );
  });

  return <Radio.Group {...newProps}>{elements}</Radio.Group>;
}
