/**
 * 表单元素输入的内容
 * 被 HFormItem 包裹
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';

import FormItemTypes from './FormItems/index.js';
import getContentPlaceholderProps from './utils/getContentPlaceholderProps.js';
import getContentDataProps from './utils/getContentDataProps.js';
import getContentStyleProps from './utils/getContentStyleProps.js';

class HFormItemContent extends Component {

  static defaultProps = {
    label: '',
    api: {},
    ext: {},
    onChange: () => {},
    value: undefined,
  }

  shouldComponentUpdate(nextProps) {
    const next = JSON.stringify(nextProps);
    const prev = JSON.stringify(this.props);
    return next !== prev;
  }

  render() {
    const { id, type, label, api, ext, onChange, value, extValue } = this.props;

    // 计算一些内置的属性
    const newStyle = getContentStyleProps({ type, api, ext });
    const newData = getContentDataProps({ type, api, ext });
    const newPlaceholder = getContentPlaceholderProps({ id, type, api, ext, label });

    const params = {
      api: { ...api, placeholder: newPlaceholder, style: newStyle },
      ext: { ...ext, data: newData },
      onChange: e => onChange({ id, value: e }),
      value,
      extValue,
    };

    if (FormItemTypes && FormItemTypes[type]) {
      return FormItemTypes[type](params);
    }

    return null;
  }
}

HFormItemContent.propTypes = {
  /**
   * 表单元素 label 属性
   * 主要用来生成 placeholder 属性
   * @type {String/Boolean}
   */
  label: propTypes.oneOfType([
    propTypes.element,
    propTypes.string,
    propTypes.bool,
  ]),

  /**
   * 表单元素 id 属性
   * 标识表单元素的唯一 ID
   * @type {String}
   */
  id: propTypes.string.isRequired,

  /**
   * 表单元素 type 属性
   * 标识表单元素的输入类型
   * @type {String}
   */
  type: propTypes.string.isRequired,

  /**
   * 表单元素 api
   * 包括 antd/html 支持的
   * @type {object}
   */
  api: propTypes.object,

  /**
   * 表单元素扩展配置
   * @type {Object}
   */
  ext: propTypes.object,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange 事件
   * @type {func}
   */
  onChange: propTypes.func,

  /**
   * 表单元素值
   * @type {Any}
   */
  value: propTypes.any,
}

export default HFormItemContent;
