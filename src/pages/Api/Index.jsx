import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'antd';
import ApiHForm from './ApiHForm.jsx';
import ApiHFormItem from './ApiHFormItem.jsx';
import ApiHFormItemContent from './ApiHFormItemContent.jsx';
import ApiHPicture from './ApiHPicture.jsx';

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

  render() {
    return (
      <div>
        <Collapse accordion>
          <Panel header="<HForm />" key="1">
            <ApiHForm />
          </Panel>
          <Panel header="<HFormItem />" key="2">
            <ApiHFormItem />
          </Panel>
          <Panel header="<HFormItemContent />" key="3">
            <ApiHFormItemContent />
          </Panel>
          <Panel header="<HPicture />" key="4">
            <ApiHPicture />
          </Panel>
        </Collapse>
      </div>
    )
  }
}

Api.propTypes = {

}

export default Api;
