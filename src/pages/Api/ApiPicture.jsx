import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import { commonTabpeProps, columns } from './common/index.js';
import { dataSource } from './common/_apiPicture.js';

const ApiPicture = (props) => {

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

ApiPicture.propTypes = {

}

ApiPicture.defaultProps = {

}

export default ApiPicture;
