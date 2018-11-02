import React, { Component } from 'react';
import { Card, Button } from 'antd';

import HForm from '../../lib/HForm/HForm.jsx';
import configs from '../../lib/HForm/exampleConfig/exampleConfig.js';

export default class IndexPage extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
    }
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

  handleClick = (e) => {
    this.setState({ formLayout: e });
  }

  render() {
    const { values } = this.props;
    const { formLayout } = this.state;

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
          <p>
            <span>改变布局：</span>
            <Button type="primary" onClick={() => this.handleClick('horizontal')}>horizontal</Button>、
            <Button type="primary" onClick={() => this.handleClick('vertical')}>vertical</Button>、
            <Button type="primary" onClick={() => this.handleClick('inline')}>inline</Button>
          </p>
          <HForm
            cols={3}
            configs={configs}
            layout={formLayout}
            values={values}
            extMap={{
              space: 16,
              layout: values.payMoney,
            }}
            onChange={this.onChange}
            ref={inst => this.inst = inst}
          />
        </Card>
      </div>
    )
  }

}

IndexPage.propTypes = {

}
