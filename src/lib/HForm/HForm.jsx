/**
 * 通过一个 js 配置数组 array
 * 生成一组表单元素
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Form, Row, Col } from 'antd';
import HFormItem from './HFormItem.jsx';
import hocFormValidate from './hoc/hocFormValidate.js';
import styles from './styles.less';

class HForm extends Component {

  static defaultProps = {
    cols: 1,
    configs: [],
    layout: 'horizontal',
    extMap: {},
    onChange: null,
    values: {},
  }

  /**
   * 根据表单元素横向所占列数
   * 设置 Col 组件 span 参数值
   * @param  {Number} colspan 表单元素横向所占列数
   * @return {Number}         [description]
   */
  getColSpanProps = (colspan = 1) => {
    const { cols } = this.props;
    const span = parseInt(24 / cols, 10) * colspan;
    return Math.min(span, 24);
  }

  render() {
    const { configs, extMap, layout, onChange, touches, values } = this.props;

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
        onChange,
        values,
      };

      if (layout === 'inline') {
        return <HFormItem key={key} {...HFormItemProps} />;
      }

      const colspan = lodash.get(val, 'extMap.colspan', 1);
      return (
        <Col key={key} span={this.getColSpanProps(colspan)}>
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
   * 即: 表单组一行显示表单元素的个数
   * @type {Number}
   */
  cols: propTypes.number,

  /**
   * 表单配置数组
   * @type {Array}
   */
  configs: propTypes.array,

  /**
   * 表单元素附加配置
   * 该配置会直接附加到每一个表单元素上
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 表单布局类型
   * 仅支持 antd 提供的表单布局 horizontal vertical inline 三种
   * inline 布局不建议表单元素过多的时候使用
   * @type {String}
   */
  layout: propTypes.oneOf([
    'horizontal',
    'vertical',
    'inline',
  ]),

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func,

  /**
   * 整个表单值
   * @type {Object}
   */
  values: propTypes.object,
};

export default hocFormValidate(HForm);
