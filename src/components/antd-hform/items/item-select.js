/**
 * 多选框
 * type: select
 */
import React, { Component } from 'react';
import is from 'is_js';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

function renderOption(target, key) {
  if (is.object(target)) {
    const { label = 'label', ...rest } = target;
    const OptionProps = { key, ...rest };
    return <Option {...OptionProps}>{label}</Option>;
  }

  if (is.string(target)) {
    return (
      <Option key={key} value={target}>
        {target}
      </Option>
    );
  }

  return null;
}

export default function ItemSelect({ api, ext, onChange }) {
  const newProps = {
    allowClear: true,
    ...api,
    onChange,
  };

  const elements = ext.data.map((v, i) => {
    const key = `my-select-${i}`;
    const { label, children } = v;

    if (is.array(children)) {
      return (
        <OptGroup label={label} key={key}>
          {children.map(renderOption)}
        </OptGroup>
      );
    }

    return renderOption(v, key);
  });

  return <Select {...newProps}>{elements}</Select>;
}
