/**
 * 多选框
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import lodash from 'lodash';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

const MySelect = (props) => {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  let { data } = ext;

  if (is.not.array(data)) {
    data = [];
  }

  const newProps = {
    ...api,
    onChange,
    value,
  };

  return <Select {...newProps}>{renderChildren(data)}</Select>;
}

MySelect.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.oneOfType([
    propTypes.string,
    propTypes.array,
  ]),
}

MySelect.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}

export default MySelect;

function renderOption(target, key) {
  if (is.object(target)) {
    const { label = 'label', ...restTarget } = target;
    const OptionProps = {
      key,
      ...restTarget,
    }
    return <Option {...OptionProps}>{label}</Option>
  }
  return <Option key={key}>{target}</Option>
}

function renderChildren(data) {
  const isGroup = lodash.get(data, '[0].children');
  if (!isGroup) {
    return data.map(renderOption);
  }
  return data.map((d, i) => {
    const { label, children = [] } = d;
    return (
      <OptGroup label={label} key={i}>
        {d.children.map(renderOption)}
      </OptGroup>
    )
  })
}
