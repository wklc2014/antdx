import { Component } from 'react';
import propTypes from 'prop-types';

import renderItems from './Items/renderItems.js';

import getPlaceholder from './utils/getPlaceholder.js';
import getStyle from './utils/getStyle.js';
import getData from './utils/getData.js';
import getValue, { getBlurValue } from './utils/getValue.js';

/**
 * 表单元素输入的内容
 * 被 HFormItem 包裹
 */
export default class HFormItemContent extends Component {

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
    const { id, ext, onChange } = this.props;
    const newValue = getValue({ value: e, ext, composition });
    onChange({ id, value: newValue });
  }

 onBlur = (e) => {
    const { id, ext, onChange } = this.props;
    const newValue = getBlurValue({ value: e, ext });
    onChange({ id, value: newValue });
  }

  render() {
    const { id, type, label, api, ext, value } = this.props;
    const { placeholder, style } = api;

    // 计算一些必要的属性
    const newPlaceholder = getPlaceholder({ type, placeholder, label, id });
    const newStyle = getStyle({ type, ext, style });
    const newData = getData({ type, ext });

    return renderItems({
      type,
      api: { ...api, placeholder: newPlaceholder, style: newStyle },
      ext: { ...ext, data: newData },
      value,
      onChange: this.onChange,
      onBlur: this.onBlur,
    });
  }
}

HFormItemContent.propTypes = {
  /**
   * 表单元素 label 属性
   * 标识表单元素的名称
   * @type {String}
   */
  label: propTypes.string,

  /**
   * 表单元素 id 属性
   * 标识表单元素的唯一 ID
   * @type {String}
   */
  id: propTypes.string.isRequired,

  /**
   * 表单元素 type 属性
   * 标识表单元素的输入类别
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

  value: propTypes.any,
}
