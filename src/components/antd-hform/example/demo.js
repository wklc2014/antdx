import React from 'react';
import propTypes from 'prop-types';
import { Form } from 'antd';
import configs from './configs.js';
import HForm, { getFormDefaultValue } from '../index.js';

function Demo(props) {
  const {} = props;
  const defaultValues = getFormDefaultValue({ config: configs });
  const values = Object.assign(
    {
      first_name: '张',
      last_name: '三',
      cityName: 'mian_yang',
    },
    defaultValues,
  );

  return (
    <Form initialValues={values}>
      <HForm cols={3} configs={configs} values={values} />
    </Form>
  );
}

Demo.propTypes = {};

Demo.defaultProps = {};

export default Demo;
