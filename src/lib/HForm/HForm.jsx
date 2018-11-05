import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Form, Row, Col } from 'antd';
import styles from './styles.less';

import HFormItem from './HFormItem.jsx';

import getGridLayout from './utils/getGridLayout.js';
import getFormConfigIds from './utils/getFormConfigIds.js';
import getFormValidate from './utils/getFormValidate.js';

/**
 * 通过一个 js 配置数组 array
 * 生成一组表单元素
 */
class HForm extends Component {

  static defaultProps = {
    cols: 1,
    layout: 'horizontal',
    extMap: {},
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
    const ids = getFormConfigIds({ configs });
    const target = fields.length ? fields : ids;
    const validate = getFormValidate({ configs, values });
    if (is.array(target)) {
      const errors = {};
      target.forEach((field) => {
        if (validate[field]) {
          errors[field] = validate[field];
        }
      })
      return errors;
    }
    return validate;
  }

  validateFields = (fields = []) => {
    const { configs } = this.props;
    const ids = getFormConfigIds({ configs });
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
    const { cols, configs, layout, values, extMap } = this.props;

    const { touches } = this.state;

    const Children = configs.filter((val) => {
      const { extMap = {} } = val;
      return !extMap.hide;
    }).map((val, i) => {
      const key = `${layout}-${i}`;
      const style = lodash.get(val, 'extMap.style', {});
      const HFormItemProps = {
        config: val.config,
        extMap: {
          ...extMap,
          ...val.extMap,
          style: { ...extMap.style, ...style },
          pLayout: layout,
        },
        touches,
        onChange: this.onChange,
        values,
      };

      if (layout === 'inline') {
        return <HFormItem {...HFormItemProps} key={key} />;
      }

      const colspan = lodash.get(val, 'extMap.colspan', 1);
      const ColProps = getGridLayout({ cols, colspan });
      return (
        <Col key={key} {...ColProps}>
          <HFormItem {...HFormItemProps} />
        </Col>
      );
    });

    if (layout === 'inline') {
      return <Form layout={layout}>{Children}</Form>;
    }

    return (
      <Form layout={layout}>
        <Row type="flex">{Children}</Row>
      </Form>
    );
  }

}

HForm.propTypes = {
  /**
   * 表单组列数
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
   * 仅支持 antd 提供的表单布局 horizontal vertical inline 三种
   * @type {String}
   */
  layout: propTypes.oneOf([
    'horizontal',
    'vertical',
    'inline',
  ]),

  /**
   * 表单元素附加配置
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
   * 整个表单值
   * @type {Object}
   */
  values: propTypes.object.isRequired,
};

export default HForm;
