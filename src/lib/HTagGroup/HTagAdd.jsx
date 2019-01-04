/**
 * 添加标签
 */
import React from 'react';
import { Button } from 'antd';
import hocInput from './hoc/hocInput.js';

const HTagAdd = (props) => {
  const { buttonApi, onVisible } = props;
  const { text, ...restButtonAttr } = buttonApi;
  const ButtonProps = {
    size: 'small',
    type: 'dashed',
    ...restButtonAttr,
    onClick: () => onVisible(),
  }
  const ButtonText = text || '+ 新标签';
  return <Button {...ButtonProps}>{ButtonText}</Button>;
}

export default hocInput(HTagAdd);
