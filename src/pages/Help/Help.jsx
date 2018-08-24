import React, { Component } from 'react';
import propTypes from 'prop-types';
import { DatePicker, Select } from 'antd';
import moment from 'moment';

class Help extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
    }
  }

  onChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({
      date,
    })
  }

  render() {
    const { date } = this.state;
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          placeholder="Select month"
          value={date}
        />
      </div>
    )
  }
}

Help.propTypes = {

}

export default Help;
