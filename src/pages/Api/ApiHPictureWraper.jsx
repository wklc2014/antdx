import React from 'react';
import propTypes from 'prop-types';
import { Table } from 'antd';
import { commonTabpeProps, columns } from './common/index.js';
import { dataSource } from './common/_apiHPictureWraper.js';

const ApiHPictureWraper = (props) => {

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

ApiHPictureWraper.propTypes = {

}

ApiHPictureWraper.defaultProps = {

}

export default ApiHPictureWraper;
