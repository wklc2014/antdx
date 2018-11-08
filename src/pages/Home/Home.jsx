import { connect } from 'react-redux';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import DemoLines from './DemoLines.jsx';
import DemoWarterMark from './DemoWarterMark.jsx';

class Home extends Component {

  static defaultProps = {

  }

  render() {
    const {
      warterMarkText,
    } = this.props;

    return (
      <div>
        <DemoLines />
        <DemoWarterMark
          text={warterMarkText}
          onUpdate={this.props.onUpdate}
        />
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;
