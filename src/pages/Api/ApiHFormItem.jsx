import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import { commonTabpeProps, columns } from './common/index.js';
import { dataSource } from './common/_apiHFormItem.js';

const ApiHFormItem = (props) => {

  const {

  } = props;

  const TableProps = {
    rowKey: 'id',
    ...commonTabpeProps,
    dataSource,
    columns,
  }

  return <Table {...TableProps} />;
}

ApiHFormItem.propTypes = {

}

ApiHFormItem.defaultProps = {

}

export default ApiHFormItem;
