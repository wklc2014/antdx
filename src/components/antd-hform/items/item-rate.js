/**
 * 星星评分
 * type: rate
 */
import React, { Component } from 'react';
import { Rate } from 'antd';

export default function ItemRate({ api, ext, onChange }) {
  const newProps = {
    ...api,
    onChange,
  };
  return <Rate {...newProps} />;
}
