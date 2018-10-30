import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import { commonTabpeProps, columns } from './common/index.js';
import { dataSource } from './common/_apiFormItemContent.js';

const ApiFormItemContent = (props) => {

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

ApiFormItemContent.propTypes = {

}

ApiFormItemContent.defaultProps = {

}

export default ApiFormItemContent;
