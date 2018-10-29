import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'antd';
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
      <Collapse>
        <Panel header="<FormGroup />">
          <ApiFormGroup />
        </Panel>
      </Collapse>
    )
  }
}

Api.propTypes = {

}

export default Api;
