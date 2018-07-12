/**
 * 文本显示
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';

export default function MyText(props) {
  const {
    api,
    ext,
    onChange,
    value,
  } = props;

  const { data, join = ',' } = ext;

  const newProps = {
    ...api,
    value,
    onChange: e => onChange(e.target.value),
  };

  let textValue = value;
  if (is.function(ext.render)) {
    // 优先处理 render 函数
    textValue = ext.render(value);
  } else if (is.array(data)) {
    // 然后处理 value 在 data 中的映射
    if (is.array(value)) {
      // 多指映射
      const textValueMap = [];
      data.forEach((v) => {
        if (is.inArray(v.value, value)) {
          textValueMap.push(v.label);
        }
      });
      textValue = textValueMap.join(join);
    } else {
      // 单值映射
      const findValue = data.find(v => v.value === value);
      if (findValue) {
        textValue = findValue.label;
      }
    }
  }
  // 新增一个[my-form-text]类，对 antd 样式做调整
  return <span className="ant-form-text my-hform-text">{textValue}</span>;
}

MyText.propTypes = {
  api: propTypes.object,
  ext: propTypes.object,
  onChange: propTypes.func.isRequired,
  value: propTypes.any,
}

MyText.defaultProps = {
  api: {},
  ext: {},
  value: undefined,
}
