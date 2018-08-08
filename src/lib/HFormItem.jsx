/**
 * 根据一个配置对象
 * 渲染一个 Antd 的 FormItem 元素
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import HFormItemContent from './HFormItemContent.jsx';

import getFormItemOffset from './utils/getFormItemOffset.js';
import getFormItemValidate from './utils/getFormItemValidate.js';

const FormItem = Form.Item;

export default function HFormItem(props) {

  const {
    label,
    config,
    extMap,
    values,
    onChange,
    touches,
    children,
  } = props;

  // 表单元素的扩展字段配置隐藏属性
  if (extMap.hide) return null;

  // 表单元素删格布局
  const formItemlayout = getFormItemOffset({
    layout: extMap.layout,
    offset: extMap.offset,
  });

  // 如果 config 是对象, 则转换成数组, 统一处理
  const newConfig = is.array(config) ? config : [config];

  const ChildrenEle = newConfig
    // 过滤表单输入元素的隐藏字段
    .filter((val) => {
      const { ext = {} } = val;
      return !ext.hide;
    })
    .map((val, i) => {
      const key = `formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24, pright, center } = ext;
      const ColProps = { key, span, style: {} };

      // 计算 Col 右边内间距
      if (pright) {
        ColProps.style.paddingRight = pright;
      } else if (i < config.length - 1) {
        ColProps.style.paddingRight = 8;
      }

      if (center) {
        ColProps.style.textAlign = 'center';
      }

      const HFormItemContentProps = {
        ...val,
        label,
        onChange,
        value: values[val.id],
      }

      return (
        <Col {...ColProps}>
          <HFormItemContent {...HFormItemContentProps} />
        </Col>
      );
    });

  const formItemValidate = getFormItemValidate({
    configs: newConfig,
    touches,
    values,
  });

  // 表单元素的扩展字段
  const { space, extra, colon } = extMap;

  const FormItemProps = {
    label,
    extra,
    colon,
    ...formItemlayout,
    ...formItemValidate,
  }


  return (
    <FormItem {...FormItemProps}>
      { children ? children : (
        <Row type="flex" style={{ paddingRight: space }}>
          {ChildrenEle}
        </Row>
      ) }
    </FormItem>
  )
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
   * 表单元素 label 属性
   * 标识表单元素的名称
   * @type {String}
   */
  label: propTypes.string,

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
  onChange: propTypes.func.isRequired,

  /**
   * 记录表单元素是否是首次验证
   * @type {Object}
   */
  touches: propTypes.object.isRequired,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object.isRequired,
};

HFormItem.defaultProps = {
  label: '',
  extMap: {},
}

