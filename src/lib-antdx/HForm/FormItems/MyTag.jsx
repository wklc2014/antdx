/**
 * 标签
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Tag } from 'antd';
import checkDataIsEmpty from '../utils/checkDataIsEmpty.js';

const { CheckableTag } = Tag;

const MyTag = (props) => {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const data = checkDataIsEmpty({ ext });

  const Children = data.map((v, i) => {
    const key = `my-tag-${i}`;
    const newProps = {
      key,
      ...api,
      onChange: checked => {
        const newValue = checked ? [...value, v.value] : value.filter(f => f !== v.value);
        onChange(newValue);
      },
      checked: value.indexOf(v.value) > -1,
    };

    return (
      <CheckableTag {...newProps}>
        {v.label}
      </CheckableTag>
    )
  });

  return <span>{Children}</span>;
}

MyTag.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func,
  value: propTypes.array,
}

MyTag.defaultProps = {
  api: {},
  ext: {},
  onChange: () => {},
  value: [],
}

export default MyTag;
