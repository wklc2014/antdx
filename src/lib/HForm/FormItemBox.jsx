/**
 * 根据一个配置对象
 * 渲染一个 Antd 的 FormItem 元素
 */
import React from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import FormItemContent from './FormItemContent.jsx';

import getFormItemOffsetLayout from './utils/getFormItemOffsetLayout.js';
import getFormItemValidate from './utils/getFormItemValidate.js';

const FormItem = Form.Item;

const FormItemBox = (props) => {

  const {
    formItemConfig,
    formItemLabel,
    formItemExtMap,
    formItemTouches,
    formValues,
    onChange,
  } = props;

  // 表单元素的扩展字段配置隐藏属性
  if (formItemExtMap.hide) return null;

  // 表单元素删格布局
  const formItemlayout = getFormItemOffsetLayout({
    formItemLayout: formItemExtMap.layout,
    formItemOffset: formItemExtMap.offset,
  });

  // 如果 config 是对象, 则转换成数组, 统一处理
  const newFormItemConfig = is.array(formItemConfig) ? formItemConfig : [formItemConfig];

  // 过滤表单输入元素的隐藏字段
  const newFormItemFilterConfig = newFormItemConfig.filter((val) => {
    const { ext = {} } = val;
    return !ext.hide;
  })

  const ChildrenEle = newFormItemFilterConfig.map((val, i) => {
      const key = `formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24, pright, pbottom, center } = ext;
      const ColProps = { key, span, style: {} };

      // 计算 Col 右边内间距
      if (pright !== undefined) {
        ColProps.style.paddingRight = pright
      } else if (i < newFormItemFilterConfig.length - 1) {
        ColProps.style.paddingRight = 8
      }

      // 计算 Col 下边内间距
      if (newFormItemFilterConfig.length > 2) {
        if (pbottom !== undefined) {
          ColProps.style.paddingBottom = pbottom;
        } else if (i < newFormItemFilterConfig.length - 1) {
          ColProps.style.paddingBottom = 3;
        }
      }

      // 计算 Col 元素对其方式
      if (center) {
        ColProps.style.textAlign = 'center';
      }

      const FormItemContentProps = {
        label: formItemLabel,
        id: val.id,
        type: val.type,
        api: val.api,
        ext: val.ext,
        onChange,
        value: formValues[val.id],
      }

      return (
        <Col {...ColProps}>
          <FormItemContent {...FormItemContentProps} />
        </Col>
      );
    });

  const formItemValidate = getFormItemValidate({
    formItemConfigs: newFormItemFilterConfig,
    formItemTouches,
    formValues,
  });

  // 表单元素的扩展字段
  const { space, extra, colon, className, style } = formItemExtMap;

  const FormItemProps = {
    className,
    colon,
    extra,
    label: formItemLabel,
    style,
    ...formItemlayout,
    ...formItemValidate,
  }


  return (
    <FormItem {...FormItemProps}>
      <Row type="flex" style={{ paddingRight: space }}>
        {ChildrenEle}
      </Row>
    </FormItem>
  )
}

FormItemBox.propTypes = {
  /**
   * 表单元素配置
   * @type {Array/object}
   */
  formItemConfig: propTypes.oneOfType([
    propTypes.object,
    propTypes.array,
  ]).isRequired,

  /**
   * 表单元素 label 属性
   * 标识表单元素的名称
   * @type {String}
   */
  formItemLabel: propTypes.string,

  /**
   * 表单元素扩展配置
   * @type {Object}
   */
  formItemExtMap: propTypes.object,

  /**
   * 记录表单元素是否是首次验证
   * @type {Object}
   */
  formItemTouches: propTypes.object,

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
  formValues: propTypes.object.isRequired,
};

FormItemBox.defaultProps = {
  formItemLabel: '',
  formItemExtMap: {},
  formItemTouches: {},
}

export default FormItemBox;