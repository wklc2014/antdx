import React, { Component } from 'react';
import { Card, Button } from 'antd';

import HForm from '../../lib/HForm.jsx';
import configs from '../../lib/example/hformConfigExample.js';

export default class IndexPage extends Component {

  static defaultProps = {

  }

  onChange = ({ id, value }) => {
    this.props.onUpdate({ id, value });
  }

  handleValidate = () => {
    this.inst.validateFields();
  }

  handleReset = () => {
    this.inst.resetFields();
  }

  handleErrors = () => {
    const errors = this.inst.getFieldsError();
    console.log('errors>>>', errors);
  }

  render() {
    const { values } = this.props;

    return (
      <div style={{ padding: 16 }}>
        <Card>
          <p>
            <Button
              type="primary"
              onClick={this.handleValidate}
              style={{ margin: '0 10px' }}
            >
              验证
            </Button>
            <Button
              type="primary"
              onClick={this.handleErrors}
              style={{ margin: '0 10px' }}
            >
              获取错误
            </Button>
            <Button
              type="primary"
              onClick={this.handleReset}
            >
              重置
            </Button>
          </p>
          <HForm
            configs={configs}
            cols={2}
            onChange={this.onChange}
            values={values}
            itemSpace={16}
            ref={inst => this.inst = inst}
          />
        </Card>
      </div>
    )
  }

}

IndexPage.propTypes = {

}
