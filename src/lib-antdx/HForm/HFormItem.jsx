/**
 * 表单元素输入区域
 */
import React, { Component } from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import HFormItemContent from './HFormItemContent.jsx';
import getValidateByRules from './utils/getValidateByRules.js';
import getfilterConfig from './utils/getfilterConfig.js';

const FormItem = Form.Item;

class HFormItem extends Component {

  static defaultProps = {
    extMap: {},
    onChange: () => {},
    touches: {},
    values: {},
  }

  /**
   * 验证表单元素
   * @return {Object} 表单元素验证结果
   */
  getFormItemValidate = () => {
    const { config, touches, values } = this.props;
    const filterConfig = getfilterConfig(config);
    const validates = {};

    filterConfig.some((val) => {
      const { id, ext = {} } = val;
      const { rules = [] } = ext;

      // 如果
      if (!rules) return {};

      // 错误标识
      let isError = false;

      // 待验证的值
      const value = values[id];

      // 验证是否必填
      validates.required = rules.some(rule => rule.required);

      if (touches[id]) {
        const validate = getValidateByRules({ rules, value });
        Object.assign(validates, validate);
        isError = is.not.empty(validate);
      }

      return isError;
    })

    return validates;
  }

  /**
   * 获取表单元素布局属性
   * @return {Object} 表单元素布局属性
   */
  getFormItemLayoutProps = () => {
    const { extMap } = this.props;
    const { layout = '80px', pLayout = '' } = extMap;

    // 只有 horizontal Form 布局, 才需要设置布局属性
    if (pLayout !== 'horizontal') {
      return null;
    }

    // 如果表单元素布局为栅格布局(对象)，则直接作为布局属性
    if (is.object(layout)) {
      return layout;
    }

    let newLayout = layout;

    // 如果布局属性为数字
    if (is.number(layout)) {
      newLayout = `${layout}px`;
    }

    return {
      labelCol: {
        style: { flex: `0 0 ${newLayout}` },
      },
      wrapperCol: {
        style: { flex: '1 1 100%' },
      }
    };
  }

  /**
   * 获取表单元素 label 属性
   * @return {Object} 表单元素 label 属性
   */
  getFormItemLabelProps = () => {
    const { extMap } = this.props;
    const { label, pLayout, colon = true } = extMap;

    // 如果设置 label === false
    // 设置一个隐藏的占位元素, 且冒号不显示
    if (is.boolean(label) && !label) {
      if (pLayout !== 'vertical') {
        return {
          label: <span style={{ display: 'none' }} />,
          colon: false,
        };
      }
      return {
        label: <span style={{ visibility: 'hidden' }}>&nbsp;</span>,
        colon: false,
      };
    }

    // 如果表单是 vertical 布局, 且设置显示冒号:
    if (pLayout === 'vertical' && colon) {
      return {
        label: `${label}：`,
      };
    }

    return { label };
  }

  /**
   * 获取表单元素 style 属性
   * @return {Object} 表单元素 style 属性
   */
  getFormItemStyleProps = () => {
    const { extMap } = this.props;
    const { style = {}, pLayout = '' } = extMap;

    // 如果表单不是 horizontal 布局, 返回原始 style 属性
    if (pLayout !== 'horizontal') {
      return style;
    }

    return { ...style, display: 'flex' };
  }

  /**
   * 获取 Row 组件 style 属性
   * @return {Object} Row 组件 style 属性
   */
  getRowStyleProps(extMap = {}) {
    const { pLayout, space = 0, minWidth = 160, maxWidth } = extMap;
    const RowStyle = {};

    if (space) {
      RowStyle.paddingRight = space;
    }

    if (pLayout === 'inline') {
      RowStyle.minWidth = minWidth;
      if (maxWidth) {
        RowStyle.maxWidth = maxWidth;
      }
    }

    return RowStyle;
  }

  /**
   * 渲染表单元素
   * @return {ReactDom} 表单元素
   */
  renderColElements = () => {
    const { config, extMap, onChange, values } = this.props;
    const filterConfig = getfilterConfig(config);

    return filterConfig.map((val, i) => {
      const key = `formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24 } = ext;
      const ColProps = { key, span, style: {} };

      if (extMap.pLayout === 'vertical') {
        ColProps.style.paddingBottom = 4;
      }

      const HFormItemContentProps = {
        label: extMap.label,
        id: val.id,
        type: val.type,
        api: val.api,
        ext: val.ext,
        onChange,
        value: values[val.id],
      }

      return (
        <Col {...ColProps}>
          <HFormItemContent {...HFormItemContentProps} />
        </Col>
      );
    });
  }

  render() {
    const { extMap } = this.props;

    // 表单元素的扩展字段配置隐藏属性
    if (extMap.hide) return null;

    const FormItemProps = {
      className: extMap.className,
      colon: extMap.colon,
      extra: extMap.extra,
      style: this.getFormItemStyleProps(),
      ...this.getFormItemValidate(),
      ...this.getFormItemLayoutProps(),
      ...this.getFormItemLabelProps(),
    }

    const RowProps = {
      type: 'flex',
      gutter: extMap.gutter || 8,
      style: this.getRowStyleProps(extMap),
    };

    return (
      <FormItem {...FormItemProps}>
        <Row {...RowProps}>
          {this.renderColElements()}
        </Row>
      </FormItem>
    )
  }
}

HFormItem.propTypes = {
  /**
   * 表单元素配置
   * @type {Array/object}
   */
  config: propTypes.oneOfType([
    propTypes.object,
    propTypes.array,
  ]).isRequired,

  /**
   * 表单元素扩展配置
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func,

  /**
   * 记录表单元素是否是首次验证
   * @type {Object}
   */
  touches: propTypes.object,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object,
};

export default HFormItem;
