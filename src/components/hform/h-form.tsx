import React from 'react';
import propTypes from 'prop-types';
import { IHformProps } from './type';

const HForm = (props: IHformProps) => {
  const {
    cols = 1,
    configs = [],
    formApi = {},
    onChange = () => {},
    values = {},
  } = props;

  return <div></div>;
};

HForm.defaultProps = {};

export default HForm;
