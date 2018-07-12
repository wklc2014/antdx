import React, { Component } from 'react';
import { Card } from 'antd';

import HForm from '../../../lib/HForm.jsx';
import { configs } from './common/hformConfigExample.js';

export default class IndexPage extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {
        myName: ['111', '444'],
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

  render() {
    const { values } = this.state;
    console.log('values>>>', values);
    return (
      <div style={{ padding: 16 }}>
        <Card>
          <HForm
            configs={configs}
            cols={2}
            onChange={this.onChange}
            values={values}
            itemSpace={16}
          />
        </Card>
      </div>
    )
  }

}

IndexPage.propTypes = {

}
