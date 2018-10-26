import React, { Component } from 'react';
import propTypes from 'prop-types';

class Help extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = ({ id, value }) => {
    console.log(`id>>>${id}_____value>>>${value}`);
    const { values } = this.state;
    this.setState({ values: { ...values, [id]: value } });
  }

  render() {
    return (
      <div>
        <h2>Help</h2>

      </div>
    )
  }
}

Help.propTypes = {

}

export default Help;
