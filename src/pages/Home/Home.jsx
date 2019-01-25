import React, { Component } from 'react';
import propTypes from 'prop-types';

class Home extends Component {

  static defaultProps = {

  }

  state = {
  }

  onChange = (e) => {
    this.setState({
      code: e
    })
  }

  onInputChange = (e) => {
    this.setState({
    })
  }

  render() {

    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;
