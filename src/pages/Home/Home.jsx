import React, { Component } from 'react';
import propTypes from 'prop-types';

class Home extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <div>
        <h2>线</h2>
        <div className="line-item line-diagonal">
          <span>对角线</span>
        </div>
        <div className="line-item line-level">
          <span>水平线</span>
        </div>
        <div className="line-item line-vertical">
          <span>垂直线</span>
        </div>
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;
