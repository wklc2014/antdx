import React, { Component } from 'react';
import propTypes from 'prop-types';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import FormBox from './FormBox.jsx';

import getFormItemLayout from './utils/getFormItemLayout.js';
import getGridLayout from './utils/getGridLayout.js';
import getConfigIds from './utils/getConfigIds.js';
import getFormValidate from './utils/getFormValidate.js';

/**
 * 通过一个 js 配置数组 array
 * 生成一组表单元素
 */
class FormGroup extends Component {

  static defaultProps = {
    cols: 1,
    layout: 'horizontal',
    itemLayout: '',
    itemSpace: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      /**
       * 记录表单元素是否首次输入
       * @type {Object}
       */
      touches: {},
    }
  }

  onChange = ({ id, value }) => {
    this.updateTouches(id);
    this.props.onChange({ id, value });
  }

  updateTouches = (id) => {
    const { touches } = this.state;
    if (!touches[id]) {
      this.setState({
        touches: {
          ...touches,
          [id]: true,
        },
      })
    }
  }

  getFieldsError = (fields = []) => {
    const { configs, values } = this.props;
    const ids = getConfigIds(configs);
    const targetFields = fields.length ? fields : ids;
    const formValidate = getFormValidate({ configs, values });
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
    const { configs } = this.props;
    const ids = getConfigIds(configs);
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
    this.setState({ touches });
  }

  resetFields = () => {
    this.setState({ touches: {} });
  }

  render() {
    const {
      cols,
      configs,
      layout,
      itemClassName,
      itemLayout,
      itemSpace,
      itemStyle,
      values,
    } = this.props;

    const { touches } = this.state;

    const ChildrenEle = configs.map((val, i) => {
      const key = `${layout}-${i}`;
      const { label, config, extMap = {} } = val;
      const { colspan } = extMap;

      const newItemLayout = getFormItemLayout({
        layout,
        itemLayout,
        cols,
        colspan,
      });

      const FormBoxProps = {
        label,
        config,
        extMap: {
          className: itemClassName,
          layout: newItemLayout,
          space: itemSpace,
          style: itemStyle,
          ...extMap,
        },
        onChange: this.onChange,
        values,
        touches,
      };

      if (layout === 'inline') {
        return (
          <div key={key} style={{ display: 'inline-block' }}>
            <FormBox {...FormBoxProps} />
          </div>
        )
      }

      const ColProps = getGridLayout({ cols, colspan });
      return (
        <Col key={key} {...ColProps}>
          <FormBox {...FormBoxProps} />
        </Col>
      );
    });

    return (
      <section>
        <Form layout={layout}>
          <Row type="flex">{ChildrenEle}</Row>
        </Form>
      </section>
    );
  }

}

FormGroup.propTypes = {
  /**
   * 表单列数
   * 表单组一行显示表单元素的个数
   * @type {Number}
   */
  cols: propTypes.number,

  /**
   * 表单配置数组
   * @type {Array}
   */
  configs: propTypes.array.isRequired,

  /**
   * 表单布局类型
   * 包括 antd 提供的表单布局 horizontal vertical inline 三种
   * @type {String}
   */
  layout: propTypes.oneOf([
    'horizontal',
    'vertical',
    'inline',
  ]),

  /**
   * 表单元素附加的 css 类
   * @type {String}
   */
  itemClassName: propTypes.string,

  /**
   * 表单元素附加的 css 样式
   * @type {Object}
   */
  itemStyle: propTypes.object,

  /**
   * 表单元素栅格布局
   * 表单为 horizontal 布局时,
   * 表单元素的 label 元素和 表单输入区域的栅格布局
   * 采用 antd 提供的栅格布局, 或内置的栅格布局映射值
   * @type {String or object}
   */
  itemLayout: propTypes.oneOfType([
    propTypes.object,
    propTypes.string,
  ]),

  /**
   * 表单元素间隔距离
   * @type {Number}
   */
  itemSpace: propTypes.number,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func.isRequired,

  /**
   * 整个表单值
   * @type {Object}
   */
  values: propTypes.object.isRequired,
};

export default FormGroup;