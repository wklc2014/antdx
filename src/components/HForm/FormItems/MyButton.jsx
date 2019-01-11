/**
 * 按钮
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Button } from 'antd';

const MyButton = (props) => {

  const {
    api,
    ext,
    onChange,
  } = props;

  const { data } = ext;

  if (is.not.array(data)) {
    const { label = '按钮', value = 'button' } = ext;
    const newProps = {
      ...api,
      onClick: e => onChange(value),
    };
    return <Button {...newProps}>{label}</Button>;
  }

  return data.map((btn, i) => {
    const btnStyle = i === data - 1 ? null : { marginRight: 8 };
    const newProps = {
      ...api,
      type: btn.type || api.type,
      onClick: e => onChange(btn.value),
    };

    return (
      <span style={btnStyle} key={i}>
        <Button {...newProps}>{btn.label}</Button>
      </span>
    );
  });

}

MyButton.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
}

MyButton.defaultProps = {
  api: {},
  ext: {},
}

export default MyButton;
