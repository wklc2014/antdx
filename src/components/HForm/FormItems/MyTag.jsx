/**
 * 标签
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Tag } from 'antd';

const { CheckableTag } = Tag;

export default function MyTag(props) {
  const { api, ext, onChange, value = [] } = props;
  const { data } = ext;
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
