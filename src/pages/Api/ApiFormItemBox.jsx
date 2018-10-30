import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import { commonTabpeProps, columns } from './common/index.js';
import { dataSource } from './common/_apiFormItemBox.js';

const ApiFormItemBox = (props) => {

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

ApiFormItemBox.propTypes = {

}

ApiFormItemBox.defaultProps = {

}

export default ApiFormItemBox;
