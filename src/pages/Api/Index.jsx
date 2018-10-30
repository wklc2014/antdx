import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'antd';
import ApiFormGroup from './ApiFormGroup.jsx';
import ApiFormItemBox from './ApiFormItemBox.jsx';
import ApiFormItemContent from './ApiFormItemContent.jsx';
import ApiPicture from './ApiPicture.jsx';

const { Panel } = Collapse;

class Api extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      values: {},
    }
  }

  onChange = () => {

  }

  render() {
    return (
      <div style={{ padding: 16 }}>
        <Collapse accordion>
          <Panel header="<FormGroup />" key="1">
            <ApiFormGroup />
          </Panel>
          <Panel header="<FormItemBox />" key="2">
            <ApiFormItemBox />
          </Panel>
          <Panel header="<FormItemContent />" key="3">
            <ApiFormItemContent />
          </Panel>
          <Panel header="<ApiPicture />" key="4">
            <ApiPicture />
          </Panel>
        </Collapse>
      </div>
    )
  }
}

Api.propTypes = {

}

export default Api;
