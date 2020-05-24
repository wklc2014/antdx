/**
 * 表单元素内容输入区域
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form } from 'antd';
import itemTypes from './items/index.js';

function HFormItemControl(props) {
  const { id, type, itemApi, contentApi, ext, onChange } = props;

  const params = {
    api: contentApi,
    ext,
    onChange: e => {},
  };

  if (!itemTypes[type]) {
    console.log(`${id} type is error~`);
    return null;
  }

  const newProps = {
    ...itemApi,
  };

  const noNameTypes = ['render', 'button'];
  if (is.not.inArray(type, noNameTypes)) {
    newProps.name = id;
  }

  return <Form.Item {...newProps}>{itemTypes[type](params)}</Form.Item>;
}

HFormItemControl.propTypes = {
  /**
   * 表单元素 name 属性
   * @type {String}
   */
  id: propTypes.string.isRequired,

  /**
   * 表单元素输入类型
   * 标识表单元素的输入类型
   * @type {String}
   */
  type: propTypes.string.isRequired,

  /**
   * 表单元素 Form.Item 的 api
   * @type {Object}
   */
  itemApi: propTypes.object,

  /**
   * 表单元素输入区域的 api
   * @type {Object}
   */
  contentApi: propTypes.object,

  /**
   * 表单元素扩展配置
   * @type {Object}
   */
  ext: propTypes.object,

  /**
   * 表单的同步搜集方法,
   * @type {Func}
   */
  onChange: propTypes.func,
};

HFormItemControl.defaultProps = {
  api: {},
  ext: {},
  onChange: null,
};

export default HFormItemControl;
