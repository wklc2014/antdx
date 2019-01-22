/**
 * 表单元素输入的内容
 * 被 HFormItem 包裹
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';

import FormItemTypes from './FormItems/index.js';
import CHINESE_CITIES from './utils/_chineseCities.js';

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

  /**
   * 表单元素 onChange 事件
   */
  onChange = (e, composition) => {
    const { id, onChange } = this.props;
    onChange({ id, value: e });
  }

  /**
   * 表单元素 Blur 事件
   */
  onBlur = (e) => {
    const { id, ext, onChange } = this.props;
    const { toUpperCase, toLowerCase, trim } = ext;

    if (e && e.target && e.target.value) {
      let newValue = e.target.value;

      // 删空格
      if (trim) {
        newValue = lodash.trim(newValue);
      }

      // 大小写转换
      if (toUpperCase && is.string(value)) {
        newValue = value.toUpperCase();
      } else if (toLowerCase && is.string(value)) {
        newValue = value.toLowerCase();
      }

      onChange({ id, value: newValue });
    }
  }

  /**
   * 获取表单元素 style 属性
   * @return {Object} 表单元素 style 属性
   */
  getStyleProps() {
    const { type, api = {}, ext = {} } = this.props;
    const { style = {} } = api;
    const { toUpperCase, toLowerCase } = ext;
    const newStyle = {};

    // css 大小写处理
    if (toUpperCase) {
      Object.assign(newStyle, { textTransform: 'uppercase' });
    } else if (toLowerCase) {
      Object.assign(newStyle, { textTransform: 'lowercase' });
    }

    // 部分表单元素类型默认设置 width: 100%
    switch (type) {
      case 'cascader':
      case 'datePicker':
      case 'rangePicker':
      case 'monthPicker':
      case 'timePicker':
      case 'number':
      case 'select':
      case 'editor':
      case 'treeSelect':
        Object.assign(newStyle, { width: '100%' });
        break;
      default:
    }

    // 最后合并表单元素配置的属性
    Object.assign(newStyle, style);

    // 空样式不返回
    if (is.empty(newStyle)) {
      return null;
    }

    return newStyle;
  }

  /**
   * 获取表单元素 data 属性
   * @return {Object} 表单元素 data 属性
   */
  getDataProps() {
    const { type, api = {}, ext = {} } = this.props;
    const { data, city } = ext;

    if (type === 'cascader') {
      if (city && CHINESE_CITIES[city] && is.array(CHINESE_CITIES[city])) {
        return CHINESE_CITIES[city];
      }
    }

    else if (type === 'treeSelect') {
      if (city && CHINESE_CITIES[city] && is.array(CHINESE_CITIES[city])) {
        return CHINESE_CITIES[city].map((v) => ({ title: v.label, value: v.value }));
      }
    }

    return data;
  }

  /**
   * 获取表单元素 placeholder 属性
   * @return {Object} 表单元素 placeholder 属性
   */
  getPlaceholderProps() {
    const { id, type, api = {}, ext = {}, label } = this.props;
    const { placeholder } = api;

    if (placeholder === 'NULL') {
      // 手动设置 placeholder 为 NULL 字符串
      // 则不显示 placeholder
      return '';
    }

    if (!placeholder && !label && !id) {
      // 如果 placeholder、label、id 都没有设置
      // 也不显示 placeholder
      return '';
    }

    let newPlaceholder = '';

    // 表单元素类型 - 输入
    const inputType = [
      'input',
      'textarea',
      'search',
      'service',
      'number',
      'fetchInput',
    ];

    // 表单元素类型 - 选择
    const selectType = [
      'select',
      'treeSelect',
      'cascader',
      'datePicker',
      'monthPicker',
      'timePicker',
    ];

    // 预定义 placeholder 属性
    let prePlaceholder = '';
    if (is.inArray(type, inputType)) {
      prePlaceholder = placeholder || `请输入${label || id}`;
    } else if (is.inArray(type, selectType)) {
      prePlaceholder = placeholder || `请选择${label || id}`;
    }

    if (type === 'rangePicker') {
      /**
       * 区间时间的 placeholder 属性是个数组
       * 单独处理 range 类型
       */
      newPlaceholder = placeholder || [`开始${label || id}`, `开始${label || id}`];
    } else {
      // 否则不处理
      // 直接采用预定义 placeholder
      newPlaceholder = prePlaceholder;
    }

    return newPlaceholder;
  }

  render() {
    const { id, type, label, api, ext, value } = this.props;

    // 计算一些内置的属性
    const newStyle = this.getStyleProps();
    const newData = this.getDataProps();
    const newPlaceholder = this.getPlaceholderProps();

    const params = {
      api: { ...api, placeholder: newPlaceholder, style: newStyle },
      ext: { ...ext, data: newData },
      onChange: this.onChange,
      onBlur: this.onBlur,
      value,
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
   * 绑定到 onChange/onBlur 事件
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
