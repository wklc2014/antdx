/**
 * 通过表单配置数组
 * 生成一组表单元素
 */
import React from 'react';
import propTypes from 'prop-types';
import { Row, Col } from 'antd';
import get from 'lodash/get';
import getFormFilterConfigs from './utils/get-form-filter-configs.js';
import getFormSortConfigs from './utils/get-form-sort-configs.js';
import getFormColLayouts from './utils/get-form-col-layouts.js';
import HFormItem from './h-form-item.js';

function HForm(props) {
  const { cols, configs, onChange, values } = props;
  const colspan = 24 / cols;

  // 过滤表单元素
  const filterConfigs = getFormFilterConfigs(configs);

  // 排序表单元素
  const sortConfigs = getFormSortConfigs(filterConfigs);

  // 循环表单元素
  const formItemsEle = sortConfigs.map((val, i) => {
    const key = `h-form-${i}`;
    const newProps = {
      config: val.config,
      extMap: val.extMap,
      onChange,
      values,
    };
    const colApi = get(val, 'extMap.colApi');
    return (
      <Col key={key} span={colspan} {...colApi}>
        <HFormItem {...newProps} />
      </Col>
    );
  });

  return <Row type="flex">{formItemsEle}</Row>;
}

HForm.propTypes = {
  cols: propTypes.number,
  configs: propTypes.array,
  onChange: propTypes.func,
  values: propTypes.object,
};

HForm.defaultProps = {
  cols: 1,
  configs: [],
  onChange: () => {},
  values: {},
};

export default HForm;
