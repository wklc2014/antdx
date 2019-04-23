/**
 * 表单元素输入区域
 */
import React, { Component } from 'react';
import is from 'is_js';
import lodash from 'lodash';
import propTypes from 'prop-types';
import { Form, Row, Col, Input } from 'antd';

import HFormItemContent from './HFormItemContent.jsx';
import getFormItemStyleProps from './utils/getFormItemStyleProps.js';
import getFormItemLayoutProps from './utils/getFormItemLayoutProps.js';
import getFormItemLabelProps from './utils/getFormItemLabelProps.js';
import getFormItemRowStyleProps from './utils/getFormItemRowStyleProps.js';
import getValidateByRules from './utils/getValidateByRules.js';
import getfilterConfig from './utils/getfilterConfig.js';
import hocHForm from './hoc/hocHForm.js';
import sortArray from './utils/sortArray.js';

const FormItem = Form.Item;
const InputGroup = Input.Group;

export class HFormItem extends Component {

  static defaultProps = {
    extMap: {},
    onChange: () => {},
    values: {},
  }

  /**
   * 表单元素 onChange 事件
   */
  onChange = ({ id, value }) => {
    const { onChange } = this.props;
    const validate = this.getFormItemValidate({ id, value });
    onChange({ id, value, validate });
  }

  /**
   * 验证表单元素
   * @return {Object} 表单元素验证结果
   */
  getFormItemValidate = ({ id, value }) => {
    const { config = [], values = {} } = this.props;
    const filterConfig = getfilterConfig(config);
    const validateResult = {};

    filterConfig.some((val) => {
      const { ext = {} } = val;
      const { rules = [] } = ext;
      if (!rules) return {};
      const validateObj = {};
      // 错误标识
      let isError = false;
      // 待验证的值
      const validateValue = id === val.id ? value : values[val.id];
      // 验证是否必填
      validateObj.required = rules.some(rule => rule.required);
      const validate = getValidateByRules({ rules, value: validateValue });
      Object.assign(validateObj, validate);
      Object.assign(validateResult, { [val.id]: validateObj });
      isError = is.not.empty(validate);
      return isError;
    })
    return validateResult;
  }

  /**
   * 验证表单元素是否必填
   */
  checkFormItemRequired = () => {
    const { config = [], values = {} } = this.props;
    const filterConfig = getfilterConfig(config);
    let isRequired = false;
    filterConfig.some((val) => {
      const { ext = {} } = val;
      const { rules = [] } = ext;
      if (!rules) return;
      isRequired = rules.some(rule => rule.required);
      return isRequired;
    })
    return isRequired;
  }

  /**
   * 渲染表单元素
   * @return {ReactDom} 表单元素
   */
  renderContentElements = () => {
    const { config, extMap, onChange, values } = this.props;
    const { type } = extMap;
    const filterConfig = getfilterConfig(config);
    const renderTypeCondition = type === 'inputGroup' && is.array(config) && config.length >= 2;
    const sortConfig = sortArray(filterConfig);
    const contentElements = sortConfig.map((val, i) => {
      const key = `formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24 } = ext;
      const HFormItemContentProps = {
        label: extMap.label,
        id: val.id,
        type: val.type,
        api: val.api,
        ext: val.ext,
        onChange: this.onChange,
        value: values[val.id],
      }

      if (renderTypeCondition) {
        return <HFormItemContent key={key} {...HFormItemContentProps} />;
      }

      const ColProps = { key, span, style: {} };
      if (extMap.pLayout === 'vertical') {
        ColProps.style.paddingBottom = 4;
      }
      return (
        <Col {...ColProps}>
          <HFormItemContent {...HFormItemContentProps} />
        </Col>
      );
    });

    if (renderTypeCondition) {
      return <InputGroup compact>{contentElements}</InputGroup>
    }

    const RowProps = {
      type: 'flex',
      gutter: extMap.gutter || 8,
      style: getFormItemRowStyleProps({ extMap }),
    };
    return <Row {...RowProps}>{contentElements}</Row>;
  }

  /**
   * 渲染表单元素验证
   */
  renderFormItemValidate = () => {
    const { config, validates } = this.props;
    const filterConfig = getfilterConfig(config);
    const validateMsg = {};
    filterConfig.some(val => {
      const { id } = val;
      const condition = validates[id] && validates[id].status === 'error';
      if (condition) {
        Object.assign(validateMsg, validates[id]);
      }
      return condition;
    })
    return validateMsg
  }

  render() {
    const { extMap } = this.props;

    // 表单元素的扩展字段配置隐藏属性
    if (extMap.hide) return null;

    const validateMsg = this.renderFormItemValidate();

    const FormItemProps = {
      className: extMap.className,
      colon: extMap.colon,
      extra: extMap.extra,
      style: getFormItemStyleProps({ extMap }),
      ...getFormItemLayoutProps({ extMap }),
      ...getFormItemLabelProps({ extMap }),
      validateStatus: validateMsg.status,
      help: validateMsg.msg,
      required: this.checkFormItemRequired(),
    }

    return <FormItem {...FormItemProps}>{this.renderContentElements()}</FormItem>
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
   * 记录表单元素验证信息
   * @type {Object}
   */
  validates: propTypes.object,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object,
};

export default hocHForm(HFormItem);
