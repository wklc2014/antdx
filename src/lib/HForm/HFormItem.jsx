/**
 * 根据一个配置对象
 * 渲染一个 Antd 的 FormItem 元素
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import HFormItemContent from './HFormItemContent.jsx';

import getFormItemValidate from './utils/getFormItemValidate.js';
import getFormItemLayout from './utils/getFormItemLayout.js';
import getFormItemLabel from './utils/getFormItemLabel.js';
import getFormItemStyle from './utils/getFormItemStyle.js';

const FormItem = Form.Item;

const HFormItem = (props) => {

  const {
    config,
    extMap,
    touches,
    values,
    onChange,
  } = props;

  // 表单元素的扩展字段配置隐藏属性
  if (extMap.hide) return null;

  // 如果 config 是对象, 则转换成数组, 统一处理
  const newConfig = is.array(config) ? config : [config];

  // 过滤表单输入元素的隐藏字段
  const newFilterConfig = newConfig.filter((val) => {
    const { ext = {} } = val;
    return !ext.hide;
  })

  const Children = newFilterConfig.map((val, i) => {
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

  const validate = getFormItemValidate({
    configs: newFilterConfig,
    touches,
    values,
  });

  const newFormItemLayout = getFormItemLayout(extMap);
  const newFormItemLabel = getFormItemLabel(extMap);
  const newFormItemStyle = getFormItemStyle(extMap);

  const FormItemProps = {
    className: extMap.className,
    colon: extMap.colon,
    extra: extMap.extra,
    ...validate,
    ...newFormItemLabel,
    ...newFormItemStyle,
    ...newFormItemLayout,
  }

  return (
    <FormItem {...FormItemProps}>
      <Row type="flex" gutter={8} style={{ paddingRight: extMap.space }}>
        {Children}
      </Row>
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
   * 表单元素扩展配置
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 记录表单元素是否是首次验证
   * @type {Object}
   */
  touches: propTypes.object,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object.isRequired,
};

HFormItem.defaultProps = {
  extMap: {},
  touches: {},
}

export default HFormItem;