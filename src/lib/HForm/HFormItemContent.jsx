import React, { Component } from 'react';
import propTypes from 'prop-types';

import FormItems from './FormItems/index.js';

import getContentStyle from './utils/getContentStyle.js';
import getContentData from './utils/getContentData.js';
import getContentPlaceholder from './utils/getContentPlaceholder.js';
import { getOnBlurValue } from './utils/getContentValue.js';

/**
 * 表单元素输入的内容
 * 被 HFormItem 包裹
 */
class HFormItemContent extends Component {

  static defaultProps = {
    label: '',
    api: {},
    ext: {},
    value: undefined,
  }

  shouldComponentUpdate(nextProps) {
    const next = JSON.stringify(nextProps);
    const prev = JSON.stringify(this.props);
    return next !== prev;
  }

  onChange = (e, composition) => {
    const { id, onChange } = this.props;
    onChange({ id, value: e });
  }

  onBlur = (e) => {
    const { id, ext, onChange } = this.props;
    const newValue = getOnBlurValue({ value: e, ext });
    onChange({ id, value: newValue });
  }

  render() {
    const { id, label, type, api, ext, value } = this.props;

    // 计算一些内置的属性
    const newStyle = getContentStyle({ type, api, ext });
    const newData = getContentData({ type, api, ext });
    const newPlaceholder = getContentPlaceholder({ type, api, ext, label, id });

    const params = {
      api: { ...api, placeholder: newPlaceholder, style: newStyle },
      ext: { ...ext, data: newData },
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
    };

    if (FormItems[type]) {
      return FormItems[type](params);
    }

    console.error(`type>>>${type} is error type!`);
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
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,

  /**
   * 表单元素值
   * @type {Any}
   */
  value: propTypes.any,
}

export default HFormItemContent;
