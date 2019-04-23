import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card, message } from 'antd';
import Antdx from '../../components/index.js';
import path_1 from './images/1.jpg';
import path_2 from './images/2.jpg';
import path_3 from './images/3.jpg';
import path_4 from './images/4.jpg';
import path_5 from './images/5.jpg';
import path_6 from './images/6.jpg';

const { HPictureWraper } = Antdx;

class ExampleHPicture extends Component {

  static defaultProps = {

  }

  render() {
    const HPictureProps = {
      source: [path_1, path_2, path_3, path_4, path_5, path_6],
    }

    return (
      <div style={{ width: 500 }}>
        <Card>
          <HPictureWraper {...HPictureProps} />
        </Card>
      </div>
    )
  }

}

ExampleHPicture.propTypes = {

}

export default ExampleHPicture;
