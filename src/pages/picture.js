import React, { Component } from 'react';
import { Card } from 'antd';

import HPicture from '../../lib/HPicture.jsx';
import path from './common/1.jpg';

export default class Picture extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      width: 200,
    }
  }

  render() {
    return (
      <div style={{ padding: 16 }}>
        <Card>
          <HPicture src={path} />
        </Card>
      </div>
    )
  }

}

Picture.propTypes = {

}
