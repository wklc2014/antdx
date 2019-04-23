import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, message } from 'antd';
import Antdx from '../../components/index.js';

const { HTagGroup } = Antdx;

class ExampleHTagGroup extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      tags: ['北京', '上海'],
    }
  }

  onChange = (tag) => {
    this.setState({ tags: tag });
  }

  render() {
    const HTagGroupProps = {
      maxLength: 12,
      tagApi: {
        color: '#108ee9',
      },
      tags: this.state.tags,
      onChange: this.onChange,
    }

    return (
      <div style={{ width: 500 }}>
        <Card>
          <HTagGroup {...HTagGroupProps} />
        </Card>
      </div>
    )
  }

}

ExampleHTagGroup.propTypes = {

}

export default ExampleHTagGroup;
