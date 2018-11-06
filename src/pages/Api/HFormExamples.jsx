import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button, Modal } from 'antd';
import exampleConfigs from '../../lib/HForm/exampleConfig/exampleConfig.js';

class HFormExamples extends Component {

  static defaultProps = {

  }

  state = {
    visible: false
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const {

    } = this.props;

    const ModalProps = {
      title: "HForm Config Example",
      visible: this.state.visible,
      onOk: this.handleOk,
      onCancel: this.handleCancel,
      bodyStyle: {
        height: '60vh',
        overflowY: 'scroll',
      }
    }

    return (
      <div style={{ padding: '16px 0' }}>
        <Button type="primary" onClick={this.showModal}>示例</Button>
        <Modal {...ModalProps}>
          <pre>{JSON.stringify(exampleConfigs, null, 2)}</pre>
        </Modal>
      </div>
    )
  }

}

HFormExamples.propTypes = {

}

export default HFormExamples;
