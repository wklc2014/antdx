import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Link from 'umi/link';

import HForm from '../../../lib/HForm.jsx';
import { configs } from '../../../lib/example/hformConfigExample.js';

import path_1 from '../common/1.jpg';
import path_2 from '../common/2.jpg';
import path_3 from '../common/3.jpg';
import path_4 from '../common/4.jpg';
import path_5 from '../common/5.jpg';
import path_6 from '../common/6.jpg';

export default class IndexPage extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {
        myName: ['111', '444'],
        imageView: [
          { path: path_1 },
          { path: path_2 },
          { path: path_3 },
          { path: path_4 },
          { path: path_5 },
          { path: path_6 },
        ],
      },
    }
  }

  onChange = ({ id, value }) => {
    const { values } = this.state;
    this.setState({
      values: {
        ...values,
        [id]: value,
      },
    })
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
    const { values } = this.state;
    return (
      <div style={{ padding: 16 }}>
        <Card>
          <p>
            <Link to="/">Go to Home page</Link>

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
