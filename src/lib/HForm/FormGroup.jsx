import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import FormItemBox from './FormItemBox.jsx';

import getFormItemLayout from './utils/getFormItemLayout.js';
import getFormGridLayout from './utils/getFormGridLayout.js';
import getFormConfigIds from './utils/getFormConfigIds.js';
import getFormValidate from './utils/getFormValidate.js';

/**
 * 通过一个 js 配置数组 array
 * 生成一组表单元素
 */
class FormGroup extends Component {

  static defaultProps = {
    formCols: 1,
    formLayout: 'horizontal',
    formItemClassName: '',
    formItemStyle: {},
    formItemLayout: '',
    formItemSpace: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      /**
       * 记录表单元素是否首次输入
       * @type {Object}
       */
      formItemTouches: {},
    }
  }

  onChange = ({ id, value }) => {
    this.updateTouches(id);
    this.props.onChange({ id, value });
  }

  updateTouches = (id) => {
    const { formItemTouches } = this.state;
    if (!formItemTouches[id]) {
      this.setState({
        formItemTouches: {
          ...formItemTouches,
          [id]: true,
        },
      })
    }
  }

  getFieldsError = (fields = []) => {
    const { formConfigs, formValues } = this.props;
    const ids = getFormConfigIds(formConfigs);
    const targetFields = fields.length ? fields : ids;
    const formValidate = getFormValidate({ formConfigs, formValues });
    if (is.array(targetFields)) {
      const errors = {};
      targetFields.forEach((field) => {
        if (formValidate[field]) {
          errors[field] = formValidate[field];
        }
      })
      return errors;
    }
    return formValidate;
  }

  validateFields = (fields = []) => {
    const { formConfigs } = this.props;
    const ids = getFormConfigIds(formConfigs);
    const touches = {};
    ids.forEach((id) => {
      if (is.array(fields)) {
        if (fields.length === 0 || is.inArray(id, fields)) {
          touches[id] = true;
        }
      } else {
        touches[id] = true;
      }
    })
    this.setState({ formItemTouches: touches });
  }

  resetFields = () => {
    this.setState({ formItemTouches: {} });
  }

  render() {
    const {
      formCols,
      formConfigs,
      formLayout,
      formValues,
      formItemClassName,
      formItemLayout,
      formItemSpace,
      formItemStyle,
    } = this.props;

    const { formItemTouches } = this.state;

    const ChildrenEle = formConfigs.map((val, i) => {
      const key = `${formLayout}-${i}`;
      const { label, config, extMap = {} } = val;
      const { colspan } = extMap;

      const newFormItemLayout = getFormItemLayout({
        formCols,
        formLayout,
        formItemLayout,
        formItemColspan: colspan,
      });

      const FormItemBoxProps = {
        formValues,
        formItemConfig: config,
        formItemExtMap: {
          className: formItemClassName,
          layout: newFormItemLayout,
          space: formItemSpace,
          style: formItemStyle,
          ...extMap,
        },
        formItemLabel: label,
        formItemTouches,
        onChange: this.onChange,
      };

      if (formLayout === 'inline') {
        return (
          <div key={key} style={{ display: 'inline-block' }}>
            <FormItemBox {...FormItemBoxProps} />
          </div>
        )
      }

      const ColProps = getFormGridLayout({
        formCols,
        formItemColspan: colspan
      });
      return (
        <Col key={key} {...ColProps}>
          <FormItemBox {...FormItemBoxProps} />
        </Col>
      );
    });

    return (
      <section>
        <Form layout={formLayout}>
          <Row type="flex">{ChildrenEle}</Row>
        </Form>
      </section>
    );
  }

}

FormGroup.propTypes = {
  /**
   * 表单组列数
   * 表单组一行显示表单元素的个数
   * @type {Number}
   */
  formCols: propTypes.number,

  /**
   * 表单配置数组
   * @type {Array}
   */
  formConfigs: propTypes.array.isRequired,

  /**
   * 表单布局类型
   * 仅支持 antd 提供的表单布局 horizontal vertical inline 三种
   * @type {String}
   */
  formlayout: propTypes.oneOf([
    'horizontal',
    'vertical',
    'inline',
  ]),

  /**
   * 整个表单值
   * @type {Object}
   */
  formValues: propTypes.object.isRequired,

  /**
   * 表单元素附加的 css 类
   * @type {String}
   */
  formItemClassName: propTypes.string,

  /**
   * 表单元素附加的 css 样式
   * @type {Object}
   */
  formItemStyle: propTypes.object,

  /**
   * 表单元素栅格布局
   * 仅当表单为 horizontal 布局时,
   * 设置表单元素的 label 元素和 表单输入区域的栅格布局
   * 值为 antd 提供的栅格布局, 或内置的栅格布局映射值
   * @type {String or object}
   */
  formItemLayout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),

  /**
   * 表单元素水平间隔距离
   * @type {Number}
   */
  formItemSpace: propTypes.number,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,
};

export default FormGroup;