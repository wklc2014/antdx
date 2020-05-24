/**
 * 单个表单元素
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Row, Col, Input } from 'antd';
import get from 'lodash/get';
import HFormItemContent from './h-form-item-content.js';

import getItemFilterConfig from './utils/get-item-filter-config.js';
import getContentPlaceholder from './utils/get-content-placeholder.js';
import getContentStyle from './utils/get-content-style.js';
import getItemRequired from './utils/get-item-required.js';
import getItemColLayouts from './utils/get-item-col-layouts.js';

// import getItemStyle from './utils/get-item-style.js';
// import getItemRowStyle from './utils/get-item-row-style.js';
// import getItemSortConfigs from './utils/get-item-sort-config.js';
// import getControlData from './utils/get-control-data.js';

function ItemContent({ extMap = {}, children }) {
  if (extMap.type === 'inputGroup') {
    return <Input.Group compact>{children}</Input.Group>;
  }

  const RowProps = {
    type: 'flex',
    gutter: 16,
    style: { paddingRight: 10 },
    ...extMap.rowApi,
  };
  return <Row {...RowProps}>{children}</Row>;
}

function HFormItem(props) {
  const { config, extMap, onChange, values } = props;

  // 过滤表单输入区域
  const filterConfig = getItemFilterConfig(config);

  // 表单输入区域数量
  const length = filterConfig.length;
  const colspan = 24 / length;

  // 循环表单输入区域
  const children = filterConfig.map((val, i) => {
    const key = `h-form-item-${i}`;

    // 自动生成 placeholder 属性
    const placeholder = getContentPlaceholder({ ...val, label: extMap.label });
    const style = getContentStyle({ ...val });
    const ContentProps = {
      id: val.id,
      type: val.type,
      itemApi: {
        ...val.itemApi,
        noStyle: extMap.type === 'inputGroup',
      },
      contentApi: {
        placeholder,
        style,
        value: values[val.id],
        ...val.contentApi,
      },
      ext: val.ext,
      onChange,
    };

    if (extMap.type === 'inputGroup') {
      return <HFormItemContent key={key} {...ContentProps} />;
    }

    return (
      <Col key={key} span={colspan} {...val.colApi}>
        <HFormItemContent {...ContentProps} />
      </Col>
    );
  });

  const ItemProps = {
    label: extMap.label,
    labelCol: { flex: '100px' },
    required: getItemRequired({ config: filterConfig }),
    ...extMap.itemApi,
  };

  return (
    <Form.Item {...ItemProps}>
      <ItemContent extMap={extMap}>{children}</ItemContent>
    </Form.Item>
  );
}

HFormItem.propTypes = {
  /**
   * 表单元素内容配置
   * @type {Array/Object}
   */
  config: propTypes.oneOfType([propTypes.object, propTypes.array]).isRequired,

  /**
   * 表单元素配置
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 表单的同步搜集方法,
   * @type {Func}
   */
  onChange: propTypes.func,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object,
};

HFormItem.defaultProps = {
  config: {},
  extMap: {},
  onChange: null,
  values: {},
};

export default HFormItem;
