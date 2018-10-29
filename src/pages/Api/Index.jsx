import React, { Component } from 'react';
import propTypes from 'prop-types';
import ApiFormGroup from './ApiFormGroup.jsx';

class Api extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  render() {
    return (
      <div style={{ padding: 16 }}>
        <h2>Api</h2>
        <ApiFormGroup />
      </div>
    )
  }
}

Api.propTypes = {

}

export default Api;
